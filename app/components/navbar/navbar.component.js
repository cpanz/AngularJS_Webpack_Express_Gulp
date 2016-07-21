import controller from './navbar.controller';
import template from './navbar.html';

let navbarComponent = {
  restrict: 'AE',
  bindings: {},
  template,
  controller,
  controllerAs: 'navbar'
};

export default navbarComponent;
