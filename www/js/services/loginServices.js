function employeePandaServices($http) {
    'use strict';
    var vendorList = {};
    var baseUrl = 'https://dmc-meanjs.mybluemix.net/api';   
    

    function loginUser(userData) {
        var loginUrl = '';
        if(userData.role == 'Employee'){
            loginUrl = baseUrl + '/loginEmployee';
        }else {
            loginUrl = baseUrl + '/loginVendor';
        }
        
        delete userData.role;
       
        return $http({
            method: 'POST',
            url: loginUrl,
            headers: {
                'Content-Type': 'application/json'
            },
            data: userData
        }).then(function(response) {
            console.log(response.data) ;  
            vendorList = response.data;        
            return response.data;
        });     
        
    }
    
    function signupUser(userData) {
        var signupUrl = '';
        signupUrl = baseUrl + '/employee';
        
        return $http({
            method: 'POST',
            url: signupUrl,
            headers:{
                'Content-Type': 'application/json'
            },
            data: userData
        }).then(function(response) {
            console.log(response.data);          
            return response.data;
        });
    }
        
    // Object Map of functions
    return {
        loginUser: loginUser,
        vendorList: vendorList,
        signupUser: signupUser

    };
}

angular.module('EmployeePanda.services',[])
    .factory('EPS', employeePandaServices);

employeePandaServices.$inject = ['$http'];
