(function () {
    var myApp = angular.module('mainApp');
   
    myApp.controller('OrderModalController', ['$scope', 'OrderApi', '$uibModalInstance', 'order',
        function ($scope, OrderApi, $uibModalInstance, order) {
            $scope.data = {};
            $scope.data.order = order;
          
            OrderApi.getOrderDetails(order.id)
                .success(function(data) {
                    $scope.data.order.orderDetails = data;
                });

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };           
        }]);    
}) ();