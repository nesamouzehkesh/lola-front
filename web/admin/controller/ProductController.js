(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('ProductController', ['$scope', 'ProductServices', '$location',
        function($scope, ProductServices, $location) {
        $scope.data = {}; 
        $scope.data.product;
        
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
        
        // callback for ng-click 'createUser':
        
        $scope.addNewProduct = function (product) {
            ProductServices.adminAddProduct(product.id)
                .success(function(data) {
                    $scope.data.products.push(data);
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