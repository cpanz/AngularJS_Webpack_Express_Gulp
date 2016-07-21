import angular from 'angular';
import uiRouter from 'angular-ui-router';

import indexComponent from './index.component';


let indexModule = angular.module('index', [
  uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/',
        component: 'index'
      });
  })
  .component('index', indexComponent).name;


export default indexModule;