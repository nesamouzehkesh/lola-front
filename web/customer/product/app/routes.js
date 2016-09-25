(function() {
    angular.module('mainApp')              
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.when("/", {
                templateUrl: "views/home.html",
                controller: "CustomerMainController"
            })
            .when("/women", {
                templateUrl: "views/partial/women.html"
            })
            .when("/men", {
                templateUrl: "views/partial/men.html"
            })
            .when("/beauty", {
                templateUrl: "views/partial/beauty.html"
            })
            .when("/sale", {
                templateUrl: "views/partial/sale.html"
            })
            ;
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();    