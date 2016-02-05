function vendorServices($http) {
    'use strict';
    
    var baseUrl = 'https://dmc-meanjs.mybluemix.net/api';       

    function getOrders() {
        var url = baseUrl + '/orders';
        return $http.get(url).then(function(response) {
            return response.data;
        });
        
    }
    
    function getVendorInformation()
    {
        
    }

    // Object Map of functions
    return {
        getOrders: getOrders,
        getVendorInformation: getVendorInformation
    };
}

angular.module('EmployeePanda.services')
.factory('VendorService', vendorServices);

vendorServices.$inject = ['$http'];
