angular.module('EmployeePanda.services')
.factory('DetailsService', function($window, localStorageService) {
  
  this.vendorInfoStorage = {
    selectedVendor:{
      set: function(obj){
        localStorageService.set('selectedVendorObject', obj);
      },
      get: function(){
        return localStorageService.get('selectedVendorObject');
      },
      remove: function(){
        localStorageService.set('selectedVendorObject');
      }
    }
  };
  
  this.orderInfoStorage = {
    selectedOrder:{
      set: function(obj){
        localStorageService.set('selectedOrderObject', obj);
      },
      get: function(){
        return localStorageService.get('selectedOrderObject');
      },
      remove: function(){
        localStorageService.set('selectedOrderObject');
      }
    }
  };  
  
  
   this.loginInfoStorage = {
    userInfo:{
      set: function(obj){
        localStorageService.set('userInfoObject', obj);
      },
      get: function(){
        return localStorageService.get('userInfoObject');
      },
      remove: function(){
        localStorageService.set('userInfoObject');
      }
    }
  };
  

  return {
    vendorInfo: this.vendorInfoStorage,
    loginInfo: this.loginInfoStorage,
    orderInfo: this.orderInfoStorage
  };
});