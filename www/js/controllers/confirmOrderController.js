angular.module('EmployeePanda.controllers')
.controller('ConfirmOrderController', function($scope, $stateParams, EmployeeService, DetailsService, $state) {  
    this.orderDetails = DetailsService.employeeOrder.employeeOrder.get();
    
    // Fetch Vendor Information
     this.vendorInfo = DetailsService.vendorInfo.selectedVendor.get();

    this.postOrderObject = {};
    if(this.orderDetails !== null)
    {
    	angular.copy(this.orderDetails, this.postOrderObject);
    	delete this.postOrderObject.vendorName;
    	delete this.postOrderObject.totalCost;
    }

    this.confirmOrder = function(){
    	if(this.postOrderObject !== {})
    	{
    		EmployeeService.confirmEmployeeOrder(this.postOrderObject).then(function(response){
<<<<<<< HEAD
    		DetailsService.confirmedOrderInfo.orderInfo.set(response);
    		$state.go('app.finishOrder');
=======
    		  $state.go('app.finishOrder');
>>>>>>> origin/master
	    	}).catch(function(error){
	    		alert("Error placing your order. Please contact Vendor directly.");
	    	});
    	}
    };

    this.cancelOrder = function(){
    	$state.go('app.vendorList');
    };
});