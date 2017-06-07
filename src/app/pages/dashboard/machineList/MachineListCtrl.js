/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('MachineListCtrl', MachineListCtrl);

  /** @ngInject */
  function MachineListCtrl($scope, $uibModal) {
    
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
    $scope.uploadDoc = function () {
      var fileInput = document.getElementById('uploadDoc');
      fileInput.click();
    };

    $scope.uploadFirmware = function () {
      var fileInput = document.getElementById('uploadFirmware');
      fileInput.click();
    };

    $scope.uploadProgram = function () {
      var fileInput = document.getElementById('uploadProg');
      fileInput.click();
    };

    $scope.smartTablePageSize = 5;

    $scope.smartTableData = [
      {
        id: 1,
        name: 'Machine 1',
        version: 'v4.1',
        type: 'basic'
      },
      {
        id: 2,
        name: 'Machine 2',
        version: 'v4.0',
        type: 'basic'
      },
      {
        id: 3,
        name: 'Machine 3',
        version: 'v4.1',
        type: 'somachine motion'
      },
      {
        id: 4,
        name: 'Machine 4',
        version: 'v4.2',
        type: 'somachine'
      },
      {
        id: 5,
        name: 'Machine 5',
        version: 'v4.0',
        type: 'basic'
      },
      {
        id: 6,
        name: 'Machine 6',
        version: 'v5.0',
        type: 'somachine motion'
      }
    ];
    }
})();
