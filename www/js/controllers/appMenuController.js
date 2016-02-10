angular.module('EmployeePanda.controllers')
.controller('AppMenuController', function($scope, $state, DetailsService) {  
    this.goToPage = function(state){
        $state.go(state);
    };

    this.loginInfo = DetailsService.loginInfo.userInfo.get();
    //alert(JSON.stringify(this.loginInfo));
});