(function () {
    'use strict';

    angular.module('myFirstApp', [])

    .controller('MyFirstController', function ($scope) {
        $scope.name = "Kaoutar";
        $scope.sayHello = function () {
            return "Hello coursera";
        };
    });

})();
