(function() {
'use strict';

  angular
    .module('app')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope'];
  function IndexController($scope) {
    var vm = this;
    
    activate();

    ////////////////

    function activate() { }
  }
})();