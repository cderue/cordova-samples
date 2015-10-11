(function() {
    'use strict';

    angular
        .module('app.device')
        .factory('deviceservice', deviceservice);

    /* @ngInject */
    function deviceservice() {
  
        var service = {
            getDeviceInfo: getDeviceInfo
        };

        return service;

        function getDeviceInfo() {
            var device = {};
			
			return device
		}
    }
})();