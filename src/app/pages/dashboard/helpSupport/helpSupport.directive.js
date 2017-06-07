/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('helpSupport', helpSupport);

  /** @ngInject */
  function helpSupport() {
    return {
      restrict: 'E',
      templateUrl: 'app/pages/dashboard/helpSupport/helpSupport.html'
    };
  }
})();