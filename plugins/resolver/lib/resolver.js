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
 * {nativeloop} module for resolving commonjs module during build 
 * process and at runtime.
 * 
 * @module 
 * nativeloop/lib/resolver
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


/**
 * Declare variables needed for this module
 */
var _ = require("./alloy/underscore");
var path = require("path");

if(!_.contains) {
	_.mixin({
		contains: _.includes
	});
} else if(!_.includes) {
	_.mixin({
		includes: _.contains
	});
}

/**
 * Registry for storing all the files, directories, and core modules to be used by the application.
 */
var registry = {
	files: [],
	directories: [],
	core: [],
	fallback: [],
	alias: [],
};

var logger = console;

var ensureCore = function(key, value) {

	if(!_.find(registry.core, function(item) {
			return item.id === key;
		})) {
		registry.core.push({
			id: key,
			path: value
		});
	}
}

var ensureAlias = function(key, value) {

	if(!_.find(registry.alias, function(item) {
			return item.id === key;
		})) {
		registry.alias.push({
			id: key,
			path: value
		});
	}
}

var ensureFallback = function(key, value) {

	if(!_.find(registry.fallback, function(item) {
			return item.id === key;
		})) {
		registry.fallback.push({
			id: key,
			path: value
		});
	}
}

var resolver = function resolver(_registry, _logger, building) {

	if(_registry) {
		registry = _.defaults(_registry, registry);
	}

	_logger && (logger = _logger);
	logger.error("-----------------------------------------------------------");
	if(building) {
		ensureCore("path", "/path");
		ensureCore("alloy", "/alloy");
		ensureCore("resolver", "/resolver");
		ensureAlias("alloy/underscore", "/alloy/lodash");
		ensureFallback("lodash", "/alloy/lodash");

		_.forEach(registry.fallback, function(fallback) {
			fallback.path = _resolve(fallback.path, "/");
			// logger.trace("fallback.path: " + fallback.path);
		});

		_.forEach(registry.alias, function(alias) {
			alias.id = _resolve(alias.id, "/", true);
			alias.path = _resolve(alias.path, "/");
			// logger.trace("alias.id: " + alias.id);
			// logger.trace("alias.path: " + alias.path);
		});

		_.forEach(registry.core, function(core) {
			core.path = _resolve(core.path, "/");
			// logger.trace("core.path: " + core.path);
		});
	}

	Object.defineProperty(this, "registry", {
		get: function() {
			//logger.trace("registry: " + JSON.stringify(registry,null,2));
			return _.clone(registry);
		},
		enumerable: true,
		configurable: false
	});
};

module.exports = resolver;

//      require(X) from module at path Y
//      1. If X is a core module,
//          a. return the core module
//          b. STOP
//      2. If X begins with './' or '/' or '../'
//          a. LOAD_AS_FILE(Y + X)
//          b. LOAD_AS_DIRECTORY(Y + X)
//      3. LOAD_NODE_MODULES(X, dirname(Y))
//      4. THROW "not found"

//  LOAD_AS_FILE(X)
//      1. If X is a file, load X as JavaScript text.  STOP
//      2. If X.js is a file, load X.js as JavaScript text.  STOP
//      3. If X.json is a file, parse X.json to a JavaScript Object.  STOP
//      4. If X.node is a file, load X.node as binary addon.  STOP

//  LOAD_AS_DIRECTORY(X)
//      1. If X/package.json is a file,
//          a. Parse X/package.json, and look for "main" field.
//          b. let M = X + (json main field)
//          c. LOAD_AS_FILE(M)
//      2. If X/index.js is a file, load X/index.js as JavaScript text.  STOP
//      3. If X/index.json is a file, parse X/index.json to a JavaScript object. STOP
//      4. If X/index.node is a file, load X/index.node as binary addon.  STOP

//  LOAD_NODE_MODULES(X, START)
//      1. let DIRS=NODE_MODULES_PATHS(START)
//      2. for each DIR in DIRS:
//           a. LOAD_AS_FILE(DIR/X)
//          b. LOAD_AS_DIRECTORY(DIR/X)

//  NODE_MODULES_PATHS(START)
//      1. let PARTS = path split(START)
//      2. let I = count of PARTS - 1
//      3. let DIRS = []
//      4. while I >= 0,
//          a. if PARTS[I] = "node_modules" CONTINUE
//          c. DIR = path join(PARTS[0 .. I] + "node_modules")
//          b. DIRS = DIRS + DIR
//          c. let I = I - 1
//      5. return DIRS


// Alloy doesn't like it when you include the file extension...
function convert_to_alloy_path(resolved_path) {
	var parsed_path = path.posix.parse(resolved_path);
	return path.posix.join(parsed_path.dir, parsed_path.name);
}

function check_for_alias(request) {
	// logger.trace("checking for alias: " + request);
	var alias_module = load_alias_modules(request);
	if(alias_module) {
		// logger.debug("alias_module: " + convert_to_alloy_path(alias_module));
		return convert_to_alloy_path(alias_module);
	} else {
		return convert_to_alloy_path(request);
	}
}

