angular.module('EmployeePanda.controllers')
.controller('VendorListController', function($scope, EmployeeService) {  
        this.searchVendorStr = '';
        $scope.vendors = [];
 
        EmployeeService.getVendorList().then(function(data) {
            $scope.vendors = data;          
        }).catch(function(response) {
            // TODO: Is this really required?
            // angular.element('#roomTable').css('display', 'none'); 
            console.log(JSON.stringify(response));
        }); 
});