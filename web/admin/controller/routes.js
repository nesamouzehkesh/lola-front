(function() {
    angular.module('mainApp')              
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.when("/", {
                templateUrl: "views/home.html"
            });
            $routeProvider.when("/products", {
                templateUrl: "views/products.html"
            });
            $routeProvider.when("/ui", {
                templateUrl: "views/ui.html"
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();    