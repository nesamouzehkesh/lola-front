(function() {
    angular.module('mainApp')              
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.when("/", {
                templateUrl: "/startbootstrap-landing-page/home.html"
            });
            $routeProvider.when("/products", {
                templateUrl: "/views/products.html"
            });
            $routeProvider.when("/categories", {
                templateUrl: "/views/categories.html"
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();    