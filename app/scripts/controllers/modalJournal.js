'use strict';

/**
 * @ngdoc function
 * @name meditationFunFunApp.controller:ModalJournalCtrl
 * @description
 * # ModalJournalCtrl 
 * Controller of the meditationFunFunApp
 */
angular.module('meditationFunFunApp')
    .controller('ModalJournalCtrl', function($scope, $uibModalInstance) {

        $scope.creationDateTime = new Date();
        var creationDate = $scope.creationDateTime.toLocaleDateString();
        var creationTime = $scope.creationDateTime.toLocaleTimeString();

        $scope.title = "Meditation on " + creationDate + " - " + creationTime;
        $scope.content = "Describe your meditation in 200 characters.";

        $scope.save = function() {
            $uibModalInstance.close();
        }

        $scope.close = function() {
            $uibModalInstance.close();
        }
    });