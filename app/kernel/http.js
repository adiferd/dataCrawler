module.exports = function(app) {
	
	var bodyParser = require('body-parser');
	app.use(bodyParser.json());

	app.use(bodyParser.urlencoded({	extended: false }));
}