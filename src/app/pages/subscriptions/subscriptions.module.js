/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.subscriptions', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('subscriptions', {
          url: '/subscriptions',
          templateUrl: 'app/pages/subscriptions/subscriptions.html',
          title: 'Subscriptions',
          sidebarMeta: {
            icon: 'ion-key',
            order: 200,
          },
        });
  }

})();
