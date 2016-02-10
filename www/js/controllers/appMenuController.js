angular.module('EmployeePanda.controllers')
.controller('AppMenuController', function($scope, $state) {  
    this.goToPage = function(state){
        $state.go(state);
    };
});