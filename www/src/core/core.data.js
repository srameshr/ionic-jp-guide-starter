
(function() {
    "use strict";

    angular
        .module("app.core")
        .service("dataService", dataService);

    

    function dataService($http, $q, exception) {

        /* 
         * Public Methods Accessible to the client via 'dataService' service
         *
         * @ngdoc: Exposed Module Reveal Pattern. Provides abstracted methods to clients
         * 
         * @ngmethod : get();
         * @name DataService#get()
         * @returns {promise (DO)} Returns a promise based on response data

         * @ngmethod : post();
         * @returns {promise (DO)} Returns a promise based on response data
         */
        return {
            get: get,
            post: post,
            put: put,
            del: del
        };

        /*
         * Private Method
         * @ngmethod: success 
         * @returns {object} Success with http request
        */
        function success(resp) {
            return $q.resolve(resp);
        }

        /*
         * Private Method
         * @ngmethod: failure 
         * @returns {object} Failure with http request
        */
        function failure(error) {
            return $q.reject(error);
        }

        /*
         * Public Method
        */
        function get(address, qParams, shouldCache) {
            
            var config = {
                method: 'GET',
                url: address,
                params: qParams || null,
                cache: shouldCache || false
            };
            return $http(config).then(success).catch(failure);
        }

        function post(address, data) {
        	var config = {
                method: 'POST',
                url: address,
      			data: data
            };
            return $http(config).then(success).catch(failure);
        }

        function put(address, data) {
            return $http.put(address, data).then(success).catch(failure);
            
        }

        function del(address,data) {
            return $http.delete(address).then(success).catch(failure);
        }
        
    }
})();