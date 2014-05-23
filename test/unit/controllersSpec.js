'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  
  beforeEach(module('cohortioApp.controllers'));
  beforeEach(module('ngResource'));


  it('should define DashboardCtrl', inject(function($controller, $resource, $rootScope) {
    //spec body    
    var DashboardCtrl = $controller('DashboardCtrl', { 
      $scope: $rootScope,
      $resource: $resource,
      cohortioConstants: {},
      monthService: {}
    });
    expect(DashboardCtrl).toBeDefined();
  }));

});

