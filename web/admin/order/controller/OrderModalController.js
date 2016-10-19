(function () {
    var myApp = angular.module('mainApp');
   
    myApp.controller('OrderModalController', ['$scope', 'OrderApi', '$uibModalInstance', 'order',
        function ($scope, OrderApi, $uibModalInstance, order) {
            $scope.data = {};
            $scope.data.order = order;

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };           
        }]);    
}) ();