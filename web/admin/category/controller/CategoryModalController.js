(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('CategoryModalController', ['$scope', 'CategoryApi', '$uibModalInstance', 'product',
        function ($scope, CategoryApi, $uibModalInstance, product) {
            $scope.data = {};
            $scope.data.category = category;
            
            $scope.postCategory = function (category) {
                CategoryApi.addCategory(category)
                    .success(function(data) {
                        $uibModalInstance.close(data);  
                    });
            };                

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };            
        }]);     
}) ();