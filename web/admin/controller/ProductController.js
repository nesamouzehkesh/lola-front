(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('ProductController', ['$scope', 'ProductServices', '$location', '$http',
        function($scope, ProductServices, $location, $http) {
        $scope.data = {}; 
        $scope.data.product = {};
        
        ProductServices.getProducts()
          .success(function (data) {
              $scope.data.products = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });
          
          
        ProductServices.getProductCategories()
          .success(function (data) {
              $scope.data.categories = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });  
          
        $scope.deleteProduct = function(product){
            ProductServices.deleteProduct(product.id)
                .success(function () {
                    $scope.data.products.splice($scope.data.products.indexOf(product), 1);
                }) 
                .error(function (error) {
                      $scope.data.error = error;
                });  
        };    
        
        $scope.postNewProduct = function (product) {
            ProductServices.addProduct(product)
                .success(function(data) {
                    $scope.data.products.push(data);
            
                    //close bootstrap modal
                });
        };
        
        $scope.editProduct = function (product) {
            ProductServices.getProduct(product.id)
                .success(function(data) {
                    $scope.data.product = data;
                    //open modal
                });          
        };
        
        /*
        ProductServices.deleteProduct = function (product) {
            product.$delete().then(function () {
                $scope.data.products.splice($scope.data.products.indexOf(product), 1);
            });
        };
        */
    }]);     
}) ();