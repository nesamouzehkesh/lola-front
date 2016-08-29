(function () {
    var myApp = angular.module('mainApp');
   
    myApp.controller('ViewProductModalController', ['$scope', 'ProductApi', '$uibModalInstance', 'product',
        function ($scope, ProductApi, $uibModalInstance, product) {
            $scope.data = {};
            $scope.data.product = product;
            
            $scope.ok = function () {
              $uibModalInstance.dismiss('cancel');
            };    
            
        }]);    
}) ();