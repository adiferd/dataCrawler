module.exports = function(app, express, router, appRoutes) {

	//ADD NEW ROUTE GROUP INSIDE JS OBJECT, USE TEMPLATE AS WRITTEN HERE

	var routeGroups = [
	{
		name: 'firyalff',
		prefix: 'firyalff'
	},
	{
		name: 'adiferd',
		prefix: 'adiferd'
	}
	];

	//DONT CHANGE LINES OF CODE BELOW
	var mdlwrName = '';

	for (var i = routeGroups.length - 1; i >= 0; i--) 
	{
		appRoutes[routeGroups[i].name] = express.Router();

		app.use('/'+routeGroups[i].prefix, appRoutes[routeGroups[i].name]);

		appRoutes[routeGroups[i].name].theMiddlewares = [];
	}
	exports.appRoutes = appRoutes;

}