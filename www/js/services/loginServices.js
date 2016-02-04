function employeePandaServices($http) {
    'use strict';
    var userObject = {};
    var baseUrl = 'https://dmc-meanjs.mybluemix.net/api';       

    function loginUser(userData) {     
        return $http({
            method: 'POST',
            url: baseUrl + '/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: userData
        }).then(function(response) {
            console.log(response.data) ;  
            userObject = response.data[0];        
            return response.data;
        });     
        
    }
    
    function signupUser(userData) {      
        return $http({
            method: 'POST',
            url: baseUrl + '/employee',
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
        userObject:userObject,
        signupUser: signupUser

    };
}

angular.module('EmployeePanda.services',[])
    .factory('EPS', employeePandaServices);

employeePandaServices.$inject = ['$http'];
