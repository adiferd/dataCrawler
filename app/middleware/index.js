"use strict";

var fs      = require("fs");
var path    = require("path");
var ctrl	= {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    ctrl[file.split(".")[0]] = require(path.join(__dirname, file));
  });

module.exports = ctrl;