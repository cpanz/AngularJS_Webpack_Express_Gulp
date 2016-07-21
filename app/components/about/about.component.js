import controller from './about.controller';
import template from './about.html';

let aboutComponent = {
  restrict: 'AE',
  bindings: {},
  template,
  controller,
  controllerAs: 'about'
};

export default aboutComponent;