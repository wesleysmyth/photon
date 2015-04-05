(function() {
  'use strict';
  
  angular
    .module('app.collection', [])
    .factory('CollectionModel', CollectionModel);

    function CollectionModel () {
      var collection = {};

      var collectionModel = {
        get: get,
        set: set,
        reset: reset,
        add: add,
        constructor: constructor
      }

      return collectionModel;

      /////////////////////////////////////
      
      function get() {
        return angular.copy(collection);
      }

      function set(newCollection) {
        collection = angular.copy(newCollection);
      }

      function reset() {
        collection = {};
      }

      function add(photo) {
        collection.photos.push(angular.copy(photo));
      }

      function constructor(title) {
        this.title = title || '';
        this.photos = [];
      }
    }

})();
