/**
 * @ngdoc function
 * @name meditationFunFunApp.controller:Journals
 * @description
 * # Journals 
 * Controller of the meditationFunFunApp
 */
angular.module('meditationFunFunApp')
    .factory('JournalFactory', function($http) {
        var factory = {};

        factory.list = function(callback) {
            $http({
                method: 'GET',
                url: '../../media/sampleJournals.json'
            }).then(callback);
        };

        return factory;
    })
    .controller('JournalCtrl', function($scope, JournalFactory) {

        JournalFactory.list(function(journals) {
            $scope.journals = journals.data;
        })

        $scope.selectJournal = function(journal) {
            $scope.selectedJournal = journal;
        }
    });