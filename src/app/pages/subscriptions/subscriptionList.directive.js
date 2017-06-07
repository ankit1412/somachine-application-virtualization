/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('subscriptionList', subscriptionList);

  /** @ngInject */
  function subscriptionList() {
    return {
      restrict: 'E',
      controller: 'SubscriptionListCtrl',
      templateUrl: 'app/pages/subscriptions/subscriptionList.html'
    };
  }
})();
