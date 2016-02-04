angular.module('EmployeePanda.controllers', [])
.controller('LoginCtrl', function($scope) {
  console.log("Hello World! ************");
  this.loginValue = 'Hi';
  this.login = function(){
    console.log("Hello World! ************");
    this.loginValue = 'Hi Login';
  };

  this.signUp = function(){
  console.log("Hello World! ************");
    this.loginValue = 'Hi SignUp';
  };
});