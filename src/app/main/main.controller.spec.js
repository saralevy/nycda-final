(function() {
  'use strict';

  describe('test MyServicesModule', function() {
    var toTest;

    beforeEach(module('template'));
    beforeEach(inject(function(_MyResource_) {
      toTest = _MyResource_;
    }));

    it('should initialize stock to AAPL', function() {
      expect(toTest.stock).toBe('AAPL');
    });

    it('should not initialize stock to MSFT', function() {
      expect(toTest.stock).not.toBe('MSFT');
    });
  });

})();