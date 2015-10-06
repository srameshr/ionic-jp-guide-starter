(function() {
    'use strict';

    angular
        .module('exceptions')
        .factory('exception', exception);

    /* @ngInject */
    function exception($q) {
        var service = {
            catcher: catcher
        };
        return service;

        function catcher(message) {
            return function(e) {
                var thrownDescription;
                var newMessage;
                if (e.data && e.data.status) {
                    thrownDescription = '\n' + e.data.message;
                    newMessage = message + thrownDescription;
                }
                // Should notify user? 
                return $q.reject(e);
            };
        }
    }
})();