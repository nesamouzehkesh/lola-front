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
        
          
    
        init();
        
    }]);     
}) ();