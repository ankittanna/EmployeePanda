angular.module('EmployeePanda.controllers')
.controller('FinishOrderController', function($scope, $stateParams, EmployeeService, DetailsService, $state) {  
    this.orderDetails = DetailsService.employeeOrder.employeeOrder.get();

    
});