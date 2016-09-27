(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('ProductController', ['$scope', 'ProductApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, ProductApi, $location, $http, $uibModal, $ngBootbox) {
        $scope.data = {}; 
        
        // Get list of pagess from backend
        ProductApi.getProduct()
          .success(function (data) {
              $scope.data.product = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });
    }]);     
}) ();