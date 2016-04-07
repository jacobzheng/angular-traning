/**
 * Created by jacob on 16/4/6.
 */


var app = angular.module("myApp",[]);
app.controller('MyController', ['$scope', function ($scope) {
    $scope.username = "world";
    $scope.sayHello = function () {
        $scope.greeting = "Hello"+$scope.username+"!";
    }
}]);