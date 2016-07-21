import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './app.html';
import Components from './components/components';
import appComponent from './app.component';

angular.module('app', [
    uiRouter,
    Components
  ])
  .config(config)
  .component('app', appComponent).name;

  function config($locationProvider) {
    "ngInject";

  }