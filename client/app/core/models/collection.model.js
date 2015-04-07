(function() {
  'use strict';
  
  angular
    .module('app.collection', [])
    .factory('CollectionModel', CollectionModel);

    function CollectionModel () {

      var collectionModel = {
        constructor: constructor
      }

      return collectionModel;

      /////////////////////////////////////

      // photo collection constructor
      function constructor(title) {
        this.title = title || '';
        this.photos = [];
      }
    }

})();
