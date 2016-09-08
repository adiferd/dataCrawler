'use strict';

module.exports = function(appRoutes, ctrl, router, mdlwr) {
	//routes for cms
	appRoutes.cms.get('/login', ctrl.CMS.Auth.show);

	//end of routes for web
};
