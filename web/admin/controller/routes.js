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
            $routeProvider.when("/playground", {
                templateUrl: "views/playground.html",
                controller: "PlaygroundController"
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();    