"use strict";

module.exports = [
	{
		"module": "@nativeloop/mobile/plugins/npm",
		"dirname": "${event.dir.lib}",
		"args": ["install"],
		"events": "preload",
		"weight": 100,
	},
	{
		"module": "@nativeloop/mobile/plugins/underscore-fix",
		"events": "postcompile",
		"weight": 100,
	},
	{
		"module": "@nativeloop/mobile/plugins/backbone-fix",
		"events": "postcompile",
		"weight": 110,
	},
	// TODO:  Need to figure out way to add hook after Titanium has completed
	// {
	// 	"module": "@nativeloop/mobile/plugins/remove-invalid-header",
	// 	"events": "postcompile",
	// 	"weight": 120,
	// 	"platforms": ["mobileweb"],
	// },
	{
		"module": "@nativeloop/mobile/plugins/widget-config",
		"events": "preload",
		"weight": 110,
	},
	{
		"module": "@nativeloop/mobile/plugins/nodejs",
		"events": "postcompile",
		"includes": ["**/*.js", "**/*.json", "!resolver.js", "!**/alloy/underscore.js"],
		"weight": 200,
	},
	{
		"module": "@nativeloop/mobile/plugins/babeljs",
		"options": {
			"presets": ["es2015"]
		},
		"includes": ["**/*.js", "!backbone2.js", "**/alloy/lodash.js"],
		"events": ["preload"],
		"weight": 200,
	},
	{
		"module": "@nativeloop/mobile/plugins/babeljs",
		"options": {
			"presets": ["es2015"]
		},
		"includes": ["**/*.js", "!backbone2.js", "**/alloy/lodash.js"],
		"events": ["preparse"],
		"weight": 100,
	},
]