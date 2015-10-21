/* home.controller.js */

(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log'];

    function HomeController($log) {
        var vm = this;

        init();

        function init() {
            vm.title = 'Angular Skel';
        }
    }
})();