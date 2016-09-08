module.exports = function() {
	var mongoose = require('mongoose');

	mongoose.connect(global.APP_CONFIGS.database.endpoint+':'+global.APP_CONFIGS.database.port+'/'+global.APP_CONFIGS.database.dbName);
}
