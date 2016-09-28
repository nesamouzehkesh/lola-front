(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('ProductsController', ['$scope', '$routeParams', 'ProductApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, $routeParams, ProductApi, $location, $http, $uibModal, $ngBootbox) {
        $scope.data = {}; 
        
        var criteria = {
            'categoryUrl': $routeParams.CATID
        };
        
        // Get list of products from backend based on category id (our criteria)
        ProductApi.getProducts(criteria)
          .success(function (data) {
              $scope.data.products = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });
    }]);     
}) ();