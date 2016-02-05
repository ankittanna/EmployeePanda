angular.module('EmployeePanda.controllers')
.controller('VendorMenuController', function($scope, $stateParams, EmployeeService) {  
     console.log('This is the vendor' + $stateParams.vendorId);
     //alert($routeParams.vendorId);  
});