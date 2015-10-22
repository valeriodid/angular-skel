/* drivers.controller.js */

(function () {
    'use strict';

    angular
        .module('app.f1')
        .controller('DriversController', DriversController);

    DriversController.$inject = ['$log', '$state', 'Utils', 'ErgastDelegate'];

    function DriversController($log, $state, Utils, ErgastDelegate) {
        var vm = this;

        vm.title = 'Home RC';

        init();

        function init() {
            $log.debug('init DriversController', vm);

            Utils.isNotEmpty($state.params.driverId) ? getDriver() : getDrivers();
        }

        function getDriver(){
            vm.driver = {};

            var params = {
                driverId: $state.params.driverId
            };

            ErgastDelegate.getDriver(params).then(function(data){
                $log.debug(data);
                vm.driver = data.MRData.DriverTable.Drivers[0];
            });
        }

        function getDrivers(){
            vm.drivers = {};

            var params = {
                year: $state.params.year
            };

            ErgastDelegate.getDrivers(params).then(function(data){
                $log.debug(data);
                vm.drivers = data.MRData.DriverTable;
            });
        }
    }
})();