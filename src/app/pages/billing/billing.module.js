/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.billing', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('billing', {
          url: '/billing',
          templateUrl: 'app/pages/billing/billing.html',
          title: 'Billing',
          sidebarMeta: {
            icon: 'ion-social-usd',
            order: 200,
          },
        });
  }

})();
