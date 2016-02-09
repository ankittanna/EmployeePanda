angular.module('EmployeePanda.controllers')
.controller('VendorOrderController', function($scope, $stateParams, VendorService, DetailsService) {  
     this.orderId = $stateParams.orderId;
     
     // Fetch Vendor Information
     this.orderInfo = DetailsService.orderInfo.selectedOrder.get('selectedOrderObject');
	 
	 // Explicit Menu List
	 this.orderMenu = this.orderInfo.ordereditems;	 
     
      this.changeOrderStatus = function(ordernumber,status) {
          
          var orderChangeObject  = {
                id: ordernumber              
          }
          
          if(status === 'Order in Queue'){
              orderChangeObject.status = "Order in Process";
          }
          else if (status === 'Order in Process'){
              orderChangeObject.status = "Order is Ready";
          }       
          
          VendorService.changeOrderStatus(orderChangeObject).then(function(data) {
            $scope.vendors = data;          
          }).catch(function(response) {
            // TODO: Is this really required?
            // angular.element('#roomTable').css('display', 'none'); 
            console.log(JSON.stringify(response));
          }); 
	 	
	  };

});