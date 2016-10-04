(function() {
    angular.module('mainApp')              
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.when("/", {
                templateUrl: "views/home.html",
                controller: "HomeController"
            })
            .when("/:catUrl", {
                templateUrl: "views/products.html",
                controller: "ProductsController"
            })
            .when("/:catUrl/:ID", {
                templateUrl: "views/product.html",
                controller: "ProductController"
            })
            .when("/wishlist", {
                templateUrl: "views/wishlist.html",
                controller: "ProductController"
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})(); 

/*
 * for loading views/products.html you can see that the route is set as:
 * customer/product/#/< :CATID > 
 * whatever the category ID that is given to the url in your browser after the #
 * through the code in your product/customer/#/ page (which is views/home.html as
 * indicated above) and the code is:
 * < a href='#/{{ category.url }}'>{{ category.name }}< /a>
 * so whetever that is set after that # will form the url in the browser. For example
 * if category.url is "sale" in the database then your route will be formed as:
 * customer/product/#/sale so this sale is actually the current value to :CATID 
 * up there. But whatever it is, "sale" or "men" or .... the page will always be 
 * redirected to: views/products.html.
 * 
 * After this stage, the products.html needs to be loaded with filtered products 
 * based on that CATID as its criteria. Actually the criteria (now that you have 
 * the information of your current category at hand) could be either the 
 * category.url or category.img or even category.id. 
 * 
 * So go ahead! write one single API that loads the products based on this "criteria"
 * you pass to it!
 * 
 * This API is written in ProductService.js
 */