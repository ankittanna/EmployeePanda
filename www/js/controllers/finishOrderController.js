angular.module('EmployeePanda.controllers')
.controller('FinishOrderController', function($scope, $stateParams, EmployeeService, DetailsService, $state) {  
    this.orderDetails = DetailsService.employeeOrder.employeeOrder.get();

    this.backToHome = function(){
        $state.go('app.vendorList');
    };
    
    angular.element('#orderInfo').qrcode({
        text    : "http://jetienne.com"
    });;
});