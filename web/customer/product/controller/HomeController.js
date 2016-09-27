(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('HomeController', ['$scope', 'ProductApi', 'CategoryApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, ProductApi, CategoryApi, $location, $http, $uibModal, $ngBootbox) {
        $scope.data = {}; 
        $scope.data.categories = [];
        
        // Get list of pagess from backend
        CategoryApi.getCategories()
          .success(function (data) {
              $scope.data.categories = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });
    }]);     
}) ();