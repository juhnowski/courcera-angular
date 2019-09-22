(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Ilya";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
