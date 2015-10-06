(function() {
  "use strict";
  angular
    .module("app.core")
    .service("sessionService", sessionService)
    .service("storageService", storageService);

  function sessionService($window) {
    
    return {
      set: set,
      get: get,
      setObject: setObject,
      getObject: getObject
    };

    function set(key, value) {
      $window.sessionStorage[key] = value;
    }

    function get(key) {
      return $window.sessionStorage[key] || '';
    }

    function setObject(key, value) {
      $window.sessionStorage[key] = JSON.stringify(value);
    }

    function getObject(key) {
      return JSON.parse($window.sessionStorage[key] || '{}');
    }
  }
  

  function storageService($window) {

    return {
      set: set,
      get: get,
      setObject: setObject,
      getObject: getObject
    };

    function set(key, value) {
      $window.localStorage[key] = value;
    }

    function get(key) {
      return $window.localStorage[key] || '';
    }

    function setObject(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    }

    function getObject(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }

  }

})();