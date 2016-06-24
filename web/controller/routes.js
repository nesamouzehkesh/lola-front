(function() {
    angular.module('mainApp')              
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
           
            $routeProvider.when("/", {
                templateUrl: "/index.html"
        
            });

            $routeProvider.when("/products", {
                templateUrl: "/views/products.html"
            });
            
            $routeProvider.otherwise({ redirectTo: '/' });
        }])
})();    