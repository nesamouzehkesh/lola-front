(function () {
    var myApp = angular.module('mainApp', [
        'ngRoute', 
        'ngResource', 
        'adminApiRequests', 
        'ui.bootstrap', 
        'ngBootbox'
    ]);
    
    myApp.controller('MainController', ['$scope', '$http', '$location',
        function($scope, $http, $location) {
            $scope.data = {};        
            $scope.data.modules = [
                {
                    'name': 'Home',
                    'url': '#/',
                    'icon': 'glyphicon glyphicon-home',
                    'color': 'blue',
                    'description': 'Home page of syste'
                },
                {
                    'name': 'Products',
                    'url': '#products',
                    'icon': 'glyphicon glyphicon-gift',
                    'color': 'red',
                    'description': 'Product page of syste'
                },
                {
                    'name': 'UI',
                    'url': '#ui',
                    'icon': 'glyphicon glyphicon-picture',
                    'color': 'yellow',
                    'description': 'UI page of syste'
                }
            ];
           
    }]);

    myApp.config(function ($httpProvider) {
        $httpProvider.defaults.transformRequest = function(data){
            if (data === undefined) {
                return data;
            }
            return $.param(data);
        };

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';        
    });

    myApp.directive('backImg', function(){
        return function(scope, element, attrs){
            attrs.$observe('backImg', function(value) {
                element.css({
                    'background-image': 'url(' + value + ')'
                });
            });
        };
    });

}) ();