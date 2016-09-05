module.exports = function(app) {
	var models  = require(__dirname+'/../model');

	var CronJob = require('cron').CronJob;
	
	var foursqJob = new CronJob('03 10 01 * * *', function() 
	{
		

	}, function () 
	{
		console.log('malah berhenti');
	},
	true
	);

	var fbJob = new CronJob('03 10 01 * * *', function() 
	{
		

	}, function () 
	{
		console.log('malah berhenti');
	},
	true
	);
}