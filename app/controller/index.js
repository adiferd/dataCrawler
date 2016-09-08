"use strict";

var fs      = require("fs");
var path    = require("path");
var ctrl	= {};

//DO NOT CHANGE LINE BELOW

//DO NOT USE INDEX.JS AS FILE NAME UNDER FOLDER

fs
.readdirSync(__dirname)
.filter(function(file) {

	if (fs.lstatSync(__dirname+'/'+file).isDirectory()) 
	{
		var innerCtrl = new Object;

		fs
		.readdirSync(__dirname+'/'+file)
		.filter(function(innerfile) {
			return (innerfile.indexOf(".") !== 0) && (fs.lstatSync(__dirname+'/'+file+'/'+innerfile).isFile());
		})
		.forEach(function(innerfile) {
			innerCtrl[innerfile.split(".")[0]] =  require(path.join(__dirname, file, innerfile));
		});

		ctrl[file] = innerCtrl;
	}

	return (file.indexOf(".") !== 0) && (fs.lstatSync(__dirname+'/'+file).isFile()) && (file !== "index.js");
})
.forEach(function(file) {
	ctrl[file.split(".")[0]] = require(path.join(__dirname, file));
});

module.exports = ctrl;