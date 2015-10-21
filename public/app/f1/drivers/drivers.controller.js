/* drivers.controller.js */

(function () {
    'use strict';

    angular
        .module('app.f1')
        .controller('DriversController', DriversController);

    DriversController.$inject = ['$log', '$state', 'ErgastDelegate'];

    function DriversController($log, $state, ErgastDelegate) {
        var vm = this;

        vm.title = 'Home RC';
        vm.driver = {};

        init();

        function init() {
            $log.debug('init DriversController', vm);

            getDriver();
        }

        function getDriver(){
            var params = {
                driverId: $state.params.driverId
            };

            ErgastDelegate.getDriver(params).then(function(data){
                $log.debug(data);
                vm.driver = data.MRData.DriverTable.Drivers[0];
            });
        }
    }
})();