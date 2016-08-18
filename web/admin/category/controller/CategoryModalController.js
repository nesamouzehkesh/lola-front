(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('CategoryModalController', ['$scope', 'CategoryApi', '$uibModalInstance', 'category',
        function ($scope, CategoryApi, $uibModalInstance, category) {
            $scope.data = {};
            $scope.data.category = category;
            
            $scope.postCategory = function (category) {
                CategoryApi.postCategory(category)
                    .success(function(data) {
                        $uibModalInstance.close(data);  
                    });
            };                

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };            
        }]);     
}) ();