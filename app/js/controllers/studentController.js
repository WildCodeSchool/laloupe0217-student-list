angular.module('app')
  .controller('StudentController', function($scope, StudentService) {

      $scope.students = [];

      StudentService.getAll().then(function (res) {
        $scope.students = res.data;
      }, function (err) {
        // bad
      });


  });
