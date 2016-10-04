(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('BasketController', ['$scope', '$routeParams', 'BasketApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, $routeParams, BasketApi, $location, $http, $uibModal, $ngBootbox) {
        $scope.data = {};
        
        BasketApi.getBasketItems()
          .success(function (data) {
              $scope.data.basketItems = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });
       
    }]);     
}) ();