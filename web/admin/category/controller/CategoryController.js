(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('CategoryController', ['$scope', 'CategoryApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, CategoryApi, $location, $http, $uibModal, $ngBootbox) {
        var init = function() {    
        $scope.data = {}; 
        $scope.data.category = {};
        $scope.data.categories = [];
        $scope.getCategoryList();
    };
        
        // Get list of categories from backend
        CategoryApi.getCategories()
          .success(function (data) {
              $scope.data.categories = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });
          
        // Get list of categories from backend
        $scope.getCategoryList = function() {
            CategoryApi.getCategories($scope.data.search)
              .success(function (data) {
                  $scope.data.categories = data;
              }) 
              .error(function (error) {
                    $scope.data.error = error;
              });
        };  
        
        // Delete a product   
        $scope.deleteCategory = function(category) {
            // Show confirmation message before deleting an item
            $ngBootbox.confirm("Are you sure you want to delete this Succession Plan?")
                // If user confirmed
                .then(function() {
                    CategoryApi.deleteCategory(category.id)
                        .success(function () {
                            $scope.data.categories.splice($scope.data.categories.indexOf(category), 1);
                        }) 
                        .error(function (error) {
                              $scope.data.error = error;
                        });  
                }, function() {
                    console.log("Confirm dismissed!");
                });
        };    
        
        // Add new product
        $scope.addCategory = function () {
            // Get modal instance
            var modalInstance = openCategoryModal({});
            
            // Do appropriate job for the result of modal actions
            modalInstance.result.then(function (data) {
                $scope.data.categories.push(data);
            });
            
        };
        
        // Edit category
        $scope.editCategory = function (category) {
            // First get category full information from back-end
            CategoryApi.getCategory(category.id)
                .success(function(data) {
                    // Get modal instance with this category data
                    var modalInstance = openCategoryModal(data);
                    
                    modalInstance.result.then(function (data) {
                        $scope.getCategoryList();
                    }, function () {
                    });
                });          
        };
        
        
        // View category
        $scope.viewCategory = function (category) {
            // First get category full information from back-end
            CategoryApi.getCategory(category.id)
                .success(function(data) {
                    // Get modal instance with this category data
                    var modalInstance = openViewCategoryModal(data);
                    
                    modalInstance.result.then(function (data) {
                        $scope.getCategoryList();
                    }, function () {
                    });
                });          
        };
        
        // A simple function just to create and returns a product modal instance
        function openCategoryModal(data) {
            var modalInstance = $uibModal.open({
                //size: size,
                animation: $scope.animationsEnabled,
                templateUrl: 'views/partial/categoryModalContent.html',
                controller: 'CategoryModalController',
                resolve: {
                  category: function () {
                    return data;
                  }
                }
            });
            
            return modalInstance;
        }
        
        function openViewCategoryModal(data) {
            var modalInstance = $uibModal.open({
                //size: size,
                animation: $scope.animationsEnabled,
                templateUrl: 'views/partial/viewCategoryModalContent.html',
                controller: 'CategoryModalController',
                resolve: {
                  category: function () {
                    return data;
                  }
                }
            });
            
            return modalInstance;
        }
        
        
        init();
    }]);     
}) ();