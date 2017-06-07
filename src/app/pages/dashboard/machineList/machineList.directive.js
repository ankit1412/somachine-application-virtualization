/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('machineList', machineList);

  /** @ngInject */
  function machineList() {
    return {
      restrict: 'E',
      controller: 'MachineListCtrl',
      templateUrl: 'app/pages/dashboard/machineList/machineList.html'
    };
  }
})();
