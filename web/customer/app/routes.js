(function() {
    angular.module('mainApp')              
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/home.html"
                })
                .when("/shop", {
                    templateUrl: "/product/views/home.html"
                })
                .when("/product/women", {
                    templateUrl: "product/views/partial/women.html"
                })
                .when("/product/men", {
                    templateUrl: "views/men.html"
                })
                .when("/product/beauty", {
                    templateUrl: "views/beauty.html"
                })
                .when("/product/sale", {
                    templateUrl: "views/sale.html"
                })
                .when("/customer/customer_account/signin", {
                    templateUrl: "customer_account/views/signin.html"
                })
                .when("/shoppingcart", {
                    templateUrl: "basket/views/shoppingcart.html"
                })
                .when("/contact", {
                    templateUrl: "views/contact.html"
                });
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();    