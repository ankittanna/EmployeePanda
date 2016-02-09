angular.module('EmployeePanda.controllers').controller('VendorCtrl', function($scope,  $state, VendorService, DetailsService) {

        $scope.orders = [];  
        
        $scope.userInfo = DetailsService.loginInfo.userInfo.get();
        
        this.getOrders = function(){
            
            VendorService.getOrders().then(function(data) {            
            $scope.orders = data; 
                 
            for (var i=0; i<$scope.orders.length; i++) {
                var total = 0;
                for (var j=0; j<$scope.orders[i].ordereditems.length; j++) {
                    total = total + $scope.orders[i].ordereditems[j].rate * $scope.orders[i].ordereditems[j].quantity;
                }
                $scope.orders[i].total = total;
            }
            }).catch(function(response) {
                console.log(JSON.stringify(response));
            });
            
        }
        
        this.getOrders();
        
        
        this.selectOrder = function(orderObject){
        	DetailsService.orderInfo.selectedOrder.set(orderObject);
            $state.go('app.orderedMenu');
        };
        
    
});
    
