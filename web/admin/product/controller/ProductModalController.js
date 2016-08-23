(function () {
    var myApp = angular.module('mainApp');
   
    myApp.controller('ProductModalController', ['$scope', 'ProductApi', '$uibModalInstance', 'product',
        function ($scope, ProductApi, $uibModalInstance, product) {
            $scope.data = {};
            $scope.data.product = product;
            $scope.data.categories = [];
            $scope.selected = { value: $scope.data.categories[0] };            
            
            // Get list of categories from backend
            ProductApi.getCategories()
              .success(function (data) {
                $scope.data.categories = data;
              }) 
              .error(function (error) {
                $scope.data.error = error;
            });
           
            $scope.postProduct = function (product) {
                ProductApi.postProduct(product)
                    .success(function(data) {
                        $uibModalInstance.close(data); 
                    });
            };               

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };           
        }]);    
}) ();