(function () {
    var myApp = angular.module('mainApp');
   
    myApp.controller('ProductModalController', ['$scope', 'ProductApi', 'LabelApi', '$uibModalInstance', 'product',
        function ($scope, ProductApi, LabelApi, $uibModalInstance, product) {
            $scope.data = {};
            $scope.data.product = product;
            $scope.data.categories = [];
            $scope.data.labels = [];
            $scope.data.brands = [];
            
            // Get list of labels from backend
            LabelApi.getLabels()
              .success(function (data) {
                  $scope.data.labels = data;
              }) 
              .error(function (error) {
                    $scope.data.error = error;
            });
            
            // Get list of brands from backend
            ProductApi.getBrands()
              .success(function (data) {
                $scope.data.brands = data;
              }) 
              .error(function (error) {
                $scope.data.error = error;
            });
            
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