'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  beforeEach(module('cohortioApp.directives'));

  describe('app-version', function() {
    it('should print current version', function() {
      module(function($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<span app-version></span>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });
});

// Wrote small #Django app to tackle the problem of bundling #Underscore templates into static js files http://bit.ly/1n0ZgsN            