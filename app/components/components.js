import angular from 'angular';
import Index from './index/index';

let componentModule = angular.module('app.components', [
  Index,
])
  
.name;

export default componentModule;