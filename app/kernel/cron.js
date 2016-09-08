module.exports = function(app) {
	var models  = require(__dirname+'/../model');

	var CronJob = require('cron').CronJob;
	
	var foursqJob = new CronJob('* * * * * *', function() 
	{
		

	}, function () 
	{
		console.log('malah berhenti');
	},
	true
	);

	var fbJob = new CronJob('* * * * * *', function() 
	{
		

	}, function () 
	{
		console.log('malah berhenti');
	},
	true
	);
}