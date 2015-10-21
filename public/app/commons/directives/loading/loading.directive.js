/* loading.directive.js */

/*
* @desc directive myNavbar
* @example <my-loading></my-loading> or <div my-loading></div>
*/

angular
    .module('app.layout')
    .directive('myLoading', myLoading);

myLoading.$inject = ['$log'];    

function myLoading($log) {

    var directive = {
        link: link,
        templateUrl: 'app/commons/directives/loading/loading.html',
        restrict: 'EA'
    };

    return directive;

    function link(scope, element, attrs) {
    }
}