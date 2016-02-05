function vendorServices($http) {
    'use strict';
    
    var baseUrl = 'https://dmc-meanjs.mybluemix.net/api';       

    function getOrders() {
        var url = baseUrl + '/orders';
        return $http.get(url).then(function(response) {
            return response.data;
        });
        
    }
        
    // Object Map of functions
    return {
        getOrders: getOrders,

    };
}

angular.module('EmployeePanda.services')
.factory('VendorService', vendorServices);

vendorServices.$inject = ['$http'];
