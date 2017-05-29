'use strict';

/**
 * @ngdoc function
 * @name meditationFunFunApp.controller:ModalJournalCtrl
 * @description
 * # ModalJournalCtrl 
 * Controller of the meditationFunFunApp
 */
angular.module('meditationFunFunApp')
    .factory('JournalCreatorFactory', function($http){
        var factory = {};
        factory.create = function(scope, callback) {
            var data = { "Title" : scope.title, "Content" : scope.content, "DateOfMeditation" : scope.creationDateTime }
            var url = 'http://localhost:8080/api/v1/journals';
            $http({
                method: 'POST',
                url: url,
                data : data,
                headers : {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).then(callback);
        }

        return factory;
    })
    .controller('ModalJournalCtrl', function($scope, $uibModalInstance, JournalCreatorFactory) {

        $scope.creationDateTime = new Date();
        var creationDate = $scope.creationDateTime.toLocaleDateString();
        var creationTime = $scope.creationDateTime.toLocaleTimeString();

        $scope.title = "Meditation on " + creationDate + " - " + creationTime;
        $scope.content = "Describe your meditation in 200 characters.";

        $scope.save = function() {
            JournalCreatorFactory.create($scope, function(data) {
                console.log(data);
            });

            $uibModalInstance.close();
        }

        $scope.close = function() {
            $uibModalInstance.close();
        }
    });