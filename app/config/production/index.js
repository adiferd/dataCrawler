"use strict";
//DON'T MODIFY THIS FILE
var fs      = require("fs");
var path    = require("path");
var configs	= {};

fs
.readdirSync(__dirname)
.filter(function(file) {
	if (!fs.lstatSync(__dirname+'/'+file).isDirectory())
		return (file.indexOf(".") !== 0) && (file !== "index.js");
})
.forEach(function(file) {
	configs[file.split(".")[0]] = require(path.join(__dirname, file))[process.env.NODE_ENV];
});

global.APP_CONFIGS = configs;
