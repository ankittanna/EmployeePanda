angular.module('EmployeePanda.controllers')
.controller('ConfirmOrderController', function($scope, $stateParams, EmployeeService, DetailsService, $state) {  
    this.orderDetails = DetailsService.employeeOrder.employeeOrder.get();
});