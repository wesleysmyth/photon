(function() {
  'use strict';

  angular
    .module('app.modal')
    .directive('modal', modal);

    /* @ngInject */      
    function modal() {
        
      return {
        restrict: 'EA',          
        templateUrl: 'app/home/modal/modal.html',
        replace: true
      };

    }

})();

