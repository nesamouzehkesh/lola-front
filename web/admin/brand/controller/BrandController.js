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
        }
          
    
        init();
        
    }]);     
}) ();