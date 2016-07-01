(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('PlaygroundController', ['$scope', function($scope) {
        $scope.data = {};        
        $scope.data.categories = [
            {
                'name': 'Home',
                'img': 'img/gem-01.gif'
            },
            {
                'name': 'Products',
                'img': 'img/gem-02.gif'
            },
            {
                'name': 'UI',
                'img': 'img/gem-03.gif'
            }
        ];
    }]);     

}) ();