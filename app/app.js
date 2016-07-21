import angular from 'angular';
import uiRouter from 'angular-ui-router';
// import 'bootstrap/dist/css/bootstrap.css';

import template from './app.html';
import IndexController from './components/index/index.controller';

angular.module('app', [
    uiRouter,
    IndexController
  ])
  .component('app', appComponent);

  let appComponent = function () {
    return {
      template: 'template',
      restrict: 'AE'
    }
  };

  function config() {
    

    // $locationProvider.html5Mode(true);
  }