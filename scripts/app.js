

/**
 * @ngdoc overview
 * @name newAngularApp
 * @description
 * # newAngularApp
 *
 * Main module of the application.
 */
angular
  .module('newAngularApp', [
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    /*
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
      */

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as main'
      })
      .state('about', {
        url: '/about/',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl as about'
      })
      .state('research', {
        url: '/research/',
        templateUrl: 'research/research.html',
        controller: 'ResearchCtrl as researchCtrl'
      })
      .state('teaching', {
        url: '/teaching/',
        templateUrl: 'teaching/teaching.html',
        controller: 'TeachingCtrl as teachingCtrl'
      })
      .state('publications', {
        url: '/publications/',
        templateUrl: 'publications/publications.html',
        controller: 'PublicationsCtrl as publicationsCtrl'
      });

      $urlRouterProvider.otherwise('/');
  });
