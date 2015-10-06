/* Help configure the state-base ui.router */
(function() {
    'use strict';

    angular
        .module('router')
        .provider('routerHelper', routerHelperProvider);

    routerHelperProvider.$inject = ['$stateProvider', '$urlRouterProvider'];
    /* @ngInject */
    function routerHelperProvider($stateProvider, $urlRouterProvider) {
        /* jshint validthis:true */
        var config = {
            docTitle: undefined,
            resolveAlways: {}
        };

        this.configure = function(cfg) {
            angular.extend(config, cfg);
        };

        this.$get = RouterHelper;
        RouterHelper.$inject = ['$rootScope', '$state', 'logger'];
        /* @ngInject */
        function RouterHelper($rootScope, $state, logger) {
            var handlingStateChangeError = false;
            var hasOtherwise = false;
            var stateCounts = {
                errors: 0,
                changes: 0
            }; 

            var service = {
                configureStates: configureStates,
                getStates: getStates,
                stateCounts: stateCounts
            };

            init();

            return service;

            ///////////////

            function configureStates(states, otherwisePath) {
                states.forEach(function(state) {
                    state.config.resolve =
                        angular.extend(state.config.resolve || {}, config.resolveAlways);
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }

            function handlePreRouting() {
                $rootScope.$on('$ionicView.enter', function() {
                        if(ionic.Platform.isAndroid()) {
                            // Handle native transitions via native transitions plugin
                            
                        };
                     }
                 );
             }

            function handleRoutingErrors() {
                // Route cancellation:
                // On routing error, you can either show a toast like most apps do
                // Or you can stick to the web way of showing mobile related 404's
                // Provide an exit clause if it tries to do it twice.
                $rootScope.$on('$stateChangeError',
                    function(event, toState, toParams, fromState, fromParams, error) {
                        if (handlingStateChangeError) {
                            return;
                        }
                        stateCounts.errors++;
                        handlingStateChangeError = true;
                        var destination = (toState &&
                            (toState.title || toState.name || toState.loadedTemplateUrl)) ||
                            'unknown target';
                        var msg = 'Error loading page ' + destination + '. ' +
                            (error.data || '') + '. <br/>' + (error.statusText || '') +
                            ': ' + (error.status || '');
                        logger.toast(msg, 'long', 'bottom', 'err'); // This shows a toast

                    }
                );
            }

            function init() {
                handlePreRouting();
                handleRoutingErrors();
                updateDocTitle();
            }

            function getStates() { return $state.get(); }

            function updateDocTitle() {
                $rootScope.$on('$stateChangeSuccess',
                    function(event, toState, toParams, fromState, fromParams) {
                        stateCounts.changes++;
                        handlingStateChangeError = false;
                        var title = config.docTitle + ' ' + (toState.title || '');
                        $rootScope.title = title; // data bind to <title>
                    }
                );
            }
        }
    }
})();
