(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('ProductModalController', ['$scope', 'ProductApi', '$uibModalInstance', 'product',
        function ($scope, ProductApi, $uibModalInstance, product) {
            $scope.data = {};
            $scope.data.product = product;
            
            $scope.postProduct = function (product) {
                ProductApi.addProduct(product)
                    .success(function(data) {
                        $uibModalInstance.close(data);  
                    });
            };                

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };            
        }]);     
}) ();