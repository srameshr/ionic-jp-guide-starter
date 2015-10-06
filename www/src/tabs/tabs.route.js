(function() {
    'use strict';

    angular
        .module('app.tabs')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/app/tab-one-parent');
    }

    function getStates() {
        return [
            {
                state: 'tabs',
                config: {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'src/tabs/templates/tabs.html'
                }
            }
        ];
    }
})();