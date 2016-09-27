(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('ProductsController', ['$scope', '$routeParams', 'ProductApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, $routeParams, ProductApi, $location, $http, $uibModal, $ngBootbox) {
        $scope.data = {}; 
        
        var criteria = {
            'categoryId': $routeParams.CATID
        };
        
        // Get list of pagess from backend
        ProductApi.getProducts(criteria)
          .success(function (data) {
              $scope.data.products = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });
    }]);     
}) ();