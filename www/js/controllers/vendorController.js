angular.module('EmployeePanda.controllers').controller('VendorCtrl', function($scope, VendorService) {

        $scope.orders = [];  

        VendorService.getOrders().then(function(data) {
            $scope.orders = data;          
        }).catch(function(response) {
              console.log(JSON.stringify(response));
        });
    
});

