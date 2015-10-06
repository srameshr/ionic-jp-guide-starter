(function() {
	"use strict";
	angular
		.module("app", 
			[
				'ionic',
				'ngCordova',
				'logger',
				'router',
				'exceptions',
				'app.core',
				'app.tabs',
				'app.tabOne'
			]
		);
})();