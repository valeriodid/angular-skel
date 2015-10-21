/* navbar.directive.js */

/*
* @desc directive myNavbar
* @example <my-navbar></my-navbar> or <div my-navbar></div>
*/

angular
    .module('app.layout')
    .directive('myNavbar', myNavbar);

myNavbar.$inject = ['$log'];    

function myNavbar($log) {

    var directive = {
        link: link,
        templateUrl: 'app/commons/directives/navbar/navbar.html',
        restrict: 'EA'
    };

    return directive;

    function link(scope, element, attrs) {
    }
}