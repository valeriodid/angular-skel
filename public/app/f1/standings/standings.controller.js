/* standings.controller.js */

(function () {
    'use strict';

    angular
        .module('app.f1')
        .controller('StandingsController', StandingsController);

    StandingsController.$inject = ['$log', '$state', 'ErgastDelegate'];

    function StandingsController($log, $state, ErgastDelegate) {
        var vm = this;

        vm.standings = {
            season: $state.params.year
        };

        init();

        function init() {
            getDriverStandings();
            getConstructorStandings();
        }

        function getDriverStandings(){
            var params = {
                year: $state.params.year
            };

            ErgastDelegate.getDriverStandings(params).then(function(data){
                vm.standings.drivers = data.MRData.StandingsTable.StandingsLists[0];
            });
        }

        function getConstructorStandings(){
            var params = {
                year: $state.params.year
            };

            ErgastDelegate.getConstructorStandings(params).then(function(data){
                vm.standings.constructors = data.MRData.StandingsTable.StandingsLists[0];
            });
        }
    }
})();