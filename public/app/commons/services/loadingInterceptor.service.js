/* loadingInterceptor.service.js */

(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('LoadingInterceptor', LoadingInterceptor);

    LoadingInterceptor.$inject = ['$log', '$q', '$rootScope'];

    function LoadingInterceptor($log, $q, $rootScope) {
        var xhrCreations = 0;
        var xhrResolutions = 0;

        return {
            request: request,
            requestError: requestError,
            response: response,
            responseError: responseError
        };

        function isLoading() {
            return xhrResolutions < xhrCreations;
        }
     
        function updateStatus() {
            $rootScope.loading = isLoading();
        }

        function request(config){
            xhrCreations++;
            updateStatus();
            return config;
        }

        function requestError(rejection){
            xhrResolutions++;
            updateStatus();
            $log.error('Request error:', rejection);
            return $q.reject(rejection);
        }

        function response(response){
            xhrResolutions++;
            updateStatus();
            return response;
        }

        function responseError(rejection){
            xhrResolutions++;
            updateStatus();
            $log.error('Response error:', rejection);
            return $q.reject(rejection);
        }
    }

})();