(function() {
    angular.module('mainApp')              
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.when("/shoppingcart", {
                templateUrl: "views/shoppingcart.html",
                controller: "CustomerMainController"
            })
            .when("/", {
                templateUrl: "views/home.html"
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();    