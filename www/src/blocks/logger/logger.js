(function() {
    'use strict';

    angular
        .module('logger')
        .factory('logger', logger);

    function logger($log, $cordovaToast) {
        var service = {
            showToasts     : true,
            toast          : toast,
            log            : $log.log    // straight to console
        };

        return service;
        /////////////////////

        function toast(message, length, pos, type) {
            
            if(ionic.Platform.isWebView()) {
                $cordovaToast.show(message, length || 'short', pos || 'bottom');
            }
            
            
            if(type === "err") {
                $log.error("Error: " + message)
            }
            else if(type === "info") {
                $log.info("Info: " + message)   
            }
            else if(type === "warn") {
                $log.warn("Warn: " + message);
            }  
            else {
                $log.error("Error: " + message);
            }
        }

    }
}());