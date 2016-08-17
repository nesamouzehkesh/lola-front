(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('ProductController', ['$scope', 'ProductApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, ProductApi, $location, $http, $uibModal, $ngBootbox) {
        $scope.data = {}; 
        $scope.data.product = {};
        
        // Get list of products from backend
        ProductApi.getProducts()
          .success(function (data) {
              $scope.data.products = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });
          
        // Get list of product categories from backend  
        ProductApi.getProductCategories()
          .success(function (data) {
              $scope.data.categories = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });  
        
        // Delete a product   
        $scope.deleteProduct = function(product) {
            // Show confirmation message before deleting an item
            $ngBootbox.confirm("Are you sure you want to delete this Succession Plan?")
                // If user confirmed
                .then(function() {
                    ProductApi.deleteProduct(product.id)
                        .success(function () {
                            $scope.data.products.splice($scope.data.products.indexOf(product), 1);
                        }) 
                        .error(function (error) {
                              $scope.data.error = error;
                        });  
                }, function() {
                    console.log("Confirm dismissed!");
                });
        };    
        
        // Add new product
        $scope.addProduct = function () {
            // Get modal instance
            var modalInstance = openProductModal({});
            
            // Do appropriate job for the result of modal actions
            modalInstance.result.then(function (data) {
                $scope.data.products.push(data);
                console.log('Modal colsed');
            }, function () {
                console.log('Modal dismissed');
            });
            
        };
        
        // Edit product
        $scope.editProduct = function (product) {
            // First get product full information from back-end
            ProductApi.getProduct(product.id)
                .success(function(data) {
                    // Get modal instance with this product data
                    var modalInstance = openProductModal(data);
                    
                    modalInstance.result.then(function (data) {
                        //TODO: update same product in the $scope.data.products
                        console.log('Modal submited and colsed');
                    }, function () {
                        console.log('Modal dismissed at: ');
                    });
                });          
        };
        


        // A simple function just to create and returns a product modal instance
        function openProductModal(data) {

            var modalInstance = $uibModal.open({
                //size: size,
                animation: $scope.animationsEnabled,
                templateUrl: 'views/partial/productModalContent.html',
                controller: 'ProductModalController',
                resolve: {
                  product: function () {
                    return data;
                  }
                }
            });
            
            return modalInstance;
        }
    }]);     
}) ();