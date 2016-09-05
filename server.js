'use strict';
//initiate express js
process.env.TZ = 'WIT';

var express = require('express');
var app = express();

var path = require('path');

var clc = require('cli-color');

global.appRoot = path.resolve(__dirname);

app.use(function (req, res, next) {
	global.siteUrl = req.protocol + '://' + req.get('host');	
	return next();
});

var env = require('./app/config/app').environment;

process.env.NODE_ENV = (env === 'production' || env === 'development')?env:'development';

if (process.env.NODE_ENV == 'production') 
	console.log(clc.red.bgWhite.underline('You are now in production mode of roomme, every transaction are considered as REAL trasaction!'));
else
	console.log(clc.black.bgWhite.underline('have fun while in development mode!'));

require('./app/config');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pindle');

var models = require("./app/model");

//auth modules
var passport = require('passport');

require('./app/kernel/passport')(passport, app);

//http
require('./app/kernel/http')(app);

//ctrl and middleware
var ctrl = require('./app/controller');
var mdlwr = require('./app/middleware');

var router = express.Router();
app.use(router);

require('./app/kernel/interceptor')(app);

//helpers
var appRoutes = new Object;

require('./app/kernel/routing')(app, express, router, appRoutes);

require('./app/routes')(appRoutes, ctrl, router, mdlwr);

app.listen(global.APP_CONFIGS.app.port);
console.log('API listening at port ' + global.APP_CONFIGS.app.port);