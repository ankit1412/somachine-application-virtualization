/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.machines', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('machines', {
          url: '/machines',
          templateUrl: 'app/pages/machines/machines.html',
          title: 'Machines',
          sidebarMeta: {
            icon: 'ion-laptop',
            order: 100,
          },
        });
  }

})();
