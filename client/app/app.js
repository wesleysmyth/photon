(function() {
  'use strict';

  angular
    .module('app', [
      'app.core',
      'app.home',
      'ui.router'
    ])
    
    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'app/home/home.html',
          controller: 'Home as vm'
        })
        .state('home.collection', {
          url: '/:collectionName',
          templateUrl: 'app/home/home.html',
          controller: 'Home as vm'
        })

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/home');
    });

})();
