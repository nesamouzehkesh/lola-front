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
                },
                {
                    'name': 'Playground',
                    'url': '#playground',
                    'icon': 'glyphicon glyphicon-picture',
                    'color': 'green',
                    'description': 'Playground page of syste'
                }
            ];
    }]);

    myApp.controller('PlaygroundController', ['$scope', function($scope) {
        $scope.data = {};        
        $scope.data.categories = [
            {
                'name': 'Home',
                'img': 'img/gem-01.gif'
            },
            {
                'name': 'Products',
                'img': 'img/gem-02.gif'
            },
            {
                'name': 'UI',
                'img': 'img/gem-03.gif'
            }
        ];
    }]);

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