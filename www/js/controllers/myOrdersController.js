angular.module('EmployeePanda.controllers')
.controller('MyOrdersController', function($scope, $stateParams, EmployeeService, DetailsService, $state) {  
    this.employeeInfo = {
    	"emailid": "vinod.khandelwal@accenture.com"
    };
    
    $scope.myOrdersList = [];
    EmployeeService.getMyOrders(this.employeeInfo).then(function(data){
    	$scope.myOrdersList = data;
    });
    
    this.calculateOrderAmount = function(orderedItems)
    {
        var itemsCostForOrder = orderedItems.map(function(item, index, array){
	 		return parseInt(item.rate)*parseInt(item.quantity);
	 	});

	 	var totalCost = itemsCostForOrder.reduce(function(a, b) { return a + b; }, 0);

	 	return parseInt(totalCost) || 0;
    };
    
    this.convertTimeFormat = function(time){
        var formattedDateTime;
        var orderDate = new Date(time);
        
        var hours = orderDate.getHours();
        var minutes = orderDate.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        
        formattedDateTime = orderDate.getDate() + '/' + (orderDate.getMonth() + 1) + '/' +  orderDate.getFullYear() + ' ' + strTime;
        return formattedDateTime;
    };

    this.backToHome = function(){
        $state.go('app.vendorList');
    };
});