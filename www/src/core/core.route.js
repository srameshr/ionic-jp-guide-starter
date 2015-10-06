(function() {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        var otherwise = '/404';
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: '404',
                config: {
                    url: '/404',
                    templateUrl: 'src/core/404.html',
                    title: '404'
                }
            }
        ];
    }
})();