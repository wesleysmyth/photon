(function() {
  
  angular
    .module('app.sidebar')
    .directive('sidebar', sidebar);

    /* @ngInject */      
    function sidebar() {
        
      return {
        restrict: 'EA',          
        templateUrl: 'app/home/sidebar/sidebar.html',
        replace: true
      };

    }

})();

