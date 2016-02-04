angular.module('EmployeePanda.controllers', [])
.controller('LoginCtrl', function($scope, EPS, $state, $ionicPopup) {
    $scope.data= {};
    this.login = function() {
        EPS.loginUser($scope.data).then(function(data) {
            $state.go('app.vendorlist');
        }).catch(function(response) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login Error!',
                template: 'Please check your credentials!'
            });
        });
    };
  
});