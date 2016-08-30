(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('LabelController', ['$scope', 'LabelApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, LabelApi, $location, $http, $uibModal, $ngBootbox) {
        $scope.data = {}; 
        $scope.data.label = {};
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.data.pages = [];
        
        // Get list of labels from backend
        LabelApi.getPages()
          .success(function (data) {
              $scope.data.labels = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });
          
    }]);     
}) ();