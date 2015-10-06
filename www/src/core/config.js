(function() {
    'use strict';

    angular
        .module('app.core')
        .config(configure);

    /* @ngInject */
    function configure ($compileProvider, $logProvider, $ionicConfigProvider) {

        $compileProvider.debugInfoEnabled(false); 

        // Disable jsScrolling on Android.
        // Use native scroll.
        if(ionic.Platform.isAndroid()) {
            $ionicConfigProvider.scrolling.jsScrolling(false); 
        }  
        
        // turn debugging off/on (no info or warn) but you still get error messages
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
    }
})();