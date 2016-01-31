var app = angular.module('myApp', ['routers']);

app.controller('DashboardCtrl', [ '$scope', '$timeout', function($scope, $timeout) {

    $scope.fieldWidth = "1000";
    $scope.fieldHeight = "500";
    var countElements = 15;

    $scope.elements = [];
    $scope.labelsX = [];
    $scope.labelsY = [];

    for (var i = 0; i < countElements; i++) {
        $scope.elements.push({ x: ($scope.fieldWidth / countElements)*i+25, y: Math.random() * $scope.fieldHeight });
        $scope.labelsY.push({ y: ($scope.fieldHeight / countElements)*(countElements-i), value: Math.round(($scope.fieldHeight*10 / countElements)*i/10)/10 });
        $scope.labelsX.push({ x: ($scope.fieldWidth / countElements)*i, value: Math.round(($scope.fieldWidth*10 / countElements)*i/10)/10 });
    }; 

    $scope.labelsY.push({ y: 0 , value: $scope.fieldHeight/10 });
    $scope.labelsX.push({ x: $scope.fieldWidth, value: $scope.fieldWidth/10 });

    $scope.path = "M0 " + $scope.fieldHeight;
    for (var i = 0; i < countElements; i++) {
       $scope.path += " L" + $scope.elements[i].x + " " + $scope.elements[i].y;
    }; 

}]);