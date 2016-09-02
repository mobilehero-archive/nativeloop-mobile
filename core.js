"use strict";
/***
 *                          __     _  __       __                     
 *       ____ ___   ____   / /_   (_)/ /___   / /_   ___   _____ ____ 
 *      / __ `__ \ / __ \ / __ \ / // // _ \ / __ \ / _ \ / ___// __ \ 
 *     / / / / / // /_/ // /_/ // // //  __// / / //  __// /   / /_/ / 
 *    /_/ /_/ /_/ \____//_.___//_//_/ \___//_/ /_/ \___//_/    \____/ 
 *                                                                    
 *                  mobile solutions for everyday heroes
 *                                                                    
 * @file 
 * core module for {nativeloop}, a framework for building native mobile
 * apps using nodejs style javascript.
 * 
 * @module 
 * @nativeloop/core
 * 
 * @author 
 * Brenton House <brenton.house@gmail.com>
 * 
 * @copyright
 * Copyright (c) 2016 by Superhero Studios Incorporated.  All Rights Reserved.
 *      
 * @license
 * Licensed under the terms of the MIT License (MIT)
 * Please see the license.md included with this distribution for details.
 * 
 */

var _ = require("lodash");
var path = require("path");
var resolve = require("resolve");
// var config;
var _event;
var debug = require('debug');
var log = debug('nativeloop');
var warn = debug('nativeloop');
debug.log = console.info.bind(console);
var alloyParser = require("./lib/alloy-parser");

var nativeloop_widgets = require("alloy-widget-nativeloop/lib/widgets");

var CONST;
var CU;
var U;

function handler() {}
module.exports = handler;

handler.init = function(params) {
	// console.debug("params: " + JSON.stringify(params, null, 2));

	CONST = params.constants;
	CU = params.compilerUtils;
	U = params.utils;

	alloyParser.init({
		CONST: CONST,
		CU: CU,
		U: U,
		nativeloop_widgets: nativeloop_widgets,
	});

	params.task("pre:load", handler.preload);
	params.task("pre:compile", handler.precompile);
	params.task("post:compile", handler.postcompile);
	params.task("compile:app.js", handler.appjs);
}

handler.getAlloyFromFile = function(filename) {

	// console.trace("***** INSIDE getAlloyFromFile()");
	var doc = U.XML.parseFromFile(filename);
	var docRoot = doc.documentElement;

	if(_.toLower(docRoot.nodeName) === "nativeloop") {
		docRoot.nodeName = CONST.ROOT_NODE;
		docRoot.setAttribute("module", "nativeloop");
	}

	// Make sure the markup has a top-level <Alloy> tag
	else if(docRoot.nodeName !== CONST.ROOT_NODE) {
		exports.die([
				'Invalid view file "' + filename + '".',
				'All view markup must have a top-level <Alloy> tag'
			]);
	}

	return docRoot;
};

handler.preparse = function(func) {
	console.log("********* WRAPPING uglifyjs.parse **********");
	return _.wrap(func, function(func, code, options) {
		console.log("********* PRE:PARSE **********");
		var params = { code: code };
		executeScripts("preparse", params);
		return func(params.code, options);
	});
}

handler.alloyParser = alloyParser.parse;


function splitTasks(tasks) {
	var results = [];
	if(!_.isArray(tasks)) {
		tasks = [tasks];
	}
	// handler.logger.trace("splitting tasks...");
	// handler.logger.trace("tasks: " + JSON.stringify(tasks, null, 2));
	_.forEach(tasks, function(task) {

		if(_.isArray(task.events) && !_.isEmpty(task.events)) {
			// handler.logger.trace("found events to split");
			_.forEach(task.events, function(event) {
				var splitTask = _.cloneDeep(task);
				splitTask.events = event;
				results.push(splitTask);
			});
		} else {
			results.push(task);
		}

	});
	return results;

}

var init = _.once(function() {
	loadConfig();
	configureTasks();
});

function loadTasks() {
	var tasks = _.cloneDeep(_.get(handler.config, "nativeloop.tasks", []).concat(require("./lib/core_tasks")));
	// handler.logger.debug("loaded Tasks: " + JSON.stringify(tasks, null, 2));
	return tasks;
}

