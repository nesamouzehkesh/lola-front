(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('BrandController', ['$scope', 'BrandApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, BrandApi, $location, $http, $uibModal, $ngBootbox) {
        var init = function() {
        $scope.data = {}; 
        $scope.data.brand = {};
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.data.brands = [];
        
        };
        
        //for initialization
        BrandApi.getBrands()
              .success(function (data) {
                  $scope.data.brands = data;
              }) 
              .error(function (error) {
                    $scope.data.error = error;
              });
              
              
        // Get list of brands from backend
        $scope.getBrandList = function() {
            BrandApi.getBrands($scope.data.search)
              .success(function (data) {
                  $scope.data.brands = data;
              }) 
              .error(function (error) {
                    $scope.data.error = error;
              });
        };      
        
        // View brand
        $scope.viewBrand = function (brand) {
            // First get brand full information from back-end
            BrandApi.getBrand(brand.id)
                .success(function(data) {
                    // Get modal instance with this brand data
                    var modalInstance = openViewBrandModal(data); 
                    
                    modalInstance.result.then(function (data) {
                        $scope.getBrandList();
                    }, function () {
                    });
                });          
        };
        
        //Modal that shows the information of a brand when clicked on "View"
        function openViewBrandModal(data) {

            var modalInstance = $uibModal.open({
                //size: size,
                animation: $scope.animationsEnabled,
                templateUrl: 'views/partial/viewBrandModalContent.html',
                controller: 'BrandModalController',
                resolve: {
                  brand: function () {
                    return data;
                  }
                }
            });
            
            return modalInstance;
        };
        
        // Edit brand
        $scope.editBrand = function (brand) {
            // First get brand full information from back-end
            BrandApi.getBrand(brand.id)
                .success(function(data) {
                    // Get modal instance with this brand data
                    var modalInstance = openBrandModal(data);
                    
                    modalInstance.result.then(function (data) {
                        $scope.getBrandList();
                    }, function () {
                    });
                });          
        };
        
        // A simple function just to create and returns a brand modal instance
        function openBrandModal(data) {

            var modalInstance = $uibModal.open({
                //size: size,
                animation: $scope.animationsEnabled,
                templateUrl: 'views/partial/brandModalContent.html',
                controller: 'BrandModalController',
                resolve: {
                  brand: function () {
                    return data;
                  }
                }
            });
            
            return modalInstance;
        }
        
        // Add new brand
        $scope.addBrand = function () {
            // Get modal instance
            var modalInstance = openBrandModal({}); //openLabelModal does the job!
            
            // Do appropriate job for the result of modal actions
            modalInstance.result.then(function (data) {
                $scope.getBrandList();
            }, function () {
            });
            
        };
          
    
        init();
        
    }]);     
}) ();