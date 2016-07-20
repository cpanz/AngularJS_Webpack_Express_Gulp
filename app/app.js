(function() {
  'use strict';

  angular.module('app', [
    'ngRoute'
  ])
  .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/index/index.view.html',
        controller: 'IndexController',
        controllerAs: 'vm'
      });
  }

})();