angular.module('EmployeePanda.controllers')
.controller('VendorMenuController', function($scope, $stateParams, EmployeeService, DetailsService) {  
     this.vendorId = $stateParams.vendorId;
     
     // Fetch Vendor Information
     this.vendorInfo = DetailsService.vendorInfo.selectedVendor.get('selectedVendorObject');
	
	 this.decreaseCounter = function(counterId){
	 	if(parseInt(angular.element('#counter'+counterId).val())>0){
	 		angular.element('#counter'+counterId).val(parseInt(angular.element('#counter'+counterId).val()) -1);
	 	}
	 };

	 this.increaseCounter = function(counterId){
	 	if(parseInt(angular.element('#counter'+counterId).val())<50){
	 		angular.element('#counter'+counterId).val(parseInt(angular.element('#counter'+counterId).val()) +1);
	 	}
	 };

});