(function() {
    'use strict';

    angular
        .module('app.device')
        .config(configureRoutes);
    
    /* @ngInject */
    function configureRoutes($stateProvider) {
        $stateProvider
          .state('app.device', {
            url: '/device',
            //controller: 'Device',
            //controllerAs: 'vm',
            views: {
              'menuContent': {
                templateUrl: 'app/device/device.html'
              }
            }
          });  
    }
})();
