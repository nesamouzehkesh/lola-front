(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('OrderController', ['$scope', 'OrderApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, OrderApi, $location, $http, $uibModal, $ngBootbox) {
        var init = function() {
        $scope.data = {}; 
        $scope.data.order = {};
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.data.orders = [];
        $scope.getOrderList();
        
        };
         
        // Get list of orders from backend
        $scope.getOrderList = function() {
            OrderApi.getOrders()
              .success(function (data) {
                  $scope.data.orders = data;
              }) 
              .error(function (error) {
                    $scope.data.error = error;
              });
        };
        
        // View order
        $scope.viewOrder = function (order) {
            // First get order full information from back-end
            OrderApi.getOrder(order.id)
                .success(function(data) {
                    // Get modal instance with this order data
                    var modalInstance = openViewOrderModal(data); //openViewOrderModal()
                    //does the job actually...
                    
                    modalInstance.result.then(function (data) {
                        $scope.getOrderList();
                        //console.log('Modal submited and colsed');
                    }, function () {
                        //console.log('Modal dismissed at: ');
                    });
                });          
        };
        
         
        // Delete an order  
        $scope.deleteOrder = function(order) {
            // Show confirmation message before deleting an item
            $ngBootbox.confirm("Are you sure you want to delete this Succession Plan?")
                // If user confirmed
                .then(function() {
                    OrderApi.deleteOrder(order.id)
                        .success(function () {
                            $scope.data.orders.splice($scope.data.orders.indexOf(order), 1);
                        }) 
                        .error(function (error) {
                              $scope.data.error = error;
                        });  
                }, function() {
                    console.log("Confirm dismissed!");
                });
        };    
        
   
        
         //Modal that shows the information of an order when clicked on "View"
        function openViewOrderModal(data) {

            var modalInstance = $uibModal.open({
                //size: size,
                animation: $scope.animationsEnabled,
                templateUrl: 'views/partial/viewOrderModalContent.html',
                controller: 'OrderModalController',
                resolve: {
                  order: function () {
                    return data;
                  }
                }
            });
            
            return modalInstance;
        }
        init();
        
    }]);     
}) ();