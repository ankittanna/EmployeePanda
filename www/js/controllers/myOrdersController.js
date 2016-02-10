angular.module('EmployeePanda.controllers')
.controller('MyOrdersController', function($scope, $stateParams, EmployeeService, DetailsService, $state) {  
    this.employeeInfo = {
    	"emailid": "vinod.khandelwal@accenture.com"
    };

    this.myOrdersList = EmployeeService.getMyOrders(this.employeeInfo);

    alert(JSON.stringify(this.myOrdersList));
});