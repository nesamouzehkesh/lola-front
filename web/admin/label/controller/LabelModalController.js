(function () {
    var myApp = angular.module('mainApp');
   
    myApp.controller('LabelModalController', ['$scope', 'LabelApi', '$uibModalInstance', 'label',
        function ($scope, LabelApi, $uibModalInstance, label) {
            $scope.data = {};
            $scope.data.label = label;
            
            
            $scope.postLabel = function (label) {
                LabelApi.postLabel(label)
                    .success(function(data) {
                        $uibModalInstance.close(data); 
                    });
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };           
        }]);    
}) ();