(function() {
    angular.module('mainApp')              
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.when("/", {
                templateUrl: "views/home.html",
                controller: "HomeController"
            })
            .when("/:CATID", {
                templateUrl: "views/products.html",
                controller: "ProductsController"
            })
            .when("/:CATID/:ID", {
                templateUrl: "views/product.html",
                controller: "ProductController"
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();    