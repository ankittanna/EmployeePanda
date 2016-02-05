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
  

  return {
    vendorInfo: this.vendorInfoStorage
  };
});