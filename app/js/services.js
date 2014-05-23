'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('cohortioApp.services', []).
  value('version', '0.1').
  service('monthService',  function() {
  
  	this.month = 1;

  	this.selectMonth = function(m) {
      this.month = m;
  	};
  	this.getMonth = function(){
      return this.month;
  	};
});;
