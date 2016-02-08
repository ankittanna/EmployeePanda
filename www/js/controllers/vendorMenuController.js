angular.module('EmployeePanda.controllers')
.controller('VendorMenuController', function($scope, $stateParams, EmployeeService, DetailsService) {  
     this.vendorId = $stateParams.vendorId;
     
     // Fetch Vendor Information
     this.vendorInfo = DetailsService.vendorInfo.selectedVendor.get('selectedVendorObject');
	 
	 // Explicit Menu List
	 this.vendorMenu = this.vendorInfo.menu;

	 this.orderCost = 0;

	 this.updateOrderQuantity = function()
	 {
	 	this.orderCost = this.calculateOrderCost();
	 };

	 this.decreaseCounter = function(counterId){
	 	if(parseInt(angular.element('#counter'+counterId).val())>0){
	 		angular.element('#counter'+counterId).val(parseInt(angular.element('#counter'+counterId).val()) -1);
	 		this.vendorInfo.menu[counterId].quantity = parseInt(angular.element('#counter'+counterId).val());
	 	}
	 	this.orderCost = this.calculateOrderCost();
	 };

	 this.increaseCounter = function(counterId){
	 	if(parseInt(angular.element('#counter'+counterId).val())<50){
	 		angular.element('#counter'+counterId).val(parseInt(angular.element('#counter'+counterId).val()) +1);
	 		this.vendorInfo.menu[counterId].quantity = parseInt(angular.element('#counter'+counterId).val());
	 	}
	 	this.orderCost = this.calculateOrderCost();
	 };

	 this.calculateOrderCost = function(){
	 	var itemsCostForOrder = this.vendorInfo.menu.map(function(item, index, array){
	 		return parseInt(item.rate)*parseInt(item.quantity);
	 	});

	 	var totalCost = itemsCostForOrder.reduce(function(a, b) { return a + b; }, 0);

	 	return parseInt(totalCost) || 0;
	 };

});