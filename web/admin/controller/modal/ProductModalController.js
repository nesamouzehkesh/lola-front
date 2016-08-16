(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('ProductModalController', ['$scope', 'ProductServices', '$uibModalInstance', 'product',
        function ($scope, ProductServices, $uibModalInstance, product) {
            $scope.data = {};
            $scope.data.product = product;
            
            $scope.postProduct = function (product) {
                ProductServices.addProduct(product)
                    .success(function(data) {
                        $uibModalInstance.close(data);  
                    });
            };                

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };            
        }]);     
}) ();