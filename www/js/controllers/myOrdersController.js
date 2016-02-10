angular.module('EmployeePanda.controllers')
.controller('MyOrdersController', function($scope, $stateParams, EmployeeService, DetailsService, $state) {  
    this.employeeInfo = {
    	"emailid": DetailsService.loginInfo.userInfo.get().emailid
    };

    this.myOrdersList = EmployeeService.getMyOrders(this.employeeInfo);
});