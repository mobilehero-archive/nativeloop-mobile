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
 * {nativeloop} plugin for transforming ES6/ES2015 code to ES5 code
 * 
 * @module 
 * @nativeloop/plugins/es6
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

module.exports.tasks = [{
	"module": "@nativeloop/mobile/plugins/babel",
	"options": {
		"presets": [
			"es2015"
		]
	},
	"includes": ["**/*.js", "!backbone2.js", "**/alloy/lodash.js"],
	"events": ["preload", "preparse"]
}]