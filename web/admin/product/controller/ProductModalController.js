(function () {
    var myApp = angular.module('mainApp');
   
    myApp.controller('ProductModalController', ['$scope', 'ProductApi', '$uibModalInstance', 'product',
        function ($scope, ProductApi, $uibModalInstance, product) {
            $scope.data = {};
            $scope.data.product = product;
            $scope.data.categories = [];
            
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
            
            $scope.ok = function () {
              $uibModalInstance.dismiss('cancel');
            };
            
        }]);    
}) ();