(function () {
    var myApp = angular.module('mainApp', ['ngRoute', 'ngResource']);
    
    myApp.controller('MainController', ['$scope', '$http', '$location',
        function($scope, $http, $location) {
        
            //'red', 'blue', 'green', 'yellow', 'violet'
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
}) ();