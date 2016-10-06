(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('BasketController', ['$scope', '$routeParams', 'BasketApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, $routeParams, BasketApi, $location, $http, $uibModal, $ngBootbox) {
        $scope.data = {};
        
        
        BasketApi.getBasketItems()
          .success(function (data) {
              $scope.data.basketItems = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });
          
        // Delete an item from the basket  
        $scope.deleteBasketItem = function(item) {
            // Show confirmation message before deleting an item
            $ngBootbox.confirm("Are you sure you want to delete this Succession Plan?")
                // If user confirmed
                .then(function() {
                    BasketApi.deleteBasketItem(item.pid)
                        .success(function () {
                            $scope.data.basketItems.splice($scope.data.basketItems.indexOf(item), 1);
                        }) 
                        .error(function (error) {
                              $scope.data.error = error;
                        });  
                }, function() {
                    console.log("Confirm dismissed!");
                });
        };    
       
    }]);     
}) ();