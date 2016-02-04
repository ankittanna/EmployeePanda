angular.module('EmployeePanda.controllers', [])
.controller('LoginCtrl', function($scope) {
  console.log("Hello World! ************");
  $scope.loginValue = 'Hi';
  $scope.login = function(){
    $scope.loginValue = 'Hi Login';
  };

  $scope.signUp = function(){
    $scope.loginValue = 'Hi SignUp';
  };
});