(function() {
  'use strict';

  angular
    .module('app.models')
    .factory('Models', Models);

    function Models (CollectionModel) {
      var models = {
        collection: CollectionModel
      };

      return models;
    }

})();
