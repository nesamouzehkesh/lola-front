(function () {
    var myApp = angular.module('mainApp', ['ngRoute', 'ngResource', 'adminApiRequests']);
    
    myApp.controller('MainController', ['$scope', '$http', '$location',
        function($scope, $http, $location) {
        
            //'red', 'blue', 'green', 'yellow', 'violet'
            $scope.data = {};        
           
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