(function () {
    var myApp = angular.module('mainApp', [
        'ngRoute', 
        'ngResource', 
        'ui.bootstrap', 
        'ngBootbox',
        'angularUtils.directives.dirPagination',
        'ui.select', 
        'ngSanitize'
    ]);
    
    myApp.controller('UserMainController', ['$scope', '$http', '$location',
        function($scope, $http, $location) {
            $scope.data = {};        
            $scope.data.modules = [
                {
                    'name': 'Home',
                    'url': '/user',
                    'icon': 'glyphicon glyphicon-home',
                    'color': 'blue',
                    'description': 'Home page of syste'
                },
                {
                    'name': 'Products',
                    'url': '/user/product',
                    'icon': 'glyphicon glyphicon-gift',
                    'color': 'red',
                    'description': 'Product page of syste'
                },
                {
                    'name': 'Categories',
                    'url': '/user/category',
                    'icon': 'glyphicon glyphicon-th-list',
                    'color': 'green',
                    'description': 'Product page of syste'
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