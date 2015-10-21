/* raceschedule.controller.js */

(function () {
    'use strict';

    angular
        .module('app.f1')
        .controller('RacescheduleController', RacescheduleController);

    RacescheduleController.$inject = ['$log', '$state', 'ErgastDelegate'];

    function RacescheduleController($log, $state, ErgastDelegate) {
        var vm = this;

        vm.title = 'Home RC';
        vm.raceSchedule = {};

        init();

        function init() {
            $log.debug('init HomeController', vm);

            getRaceSchedule();
        }

        function getRaceSchedule(){
            ErgastDelegate.getRaceSchedule().then(function(data){
                $log.debug(data);
                vm.raceSchedule = data.MRData.RaceTable;
            });
        }
    }
})();