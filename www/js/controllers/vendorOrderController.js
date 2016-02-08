angular.module('EmployeePanda.controllers')
.controller('VendorOrderController', function($scope, $stateParams, EmployeeService, DetailsService) {  
     this.orderId = $stateParams.orderId;
     
     // Fetch Vendor Information
     this.orderInfo = DetailsService.orderInfo.selectedOrder.get('selectedOrderObject');
	 
	 // Explicit Menu List
	 this.orderMenu = this.orderInfo.ordereditems;	 

});