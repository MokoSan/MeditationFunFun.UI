'use strict';

/**
 * @ngdoc function
 * @name meditationFunFunApp.controller:Meditate
 * @description
 * # Meditate 
 * Controller of the meditationFunFunApp
 */
angular.module('meditationFunFunApp')
    .factory('ChimeFactory', function() {
        var chimeFactory = {}
        chimeFactory.chime = new Audio('../../media/chime.mp3');
        return chimeFactory;
    })
    .controller('MeditateCtrl', function($scope, $timeout, ChimeFactory) {

        var mytimeout = null;
        $scope.isPaused = true;
        $scope.isStopped = true;
        $scope.buttonText = "Start"

        $scope.secondsCounter = 0;
        $scope.minutesCounter = 20;

        $scope.subtractOneFromTheCounters = function() {
            if ($scope.secondsCounter == 0 && $scope.minutesCounter != 0) {
                $scope.minutesCounter--;
                $scope.secondsCounter = 59;
            } else {
                $scope.secondsCounter--;
            }
        }

        $scope.interactWithTimer = function() {

            if ($scope.isStopped) {
                $scope.isStopped = false;
            }

            if ($scope.isPaused) {
                $scope.startTimer();
            } else {
                $scope.pauseTimer();
            }
        }

        // actual timer method, counts down every second, stops on zero
        $scope.onTimeout = function() {

            if ($scope.secondsCounter === 0 && $scope.minutesCounter === 0) {
                $scope.playChime();
                $scope.isPaused = true;
                $scope.buttonText = "Start";
                $scope.stopTimer();
                return;
            }

            $scope.subtractOneFromTheCounters();
            mytimeout = $timeout($scope.onTimeout, 1000);
        };

        $scope.startTimer = function() {
            $scope.buttonText = "Pause";
            $scope.isPaused = false;
            mytimeout = $timeout($scope.onTimeout, 1000);
        };

        $scope.pauseTimer = function() {
            $scope.$broadcast('timer-paused', 0);
            $scope.buttonText = "Resume";
            $scope.isPaused = true;
            $timeout.cancel(mytimeout);
        }

        // stops and resets the current timer
        $scope.stopTimer = function() {
            $scope.$broadcast('timer-stopped', 0);
            $scope.resetTimer();
            $timeout.cancel(mytimeout);
        };

        $scope.resetTimer = function() {
            $scope.minutesCounter = 20;
            $scope.secondsCounter = 0;
            $scope.isStopped = true;
            $scope.isPaused = true;
            $scope.buttonText = "Start";
        }

        $scope.playChime = function() {
            ChimeFactory.chime.play();
        }
    });