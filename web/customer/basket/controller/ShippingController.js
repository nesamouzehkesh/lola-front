(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('ShippingController', ['$scope', '$routeParams', 'BasketApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, $routeParams, BasketApi, $location, $http, $uibModal, $ngBootbox) {
        var init = function() {
            $scope.data = {};
            $scope.data.address = {
                shipping: {},
                billing: {},
                setNewShipping: false,
                setNewShippingAsPrimary: false,
                newShipping: {},
                setNewBilling: false,
                setNewBillingAsPrimary: false,
                newBilling: {},
                sameAddress: false
            };

            $scope.getCustomerAddress();
        };
        
        $scope.getCustomerAddress = function(){
            BasketApi.getCustomerAddress()
                .success(function(data){
                    $scope.data.address.shipping = data.shipping;
                    $scope.data.address.billing = data.billing;
                })
                .error(function(error){
                    $scope.data.error = error;
                });
              
        };
        
        $scope.submitOrder = function(){
            BasketApi.submitOrder($scope.data.address)
                .success(function(data){
                    // Noting to do
                    getOrderDetails(data.id);
                    $location.path("/paypal/" + data.id);
                    
                })
                .error(function(error){
                    $scope.data.error = error;
                });
              
        };
        //return the order's complete information for this order.id (data.id)
        $scope.getOrderDetails = function() {
            BasketApi.getOrderDetails()
                .success(function(data){
                    $scope.data.order = data;
            })
                .error(function(error){
                    $scope.data.error = error;
            });
        };
        init();
    }]);     
}) ();