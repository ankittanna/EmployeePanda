angular.module('EmployeePanda.controllers')
.controller('VendorMenuController', function($scope, $stateParams, EmployeeService, DetailsService) {  
     this.vendorId = $stateParams.vendorId;
     
     // Fetch Vendor Information
     this.vendorInfo = DetailsService.vendorInfo.selectedVendor.get('selectedVendorObject');
	
	 var counterId = 'counter';
	 this.decreaseCounter = function(counterId){
	 	
	 };

	 this.increaseCounter = function(counterId){

	 };

});