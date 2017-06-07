/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('marketPlace', marketPlace);

  /** @ngInject */
  function marketPlace() {
    return {
      restrict: 'E',
      templateUrl: 'app/pages/dashboard/marketPlace/marketPlace.html'
    };
  }
})();