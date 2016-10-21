(function () {
    var myApp = angular.module('mainApp');
   
    myApp.controller('UserModalController', ['$scope', 'UserApi', '$uibModalInstance', 'user',
        function ($scope, UserApi, $uibModalInstance, user) {
            function init() {
                $scope.data = {};
                $scope.data.user = user;
                $scope.data.orderDetails = {};
                $scope.data.visible;
                $scope.data.order = {};
                $scope.getUserOrders();
            };
            
            $scope.getUserOrders = function () {
                if ($scope.data.user.id !== undefined) {
                    UserApi.getUserOrders($scope.data.user.id)
                      .success(function(data) {
                          $scope.data.user.orders = data;   
                    })
                      .error(function (error) {
                            $scope.data.error = error;
                    });         
                }
            };
            
            $scope.deleteOrder = function (order) {
                UserApi.deleteOrder(order.id)
                  .success(function () {
                        $scope.getUserOrders();
                        }) 
                  .error(function (error) {
                        $scope.data.error = error;
                  });            
            };
            
            $scope.getOrderDetails = function(order) {
                UserApi.getOrder(order.id) 
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
            UserApi.getOrders()
              .success(function (data) {
                $scope.data.orders = data;
              }) 
              .error(function (error) {
                $scope.data.error = error;
            });
            */
            
            $scope.postUser = function (user) {
                UserApi.postUser(user)
                    .success(function(data) {
                        $uibModalInstance.close(data); 
                    });
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };     
            
            init();
        }]);    
}) ();