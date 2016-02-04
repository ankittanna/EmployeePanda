angular.module('EmployeePanda.controllers')
.controller('SignupCtrl', function($scope, EPS, $state, $ionicPopup) {
    $scope.submitted = false;
    
    this.submitSignupForm = function(isFormValid){
        $scope.submitted = true;
        
        if(isFormValid)
        {
            alert('Our Form is Valid');
        }
    };
});