function _resolve(request, basepath, physical_file) {

	// logger.debug("resolve request: " + request);
	// logger.debug("resolve basepath: " + basepath);

	basepath = basepath || path.posix.sep;

	if(!physical_file) {
		var core_module = load_core_modules(request);
		if(core_module) {
			// logger.debug("core_module: " + check_for_alias(core_module));
			return check_for_alias(core_module);
		}
	}

	var start = request.substring(0, 1);
	if(start === '.' || start === '/') {

		var file_module = load_as_file(request, basepath);
		if(file_module) {
			// logger.debug("file_module: " + file_module);
			return physical_file ? file_module : check_for_alias(file_module);
		}
		var directory_module = load_as_directory(request, basepath);
		if(directory_module) {
			// logger.debug("directory_module: " + directory_module);
			return physical_file ? directory_module : check_for_alias(directory_module);
		}
	}

	var node_module = load_node_modules(request, basepath);
	if(node_module) {
		// logger.debug("node_module: " + node_module);
		return physical_file ? node_module : check_for_alias(node_module);
	}

	// var alloy_file_module = load_as_file(path.join('/', request), basepath);
	var alloy_file_module = load_as_file(request, '/');
	// logger.trace("checking for alloy_file_module: " + path.join('/', request));
	if(alloy_file_module) {
		// logger.debug("alloy_file_module: " + alloy_file_module);
		return physical_file ? alloy_file_module : check_for_alias(alloy_file_module);
	}

	// Check to see if there is a fallback module for this request
	var fallback_module = load_fallback_modules(request);
	if(fallback_module) {
		// logger.debug("fallback_module: " + fallback_module);
		return physical_file ? fallback_module : check_for_alias(fallback_module);
	}

	logger.trace("Cannot find file.  Returning request: " + request);
	// if module id can't be resolved we are using the passed in module id as-is in order to 
	// maintain backwards compatibility with older version of Alloy.
	return request;
};

resolver.prototype.resolve = _.memoize(_resolve, function(request, basepath) {
	return request + "::" + basepath;
});

function load_core_modules(request) {
	var module_path = _.find(registry.core, function(item) {
		return item.id === request;
	});
	if(module_path) {
		return module_path.path;
	}
};

function load_fallback_modules(request) {
	var module_path = _.find(registry.fallback, function(item) {
		return item.id === request;
	});
	if(module_path) {
		return module_path.path;
	}
};

function load_alias_modules(request) {
	var module_path = _.find(registry.alias, function(item) {
		return item.id === request;
	});
	if(module_path) {
		return module_path.path;
	}

	// logger.debug("alias not found: " + request);
};



//  LOAD_AS_FILE(X)
//      1. If X is a file, load X as JavaScript text.  STOP
//      2. If X.js is a file, load X.js as JavaScript text.  STOP
//      3. If X.json is a file, parse X.json to a JavaScript Object.  STOP
//      4. If X.node is a file, load X.node as binary addon.  STOP

function load_as_file(request, startpath) {

	var module_path;
	var resolved_path = path.posix.resolve(startpath, request);
	// logger.debug("resolved_path: " + resolved_path);
	_.includes(registry.files, resolved_path) && (module_path = resolved_path);
	if(module_path) {
		// logger.trace("file found: " + module_path);
		return module_path;
	}

	var extension = path.extname(request);
	if(!extension) {
		var exts = [".js", ".json"];
		_.forEach(exts, function(ext) {
			resolved_path = path.posix.resolve(startpath, request + ext);
			// logger.debug("resolved_path: " + resolved_path);
			_.includes(registry.files, resolved_path) && (module_path = resolved_path);
			if(!module_path) {
				return !module_path;
			}
		});
	}
	return module_path;
};

//  LOAD_AS_DIRECTORY(X)
//      1. If X/package.json is a file,
//          a. Parse X/package.json, and look for "main" field.
//          b. let M = X + (json main field)
//          c. LOAD_AS_FILE(M)
//      2. If X/index.js is a file, load X/index.js as JavaScript text.  STOP
//      3. If X/index.json is a file, parse X/index.json to a JavaScript object. STOP
//      4. If X/index.node is a file, load X/index.node as binary addon.  STOP

function load_as_directory(request, startpath) {
	var resolved_path = path.posix.resolve(startpath, request);
	var module_path = _.find(registry.directories, function(item) {
		return item.id === resolved_path;
	});
	if(module_path) {
		return module_path.path;
	}
};

//  LOAD_NODE_MODULES(X, START)
//      1. let DIRS=NODE_MODULES_PATHS(START)
//      2. for each DIR in DIRS:
//           a. LOAD_AS_FILE(DIR/X)
//          b. LOAD_AS_DIRECTORY(DIR/X)

function load_node_modules(request, startpath) {
	var resolved_path;
	var nodepaths = node_modules_paths(startpath);

	_.forEach(nodepaths, function(nodepath) {
		resolved_path = load_as_file(request, nodepath);
		return !resolved_path;
	});

	if(resolved_path) {
		return resolved_path;
	}

	_.forEach(nodepaths, function(nodepath) {
		resolved_path = load_as_directory(request, nodepath);
		return !resolved_path;
	});

	return resolved_path;
};

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var splitRe = /\//;

function node_modules_paths(from) {
	// guarantee that 'from' is absolute.
	from = path.posix.resolve(from);

	// note: this approach *only* works when the path is guaranteed
	// to be absolute.  Doing a fully-edge-case-correct path.split
	// that works on both Windows and Posix is non-trivial.
	var paths = [];
	var parts = from.split(splitRe);

	for(var tip = parts.length - 1; tip >= 0; tip--) {
		// don't search in .../node_modules/node_modules
		if(parts[tip] === 'node_modules') continue;
		var dir = parts.slice(0, tip + 1).concat('node_modules').join(path.posix.sep);
		paths.push(dir);
	}

	return paths;
};