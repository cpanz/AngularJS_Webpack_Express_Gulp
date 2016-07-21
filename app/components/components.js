import angular from 'angular';
import Index from './index/index';
import About from './about/about';
import Navbar from './navbar/navbar';

let componentModule = angular.module('app.components', [
  Index,
  About,
  Navbar
])
  
.name;

export default componentModule;