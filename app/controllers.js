var app = angular.module('myApp', ['routers']);

app.controller('DashboardCtrl', [ '$scope', '$timeout', function($scope, $timeout) {

    $scope.fieldWidth = "1000";
    $scope.fieldHeight = "500";
    var countElements = 15;

    $scope.elements = [];
    
    for (var i = 0; i < countElements; i++) {
        $scope.elements.push({ x: ($scope.fieldWidth / countElements)*i+25, y: Math.random() * $scope.fieldHeight });
    }; 

    $scope.path = "M0 " + $scope.fieldHeight;
    for (var i = 0; i < countElements; i++) {
       $scope.path += " L" + $scope.elements[i].x + " " + $scope.elements[i].y;
    }; 

}]);