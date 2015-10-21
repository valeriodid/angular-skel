/* results.controller.js */

(function () {
    'use strict';

    angular
        .module('app.f1')
        .controller('ResultsController', ResultsController);

    ResultsController.$inject = ['$log', '$state', 'Utils', 'ErgastDelegate'];

    function ResultsController($log, $state, Utils, ErgastDelegate) {
        var vm = this;

        vm.raceResults = {};

        init();

        function init() {
            getRaceResults();
        }

        function getRaceResults(){
            var params = {
                year: $state.params.year,
                round: $state.params.round
            };

            ErgastDelegate.getRaceResults(params).then(function(data){
                if(Utils.isEmptyOrUndefined(data.MRData.RaceTable.Races)){
                    vm.raceResults = data.MRData.RaceTable;
                }
                else{
                    vm.raceResults = data.MRData.RaceTable.Races[0];
                    vm.raceResults.when = moment(vm.raceResults.date+' '+vm.raceResults.time).format('MMMM Do YYYY, HH:mm');
                }
            });
        }
    }
})();