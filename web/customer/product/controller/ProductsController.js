(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('ProductsController', ['$scope', '$routeParams', 'ProductApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, $routeParams, ProductApi, $location, $http, $uibModal, $ngBootbox) {
        $scope.data = {};
        $scope.data.catUrl = $routeParams.catUrl;
        var criteria = {
            'categoryUrl': $routeParams.catUrl
        };
        
        // Get list of products from backend based on category id (our criteria)
        ProductApi.getProducts(criteria)
          .success(function (data) {
              $scope.data.products = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });
         
        $scope.addToCart = function (product) {
           ProductApi.addToCart(product)
            .success(function (data) {
            }) 
            .error(function (error) {
                  $scope.data.error = error;
            });
        };
        
        $scope.addToWishlist = function (product) {
           ProductApi.addToWishlist(product)
            .success(function (data) {
            }) 
            .error(function (error) {
                  $scope.data.error = error;
            });
        };    
       
    }]);     
}) ();