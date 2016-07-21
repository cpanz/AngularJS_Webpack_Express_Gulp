import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './index.view.html';

class indexController {
  constructor() {
    this.name = "Index";
  }
}

function indexComponent() {
  return {
    restrict: 'AE',
    template : 'template',
    controller: 'indexController',
    controllerAs: 'index'
  };

}

let indexModule = angular.module('index', [
  uiRouter
  ])
  .config(config)
  .component('index', indexComponent);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];
  function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/',
        component: 'index'
      });
  }

export default indexModule;