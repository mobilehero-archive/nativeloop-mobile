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
 * Fix resolve issues by replacing functionality
 * 
 * @module 
 * @nativeloop/mobile/plugins/resolver/resolver/resolve-fix
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
var wrench = require("wrench");
var path = require("path");
var fs = require("fs-extra");
var minimatch = require('minimatch');

/**
 * 
 * 
 * @param {string} rootpath - Directory path to start searching for files
 * @param {Object} registry - Object used to store files/modules found
 * @param {string[]} registry.files - Files found in search
 * @param {string[]} registry.directories - Directories found in search
 * @param {Object[]} registry.core - Core modules to use in app
 * @param {Object[]} registry.fallback - Modules to use in case of reference to missing module
 * @param {string[]} [params.includes] - Array of glob patterns to match files to be included in search
 * @param {Object} [logger=console] - Alloy logger object
 */
module.exports = function(rootpath, registry, includes, logger) {

	registry = registry || {};

	_.defaults(registry, {
		files: [],
		directories: [],
		core: [],
		fallback: [],
		alias: [],
	});
	logger = logger || console;

	// logger.debug("includes: " + JSON.stringify(includes, null, 2));
	includes = includes || ["**/*.js", "**/*.json", "!resolver.js"];

	/**
	 * Inject necessary code into the file app.js
	 */
	function injectCode() {

		var fullpath = path.join(rootpath, "app.js");
		var source = fs.readFileSync(fullpath, 'utf8');
		var test = /\/\/ALLOY-RESOLVER/.test(source);
		logger.trace("CODE INJECTED ALREADY: " + test);
		if(!test) {
			source = source.replace(/(var\s+Alloy[^;]+;)/g, "$1\n//ALLOY-RESOLVER\nvar process=require('/process');\nAlloy.resolve=new (require('/resolver'))().resolve;\n");
			fs.writeFileSync(fullpath, source);
		}
	}

	/**
	 * Fix module resolution in all found javascript files
	 */
	function fixFiles() {
		logger.trace("inside fixFiles()");

		var filepaths = match(registry.files, includes.concat(["!**/*.json"]), {
			nocase: true,
			matchBase: true,
			dot: true,
		});

		_.each(filepaths, function(file) {
			var fullpath = path.join(rootpath, file);
			var basepath = path.posix.dirname(file);
			var basefile = path.posix.resolve(file);
			var source = fs.readFileSync(fullpath, 'utf8');
			logger.trace("fixing file: " + fullpath);

			var requireRegex = /(require)\s*\(((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*)\)/g;
			var staticRequireRegex = /(require)(?:\(\s*['"])([^'"]+)(?:['"]\s*\))/g;
			var alloyDynamicRegex = /require\(\s*['"]alloy\//g
			var alloyResolveRegex = /require\(\s*Alloy\.resolve\(/g


			source = source.replace(requireRegex, function(entireText, requireText, requestedModule) {
				// logger.error("entireText: " + entireText);

				var isStaticRequire = staticRequireRegex.test(entireText);
				var isDynamicAlloyRequire = alloyDynamicRegex.test(entireText);
				var isAlloyResolve = alloyResolveRegex.test(entireText);
				// logger.trace("isStaticRequire: " + isStaticRequire);
				// logger.trace("isDynamicAlloyRequire: " + isDynamicAlloyRequire);
				// logger.trace("isAlloyResolve: " + isAlloyResolve);
				if(isStaticRequire) {
					var revisedText = entireText.replace(staticRequireRegex, function($1, $2, $3) {
						var resolved_path = resolver.resolve($3, basepath);
						return 'require("' + resolved_path + '")';
					});
					// logger.debug("returning: " + revisedText);
					return revisedText;
				} else if(isDynamicAlloyRequire) {
					// logger.trace("fixFiles: found dynamic alloy require");
					// logger.debug("returning: " + entireText);
					return entireText;
				} else if(isAlloyResolve) {
					// logger.trace("fixFiles: found Alloy.resolve require");
					// logger.debug("returning: " + entireText);
					return entireText;
				} else {
					// logger.trace("isDynamicAlloyRequire: " + isDynamicAlloyRequire);
					// logger.trace("fixFiles: found dynamic non-alloy require");
					// logger.debug("returning: " + 'require(Alloy.resolve(' + requestedModule + ', "' + basepath + '"))');
					return 'require(Alloy.resolve(' + requestedModule + ', "' + basepath + '"))';
				}
			});

			// source = source.replace(requireRegex, function($1, $2, $3) {
			// 	var requireText = $1;
			// 	var requestedModule = $2;

			// 	if(staticRequireRegex.test(requireText)) {
			// 		// var staticRequireSource = $1;
			// 		requireText = requireText.replace(staticRequireRegex, function($1, $2, $3) {
			// 			var resolved_path = resolver.resolve($3, basepath);
			// 			return 'require("' + resolved_path + '")';
			// 		});
			// 		return requireText;
			// 	} else {
			// 		logger.trace(requireText);
			// 		var isDynamicAlloyRequire = alloyDynamicRegex.test(requireText);
			// 		if(isDynamicAlloyRequire) {
			// 			logger.trace("fixFiles: found dynamic alloy require");
			// 			return requireText;
			// 		}
			// 		logger.trace("isDynamicAlloyRequire: " + isDynamicAlloyRequire);
			// 		logger.trace("test: " + alloyDynamicRegex.test(requireText));
			// 		logger.trace("fixFiles: found dynamic non-alloy require");
			// 		return 'require(Alloy.resolve(' + $3 + ', "' + basepath + '"))';
			// 	}
			// });`

			fs.writeFileSync(fullpath, source, { mode: 0o755 });
		});
	}


	/**
	 * Replace backslashes for cross-platform usage
	 * Adapted from https://github.com/sindresorhus/slash
	 * 
	 * @param {string} intput - value needing to have backslashes replaced in.
	 * @returns {string}
	 */
	function replaceBackSlashes(input) {
		var isExtendedLengthPath = /^\\\\\?\\/.test(input);
		var hasNonAscii = /[^\x00-\x80]+/.test(input);

		if(isExtendedLengthPath || hasNonAscii) {
			return input;
		}

		return input.replace(/\\/g, '/');
	};

	/**
	 * Find all files that match extension criteria
	 * 
	 * @param {string} rootpath - Absolute path of the directory from which file search will begin
	 * @param {string[]|string} [patterns="**"] - Pattern(s) to be used when attempting to match files found
	 * @returns {string[]} - Matched file paths
	 */
	function findFiles(rootpath, patterns) {
		// logger.trace("inside findFiles()");
		var patterns = patterns || ['**'];
		if(_.isString(patterns)) {
			patterns = [patterns];
		}
		var files = _.map(wrench.readdirSyncRecursive(rootpath), function(filename) {
			return path.posix.sep + replaceBackSlashes(filename);
		});
		var matchedFiles = match(files, patterns, {
			nocase: true,
			matchBase: true,
			dot: true,
		});
		return _.filter(matchedFiles, function(file) {
			return !fs.statSync(path.join(rootpath, file)).isDirectory();
		}) || [];

	};

	/**
	 * Find items in array that match a set of patterns
	 * Adapted from https://github.com/sindresorhus/multimatch
	 * 
	 * @param {string[]} list
	 * @param {string[]|string} patterns
	 * @param {Object} options
	 * @returns {string[]}
	 */
	function match(list, patterns, options) {
		list = list || [];
		patterns = patterns || [];
		if(_.isString(patterns)) {
			patterns = [patterns];
		}

		if(list.length === 0 || patterns.length === 0) {
			return [];
		}

		options = options || {};
		return patterns.reduce(function(ret, pattern) {
			var process = _.union
			if(pattern[0] === '!') {
				pattern = pattern.slice(1);
				process = _.difference;
			}
			return process(ret, minimatch.match(list, pattern, options));
		}, []);
	};

	/**
	 *  Find and process all files
	 */
	function loadFiles() {
		// logger.trace("inside loadFiles()");
		var allfiles = findFiles(rootpath, ["**/*.js", "**/*.json"]);
		// logger.debug(JSON.stringify(allfiles, null, 2));

		_.forEach(allfiles, function(filepath) {
			registry.files.push(filepath);
		});

		var packagepaths = _.filter(allfiles, function(filepath) {
			return(/.+(package\.json)/.test(filepath));
		});
		_.forEach(packagepaths, function(filepath) {
			var content = fs.readFileSync(path.posix.join(rootpath, filepath), 'utf8');
			var json = JSON.parse(content);
			if(json.main) {
				registry.directories.push({
					id: path.posix.dirname(filepath),
					path: path.posix.resolve(path.posix.join(path.posix.dirname(filepath), json.main))
				});
			}
		});

		var indexpaths = _.filter(allfiles, function(filepath) {
			return(/.+(index\.js)/.test(filepath));
		});

		_.forEach(indexpaths, function(filepath) {
			var existingdir = _.find(registry.directories, function(dir) {
				return dir.id === path.posix.dirname(filepath);
			});
			if(!existingdir) {
				registry.directories.push({
					id: path.posix.dirname(filepath),
					path: filepath
				});
			}
		});

		return registry;
	};


	/**
	 *  Write registry file to resolver.js
	 */
	function writeRegistry() {
		logger.trace("inside writeRegistry()");
		var filepath = path.join(rootpath, "resolver.js");
		var content = fs.readFileSync(filepath, 'utf8');
		var regex = /(var\s+registry\s+=\s+)[^;]*(;)/g;
		var modified = content.replace(regex, "$1" + JSON.stringify(registry) + "$2");
		fs.writeFileSync(filepath, modified);
	}

	fs.copySync(path.join(__dirname, "lib", "resolver.js"), path.join(rootpath, "resolver.js"));
	fs.copySync(path.join(__dirname, "lib", "path.js"), path.join(rootpath, "path.js"));
	fs.copySync(path.join(__dirname, "lib", "process.js"), path.join(rootpath, "process.js"));
	fs.copySync(path.join(__dirname, "lib", "alloy", "lodash.js"), path.join(rootpath, "alloy", "lodash.js"));

	loadFiles();

	var r = require("./lib/resolver");
	var resolver = new r(registry, logger, true);
	registry = resolver.registry;

	injectCode();
	fixFiles();
	writeRegistry();

	Object.defineProperty(this, "registry", {
		get: function() {
			return _.clone(registry);
		},
		enumerable: true,
		configurable: false
	});
}