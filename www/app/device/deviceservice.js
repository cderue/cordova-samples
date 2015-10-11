(function() {
    'use strict';

    angular
        .module('app.device')
        .factory('deviceservice', deviceservice);

    /* @ngInject */
    function deviceservice($cordovaDevice) {
  
        var service = {
            getDeviceInfo: getDeviceInfo
        };

        return service;

        function getDeviceInfo() {
            var device = $cordovaDevice.getDevice();
			
			return device;
		}
    }
})();