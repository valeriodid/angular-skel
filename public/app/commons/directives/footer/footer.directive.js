/* footer.directive.js */

/*
* @desc directive Footer
* @example <my-footer></my-footer> or <div my-footer></div>
*/

angular
    .module('app.layout')
    .directive('myFooter', myFooter);

function myFooter() {

    var directive = {
        link: link,
        templateUrl: 'app/commons/directives/footer/footer.html',
        restrict: 'EA'
    };

    return directive;

    function link(scope, element, attrs) {
    }
}