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
                url    : path + ":year.json"
            },
            getRaceResults: {
                method: 'GET',
                url    : path + ":year/:round/results.json"
            },
            getDrivers: {
                method: 'GET',
                url    : path + ":year/drivers.json"
            },
            getDriver: {
                method: 'GET',
                url    : path + "drivers/:driverId.json"
            },
            getDriverStandings: {
                method: 'GET',
                url    : path + ":year/driverStandings.json"
            },
            getConstructorStandings: {
                method: 'GET',
                url    : path + ":year/constructorStandings.json"
            },
        });
    }

    function ErgastDelegate($log, ErgastService){
        return {
            getRaceSchedule: getRaceSchedule,
            getRaceResults: getRaceResults,
            getDrivers: getDrivers,
            getDriver: getDriver,
            getDriverStandings: getDriverStandings,
            getConstructorStandings: getConstructorStandings
        };

        function complete(response){
            return response;
        }

        function fails(error){
            $log.error('XHR failed.' + error.data);
        }

        function getRaceSchedule(params) {
            return ErgastService.getRaceSchedule(params).$promise
                .then(complete)
                .catch(fails);
        }

        function getRaceResults(params) {
            return ErgastService.getRaceResults(params).$promise
                .then(complete)
                .catch(fails);
        }

        function getDrivers(params) {
            return ErgastService.getDrivers(params).$promise
                .then(complete)
                .catch(fails);
        }

        function getDriver(params) {
            return ErgastService.getDriver(params).$promise
                .then(complete)
                .catch(fails);
        }

        function getDriverStandings(params) {
            return ErgastService.getDriverStandings(params).$promise
                .then(complete)
                .catch(fails);
        }

        function getConstructorStandings(params) {
            return ErgastService.getConstructorStandings(params).$promise
                .then(complete)
                .catch(fails);
        }
    }

})();