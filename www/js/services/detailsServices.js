angular.module('EmployeePanda.services')
.factory('DetailsService', function($window, localStorageService) {
  
  this.vendorInfoStorage = {
    selectedVendor:{
      get: function(obj){
        localStorageService.get('selectedVendorObject', obj);
      },
      set: function(){
        localStorageService.set('selectedVendorObject', obj);
      },
      remove: function(){
        localStorageService.set('selectedVendorObject', obj);
      }
    }
  };
  

  return {
    vendorInfo: this.vendorInfoStorage
  };
});