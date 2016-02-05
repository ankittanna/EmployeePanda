angular.module('EmployeePanda.controllers')
.controller('VendorMenuController', function($scope, $stateParams, EmployeeService, DetailsService) {  
     this.vendorId = $stateParams.vendorId;
     
     // Fetch Vendor Information
     this.vendorInfo = DetailsService.vendorInfo.selectedVendor.get('selectedVendorObject');
	
	 this.decreaseCounter = function(counterId){
	 	alert(angular.element('#counter'+counterId).val());
	 };

	 this.increaseCounter = function(counterId){

	 };

});