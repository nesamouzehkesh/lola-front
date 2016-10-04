(function() {
    angular.module('mainApp')              
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.when("/", {
                templateUrl: "views/wishlist.html",
                controller: "WishlistController"
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})(); 

