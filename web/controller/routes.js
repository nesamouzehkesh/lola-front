(function() {
    angular.module('mainApp')              
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.when("/", {
                templateUrl: "/startbootstrap-landing-page/home.html"
            });
            $routeProvider.when("/products", {
                templateUrl: "/views/products.html"
            });
            
            $routeProvider.when("/contact", {
                templateUrl: "/startbootstrap-landing-page/home.html#contact"
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();    