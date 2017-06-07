/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('SubscriptionListCtrl', SubscriptionListCtrl);

  /** @ngInject */
  function SubscriptionListCtrl($scope, $uibModal) {

    $scope.smartTablePageSize = 5;

    $scope.smartTableData = [
      {
        id: 1,
        name: 'Subscription 1',
        subscriptionId: '414bbc41-83a5-4fc3-b35a-808a192ba86e',
        role: 'Owner',
        cost: '200$',
        status: 'Active'
      },
      {
        id: 2,
        name: 'Subscription 2',
        subscriptionId: '7556adf6-ad0e-4905-979c-249c821168ef',
        role: 'Owner',
        cost: '230$',
        status: 'Active'
      }
    ];

    $scope.open = function (page, size) {
      $uibModal.open({
        animation: true,
        templateUrl: page,
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    };

  }
})();
