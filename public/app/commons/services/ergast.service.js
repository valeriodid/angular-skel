/* ergast.service.js */

(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('ErgastService', ErgastService)
        .factory('ErgastDelegate', ErgastDelegate);

    ErgastService.$inject = ['$resource'];
    ErgastDelegate.$inject = ['$log', 'ErgastService'];

    function ErgastService($resource) {
        var path = 'http://ergast.com/api/f1/';

        return $resource(path, null, {
            getRaceSchedule: {
                method: 'GET',
                url    : path + "current.json"
            },
            getRaceResults: {
                method: 'GET',
                url    : path + ":year/:round/results.json"
            },
            getDriver: {
                method: 'GET',
                url    : path + "drivers/:driverId.json"
            }
        });
    }

    function ErgastDelegate($log, ErgastService){
        return {
            getRaceSchedule: getRaceSchedule,
            getRaceResults: getRaceResults,
            getDriver: getDriver
        };

        function complete(response){
            return response;
        }

        function fails(error){
            $log.error('XHR failed.' + error.data);
        }

        function getRaceSchedule() {
            return ErgastService.getRaceSchedule().$promise
                .then(complete)
                .catch(fails);
        }

        function getRaceResults(params) {
            return ErgastService.getRaceResults(params).$promise
                .then(complete)
                .catch(fails);
        }

        function getDriver(params) {
            return ErgastService.getDriver(params).$promise
                .then(complete)
                .catch(fails);
        }
    }

})();