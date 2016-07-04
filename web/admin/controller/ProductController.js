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
        
    }]);     

}) ();