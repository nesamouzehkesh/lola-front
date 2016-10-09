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
    
    myApp.controller('AdminMainController', ['$scope', '$http', '$location',
        function($scope, $http, $location) {
            $scope.data = {};        
            $scope.data.modules = [
                {
                    'name': 'Home',
                    'url': '/admin',
                    'icon': 'glyphicon glyphicon-home',
                    'color': 'blue',
                    'description': 'Home page of syste'
                },
                {
                    'name': 'Products',
                    'url': '/admin/product',
                    'icon': 'glyphicon glyphicon-gift',
                    'color': 'red',
                    'description': 'Product page of syste'
                },
                {
                    'name': 'Categories',
                    'url': '/admin/category',
                    'icon': 'glyphicon glyphicon-th-list',
                    'color': 'green',
                    'description': 'Product page of syste'
                },
                {
                    'name': 'Pages',
                    'url': '/admin/page',
                    'icon': 'glyphicon glyphicon-list-alt',
                    'color': 'yellow',
                    'description': 'Pages of syste'
                },
                {
                    'name': 'Themes',
                    'url': '/admin/theme',
                    'icon': 'glyphicon glyphicon-picture',
                    'color': 'blue',
                    'description': 'Themes of syste'
                },
                {
                    'name': 'Labels',
                    'url': '/admin/label',
                    'icon': 'glyphicon glyphicon-tags',
                    'color': 'red',
                    'description': 'Labels of syste'
                },
                {
                    'name': 'Brands',
                    'url': '/admin/brand',
                    'icon': 'glyphicon glyphicon-record',
                    'color': 'green',
                    'description': 'Brands of syste'
                },
                {
                    'name': 'Customers',
                    'url': '/admin/customer',
                    'icon': 'glyphicon glyphicon-user',
                    'color': 'yellow',
                    'description': 'Customers of syste'
                },
                {
                    'name': 'Orders',
                    'url': '/admin/order',
                    'icon': 'glyphicon glyphicon-user',
                    'color': 'blue',
                    'description': 'Orders of syste'
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