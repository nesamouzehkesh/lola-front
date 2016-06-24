(function () {
    var myApp = angular.module('mainApp', ['RequestServices', 'ngRoute', 'ngResource']);
    
    myApp.controller('MainController', ['$scope', '$http', 'ProductRepository', '$location',
        function($scope, $http, ProductRepository, $location) {
            $scope.data = {};
            $scope.data.products = [];
        
            ProductRepository.getAllProducts()
                .success(function(data){
                    $scope.data.products = data;
                 })
                .error(function(error){
                    $scope.error = error;
            });
    }]);
}) ();