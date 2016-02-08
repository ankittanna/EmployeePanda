angular.module('EmployeePanda.controllers', [])
.controller('LoginCtrl', function($scope, EPS, $state, $ionicPopup) {
    $scope.data = {};
    this.login = function(type) {
        alert(type);
        if(type === 'employee') {
                $state.go('app.vendorList');
            }
            else{
                $state.go('app.vendorhome');
            }
    };
    
    this.signup = function(){
        console.log("Does this come here!!");
        $state.go('app.signup');
    };
  
});