(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('ProductController', ['$scope', 'ProductServices', 
        function($scope, ProductServices) {
        $scope.data = {};        
        
        ProductServices.adminGetProducts()
          .success(function (data) {
              $scope.data.products = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });
          
        ProductServices.adminGetProductCategories()
          .success(function (data) {
              $scope.data.categories = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });  


        $scope.deleteProduct = function(product){
            ProductServices.adminDeleteProduct(product.id)
                .success(function () {
                    $scope.data.products.splice($scope.data.products.indexOf(product), 1);
                }) 
                .error(function (error) {
                      $scope.data.error = error;
                });  
        };          
        
        /*
        ProductServices.adminDeleteProduct = function (product) {
            product.$delete().then(function () {
                $scope.data.products.splice($scope.data.products.indexOf(product), 1);
            });
        };
        */
        
    }]);     

}) ();