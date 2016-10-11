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
            SameAddress: false
        };
        
        $scope.getCustomerAddress();
        }
        
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
                .success(function(){
                    // Noting to do
                })
                .error(function(error){
                    $scope.data.error = error;
                });
              
        };
        init();
    }]);     
}) ();