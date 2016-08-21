'use strict';

var child_process = require('child_process');
var path = require("path");
var env = Object.assign({}, process.env);
var SEPARATOR = process.platform === "win32" ? ";" : ":";
env.PATH = path.resolve(path.join(__dirname, "/node_modules/.bin")) + SEPARATOR + env.PATH;

exports.sync = function(cmd, args, opts) {

	opts = opts || {};
	opts.stdio = 'inherit';
	opts.env = env;

	if(process.platform === 'win32') {
		args = ['/c', cmd].concat(args);
		cmd = process.env.comspec;
	}

	var child = child_process.spawnSync(cmd, args, opts);

	// console.log("child.output: " + child.output);
	// console.log("child.stdout: " + child.stdout);

	// child.output && console.log("child.output: " + child.output);
	// child.stdout && console.log("child.stdout: " + child.stdout);
	// console.error("child.stderr: " + child.stderr);
	// // console.log("child.status: " + child.status);
	// child.error && console.log("child.error: " + child.error);

}

exports.async = function(cmd, args, opts) {

	return new Promise(function(resolve, reject) {

		opts = opts || {};
		opts.stdio = 'inherit';
		opts.env = env;

		if(process.platform === 'win32') {
			args = ['/c', cmd].concat(args);
			cmd = process.env.comspec;
		}

		var child = child_process.spawn(cmd, args, opts);

		child.on('close', function(code, signal) {
			// console.log("npm closed: " + code);
			// console.log("npm signal: " + signal);

			resolve({
				code: code,
				signal: signal
			});

		});

	});
}