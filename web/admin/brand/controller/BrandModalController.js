(function () {
    var myApp = angular.module('mainApp');
   
    myApp.controller('BrandModalController', ['$scope', 'BrandApi', '$uibModalInstance', 'brand',
        function ($scope, BrandApi, $uibModalInstance, brand) {
            $scope.data = {};
            $scope.data.brand = brand;
            
            
            $scope.postBrand = function (brand) {
                BrandApi.postBrand(brand)
                    .success(function(data) {
                        $uibModalInstance.close(data); 
                    });
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };           
        }]);    
}) ();