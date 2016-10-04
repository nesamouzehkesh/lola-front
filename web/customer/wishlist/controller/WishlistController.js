(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('WishlistController', ['$scope', '$routeParams', 'WishlistApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, $routeParams, WishlistApi, $location, $http, $uibModal, $ngBootbox) {
        $scope.data = {};
        
        WishlistApi.getWishlistItems()
          .success(function (data) {
              $scope.data.wishlistItems = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });
       
    }]);     
}) ();