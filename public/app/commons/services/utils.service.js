/* utils.service.js */

(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('Utils', Utils);

    Utils.$inject = ['$log'];

    function Utils($log) {
        return {
            isDefined: isDefined,
            isNotEmpty: isNotEmpty,
            isEmptyOrUndefined: isEmptyOrUndefined,
            isPositive: isPositive,
            isNegative: isNegative,
            checkEven: checkEven,
            getPatterns: getPatterns

        };

        function isDefined(input) {
            var notNull = (input != null) && (input != "null");
            var notUndefined = (input != undefined) && (input != "undefined");
            return notNull && notUndefined;
        }

        function isNotEmpty(input) {
            if(typeof input == typeof []){
                return _.any(input, function(item){
                    return isNotEmpty(item);
                });
            }
            else if(typeof input == typeof {}){
                var inputKeys = Object.keys(input);
                return _.any(inputKeys, function(inputKey){
                    return isNotEmpty(input[inputKey]);
                });
            }
            else if(typeof input == typeof ""){
                return (input.trim().length > 0) && (input != "") && isDefined(input);
            }
            else if(typeof input == typeof 1){
                return !isNaN(input) && (input != Infinity) && (input != -Infinity);
            }
            else {
                return isDefined(input);
            }
        }

        function isEmptyOrUndefined(input) {
            return !isNotEmpty(input);
        }

        function isPositive(input) {
            return !isNaN(input) && (input > 0);
        }

        function isNegative(input) {
            return !isNaN(input) && (input < 0);
        }

        function checkEven(input) {
            return number%2 == 0 ? number : number+1;
        }

        function getPatterns() {
            return {
                onlyNumbers : /(^\d+$)?/,
                onlyGrade   : /^(([2-9][0-9])|([1][0][0-9])|(110))$/, // 20-110
                onlyYear    : /^((19|20|21|22)\d\d)$/,
                name        : /^[a-z '-/]+$/i,
                phone       : /(\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d| 2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]| 4[987654310]|3[9643210]|2[70]|7|1))?\d{1,14}$/,
                /*MAIL Official Standard: RFC 5322*/
                mail        : /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                fiscalCode  : /^[a-zA-Z]{6}[0-9]{2}[a-zA-Z]([0|4][1-9]|[1256]\d|[3|7][0-1])[a-zA-Z][0-9]{3}[a-zA-Z]$/,
                partitaIva  : /^[0-9]{11}$|^[a-zA-Z]{6}[0-9]{2}[a-zA-Z][0-9]{2}[a-zA-Z][0-9]{3}[a-zA-Z]$/,
                url         : /^((https?:\/\/)?(www.)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?)?$/
            };
        }
    }

})();