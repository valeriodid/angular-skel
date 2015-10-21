/* core.config.js */

(function () {
    'use strict';

    var core = angular.module('app.core');

    core.$inject = ['$log', '$rootScope', '$httpProvider'];
    core.config(routeConfig);

    // Routing
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home',{
                url: '/',
                controller: 'HomeController',
                controllerAs: 'homeVm',
                templateUrl: 'app/home/home.html'
            })
            .state('raceschedule',{
                url: '/f1/:year/raceschedule',
                controller: 'RacescheduleController',
                controllerAs: 'racescheduleVm',
                templateUrl: 'app/f1/raceschedule/raceschedule.html'
            })
            .state('raceresult',{
                url: '/f1/:year/:round/results',
                controller: 'ResultsController',
                controllerAs: 'resultsVm',
                templateUrl: 'app/f1/results/results.html'
            })
            .state('drivers',{
                url: '/f1/drivers/:driverId',
                controller: 'DriversController',
                controllerAs: 'driversVm',
                templateUrl: 'app/f1/drivers/drivers.html'
            })
            .state('standings',{
                url: '/f1/:year/standings',
                controller: 'StandingsController',
                controllerAs: 'standingsVm',
                templateUrl: 'app/f1/standings/standings.html'
            });
    }
})();
