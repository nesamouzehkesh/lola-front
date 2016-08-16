(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('CategoryModalController', ['$scope', 'CategoryApi', '$uibModalInstance', 'product',
        function ($scope, CategoryApi, $uibModalInstance, product) {
            $scope.data = {};
            $scope.data.product = product;
            
            $scope.postProduct = function (product) {
                CategoryApi.addProduct(product)
                    .success(function(data) {
                        $uibModalInstance.close(data);  
                    });
            };                

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };            
        }]);     
}) ();