function configureTasks(tasks) {

	tasks = tasks || loadTasks();

	var configuredTasks = [];
	var importedTasks = [];
	// handler.logger.trace("tasks coming into configureTasks(): " + JSON.stringify(tasks, null, 2));
	_.forEach(tasks, function(task) {
		// handler.logger.trace("task: " + JSON.stringify(task, null, 2));
		if(_.isString(task)) {
			handler.logger.trace("getting default tasks for module: " + task);
			var target = require(resolve.sync(task, { basedir: handler.event.dir.project }));
			importedTasks = importedTasks.concat(target.tasks || []);
			// handler.logger.error("target.tasks: " + JSON.stringify(target.tasks, null, 2));
			// handler.logger.warn("imported tasks: " + JSON.stringify(importedTasks, null, 2));
			return true;
		} else {
			// handler.logger.trace("adding task: " + JSON.stringify(task, null, 2));
			configuredTasks.push(_.defaults(task, { weight: 1000, platforms: ["ios", "android", "mobileweb", "windows"] }));
		}
	});


	if(!_.isEmpty(importedTasks)) {
		handler.logger.debug("Configuring importedTasks")
		configuredTasks = configuredTasks.concat(configureTasks(importedTasks));
	} else {
		handler.configuredTasks = splitTasks(configuredTasks);
		// handler.logger.trace("handler.configuredTasks: " + JSON.stringify(handler.configuredTasks, null, 2));
	}
	return configuredTasks;
}

var loadConfig = function() {

	handler.logger.debug("Loading alloy config file");
	handler.config = require(path.join(handler.event.dir.resourcesPlatform, "alloy", "CFG"));
	// handler.logger.trace(JSON.stringify(handler.event, null, 2));
	// handler.logger.trace(JSON.stringify(handler.config, null, 2));
}

Object.defineProperty(handler, "event", {

	get: function() {
		return _event;
	},
	set: function(event) {
		_event = event;
		event.dir.resourcesPlatform = path.join(event.dir.resources, event.alloyConfig.platform === 'ios' ? 'iphone' : event.alloyConfig.platform);
	},
	enumerable: true,
	configurable: false
});

function executeScripts(eventName, params) {

	// handler.logger.trace("task to execute: " + JSON.stringify(handler.configuredTasks, null, 2));
	// handler.logger.trace("handler.configuredTasks: " + JSON.stringify(handler.configuredTasks, null, 2));
	var tasks = _.sortBy(_.filter(handler.configuredTasks || [], (task) => {
		return task.events === eventName && _.includes(task.platforms, handler.event.alloyConfig.platform);
	}), "weight");
	params = params || {};

	_.forEach(tasks, function(task) {

		//TODO:  Check to make sure task is an object...

		var taskParams = {
			event: handler.event,
			config: handler.config,
			logger: handler.logger,
			code: params.code,
		};

		_.defaults(taskParams, task);
		handler.logger.debug("executing task: " + task.module);
		// handler.logger.debug("taskParams: " + JSON.stringify(taskParams, null, 2));
		var target = require(resolve.sync(task.module, { basedir: handler.event.dir.project }));
		_.isFunction(target.execute) && target.execute(taskParams);

		if(taskParams.code) {
			// handler.logger.trace(taskParams.code);
			params.code = taskParams.code;
		}

	});

}

var events = ["preload", "precompile", "postcompile", "appjs"];
_.forEach(events, function(eventName) {
	handler[eventName] = function(event, logger) {
		// handler.logger = logger;
		debug.trace = logger.trace.bind(logger);
		debug.debug = logger.debug.bind(logger);
		debug.info = logger.info.bind(logger);
		debug.warn = logger.warn.bind(logger);
		debug.error = logger.error.bind(logger);
		handler.logger = debug;
		handler.event = event;
		init();

		handler.logger.warn("********************* STARTING EVENT: " + eventName + " ***************************");
		handler.logger = logger;
		// debug.trace = logger.trace.bind(logger);
		// debug.warn = logger.debug.bind(logger);
		// debug.info = logger.info.bind(logger);
		// debug.warn = logger.warn.bind(logger);
		// debug.error = logger.error.bind(logger);
		// handler.logger = debug;

		executeScripts(eventName);
		handler.logger.warn("********************* FINISHED EVENT: " + eventName + " ***************************");
	}
});