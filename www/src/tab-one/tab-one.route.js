(function() {
	
	"use strict";

	angular
		.module("app.tabOne")
		.run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'tabs.tab-one-parent',
                config: {
                    url: '/tab-one-parent',
                    views: {
                    	'tab-one': {
                    		templateUrl: 'src/tab-one/templates/tab-one-parent.html',
                            controller: 'FounderCtrl as vm'
                    	}
                    }
                }
            },

            {
                state: 'tabs.tab-one-child',
                config: {
                    url: '/tab-one-child/:id',
                    views: {
                        'tab-one': {
                            templateUrl: 'src/tab-one/templates/tab-one-child.html',
                            controller: 'CompanyCtrl as vm',
                            resolve: {
                                company: function($stateParams, founderService) {
                                    return founderService.getCompany($stateParams.id);
                                }
                            }
                        }
                    }
                }
            }

        ];
    }
})();