angular.module('EmployeePanda.controllers')
.controller('VendorMenuController', function($scope, $stateParams, EmployeeService) {  
     this.vendorId = $stateParams.vendorId;
     
     // Fetch Vendor Information
    // this.getVendorInformation();

});