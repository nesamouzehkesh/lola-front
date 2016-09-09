(function () {
    var myApp = angular.module('mainApp');
   
    myApp.controller('CustomerModalController', ['$scope', 'CustomerApi', '$uibModalInstance', 'customer', 'order',
        function ($scope, CustomerApi, $uibModalInstance, customer, order) {
            $scope.data = {};
            $scope.data.customer = customer;
            $scope.data.orders = [];
            $scope.data.orderDetails = [];
            $scope.data.visible;
            
            $scope.listOrderDetails = function(order) {
            $scope.data.order.id = order.id; //in chie?
            $scope.getOrderDetails();
            $scope.data.visible = true; 
              };
              
            $scope.getOrderDetails = function() {
                CustomerApi.getOrderDetails($scope.data.order) 
                  .success(function (data) {                
                      $scope.data.orderDetails = data;          
                  }) 
                  .error(function (error) {
                        $scope.data.error = error;
                  });
            };  
            
            $scope.hideOrderDetails = function() {
                $scope.data.visible = null;
            };
              
            
            
            // Get list of orders from backend
            CustomerApi.getOrders()
              .success(function (data) {
                $scope.data.orders = data;
              }) 
              .error(function (error) {
                $scope.data.error = error;
            });
            
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