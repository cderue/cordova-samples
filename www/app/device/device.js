(function() {
    'use strict';
    angular
        .module('app.device')
        .controller('Device', Device);

    /* @ngInject */
    function Device(deviceservice) {
        /*jshint validthis: true */
        var vm = this;
        vm.device = {};


        activate();

        function activate() {
            return getDeviceInfo().then(function() {
                //logger.info('Device Info View');
            });
        }

        function getDeviceInfo() {
            return deviceservice.getDeviceInfo().then(function(data) {
                vm.device = data;
                return vm.device;
            });
        }
    }
})();