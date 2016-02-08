function employeeServices($http) {
    'use strict';
    
    var baseUrl = 'https://dmc-meanjs.mybluemix.net/api';       

    function getVendorList() {
        var url = baseUrl + '/vendors';
        return $http.get(url).then(function(response) {
            return response.data;
        });
        
    }
        
    // Object Map of functions
    return {
        getVendorList: getVendorList,

    };
}

angular.module('EmployeePanda.services')
.factory('EmployeeService', employeeServices);

employeeServices.$inject = ['$http'];
