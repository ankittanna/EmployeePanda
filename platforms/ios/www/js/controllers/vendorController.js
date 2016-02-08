angular.module('EmployeePanda.controllers').controller('VendorCtrl', function($scope, VendorService,DetailsService) {

        $scope.orders = [];  
        
        $scope.userInfo = DetailsService.loginInfo.userInfo.get();

        VendorService.getOrders().then(function(data) {
            $scope.orders = data;          
        }).catch(function(response) {
              console.log(JSON.stringify(response));
        });
    
});

