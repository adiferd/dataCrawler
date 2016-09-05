"use strict";

var fs      = require("fs");
var path    = require("path");
var model	= {};

//DO NOT CHANGE LINE BELOW

//DO NOT USE INDEX.JS AS FILE NAME UNDER FOLDER

fs
.readdirSync(__dirname)
.filter(function(file) {

	if (fs.lstatSync(__dirname+'/'+file).isDirectory()) 
	{
		var innermodel = new Object;

		fs
		.readdirSync(__dirname+'/'+file)
		.filter(function(innerfile) {
			return (innerfile.indexOf(".") !== 0) && (fs.lstatSync(__dirname+'/'+file+'/'+innerfile).isFile());
		})
		.forEach(function(innerfile) {
			innermodel[innerfile.split(".")[0]] =  require(path.join(__dirname, file, innerfile));
		});

		model[file] = innermodel;
	}

	return (file.indexOf(".") !== 0) && (fs.lstatSync(__dirname+'/'+file).isFile()) && (file !== "index.js");
})
.forEach(function(file) {
	model[file.split(".")[0]] = require(path.join(__dirname, file));
});

module.exports = model;