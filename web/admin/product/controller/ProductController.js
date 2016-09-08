(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('ProductController', ['$scope', 'ProductApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, ProductApi, $location, $http, $uibModal, $ngBootbox) {
        var init = function() {
            $scope.data = {};
            $scope.data.product = {};
            $scope.data.search = {};
            $scope.currentPage = 1;
            $scope.pageSize = 10;
            $scope.data.products = [];
            $scope.data.categories = [];
            $scope.data.brands = [];
            
           
            // Load list of products 
            $scope.getProductList();
        };
        
        // Get list of brands from backend
          ProductApi.getBrands()
            .success(function (data) {
              $scope.data.brands = data;
            }) 
            .error(function (error) {
              $scope.data.error = error;
          });
          
        // Get list of categories from backend
          ProductApi.getCategories()
            .success(function (data) {
              $scope.data.categories = data;
            }) 
            .error(function (error) {
              $scope.data.error = error;
          });
           
        // Get list of products from backend
        $scope.getProductList = function() {
            ProductApi.getProducts($scope.data.search) //we give $scope.data.search to the API
              .success(function (data) {               //The API sends this par to backend and  
                  $scope.data.products = data;         //backend uses it 
              }) 
              .error(function (error) {
                    $scope.data.error = error;
              });
        };
        
        
        $scope.listCategoryItems = function(category) {
            $scope.data.search.category = category.id;
            $scope.getProductList();
        };
        
        $scope.listBrandProducts = function(brand) { //in brand tuye function(brand) ba un brand tuye $scope.data.search.brand yeki nistaaaaa! lol
            $scope.data.search.brand = brand.id;
            $scope.getProductList();
        };
        
        
        // Reset the search result
        $scope.resetSearchResult = function() {
            $scope.data.search = {};
            $scope.currentPage = 1;
            $scope.getProductList();
        };        
        
        // Delete a product   
        $scope.deleteProduct = function(product) {
            // Show confirmation message before deleting an item
            $ngBootbox.confirm("Are you sure you want to delete this Succession Plan?")
                // If user confirmed
                .then(function() {
                    ProductApi.deleteProduct(product.id)
                        .success(function () {
                            $scope.getProductList();
                        }) 
                        .error(function (error) {
                              $scope.data.error = error;
                        });  
                }, function() {
                    //console.log("Confirm dismissed!");
                });
        };    
        
        // Add new product
        $scope.addProduct = function () {
            // Get modal instance
            var modalInstance = openProductModal({});
            
            // Do appropriate job for the result of modal actions
            modalInstance.result.then(function (data) {
                $scope.getProductList();
                //console.log('Modal colsed');
            }, function () {
                //console.log('Modal dismissed');
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
                        $scope.getProductList();
                    }, function () {
                    });
                });          
        };
        
        // View product
        $scope.viewProduct = function (product) {
            // First get product full information from back-end
            ProductApi.getProduct(product.id)
                .success(function(data) {
                    // Get modal instance with this product data
                    var modalInstance = openViewProductModal(data);
                    
                    modalInstance.result.then(function (data) {
                        $scope.getProductList();
                        //console.log('Modal submited and colsed');
                    }, function () {
                        //console.log('Modal dismissed at: ');
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
        
        //Modal that shows the information of a product when clicked on "View"
        function openViewProductModal(data) {

            var modalInstance = $uibModal.open({
                //size: size,
                animation: $scope.animationsEnabled,
                templateUrl: 'views/partial/viewProductModalContent.html',
                controller: 'ProductModalController',
                resolve: {
                  product: function () {
                    return data;
                  }
                }
            });
            
            return modalInstance;
        }
        
        init();
    }]);     
}) ();