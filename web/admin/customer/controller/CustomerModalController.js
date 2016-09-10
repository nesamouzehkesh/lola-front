(function () {
    var myApp = angular.module('mainApp');
   
    myApp.controller('CustomerModalController', ['$scope', 'CustomerApi', '$uibModalInstance', 'customer',
        function ($scope, CustomerApi, $uibModalInstance, customer) {
            $scope.data = {};
            $scope.data.customer = customer;
            $scope.data.orders = [];
            $scope.data.orderDetails = [];
            $scope.data.visible;
            $scope.data.order = {};
            
            $scope.getOrderDetails = function(order) {
                CustomerApi.getOrderDetails(order.id) 
                  .success(function (data) {                
                      $scope.data.orderDetails = data; 
                      $scope.data.visible = true; 

                  }) 
                  .error(function (error) {
                        $scope.data.error = error;
                  });
            };
            
            $scope.hideOrderDetails = function() {
                $scope.data.visible = false;
            };
            
            // Get list of orders from backend
            /*
            CustomerApi.getOrders()
              .success(function (data) {
                $scope.data.orders = data;
              }) 
              .error(function (error) {
                $scope.data.error = error;
            });
            */
            
            $scope.postCustomer = function (customer) {
                CustomerApi.postCustomer(customer)
                    .success(function(data) {
                        $uibModalInstance.close(data); 
                    });
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };           
        }]);    
}) ();