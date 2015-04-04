(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('Home', Home);

  function Home() {

    var vm = this;
    vm.test = 'this is only a test';
    vm.collections = [
      {title: 'All Photos', photos: [
          {id: 1, title: 'test', src: ''},
          {id: 2, title: 'wow', src: ''},
          {id: 3, title: 'amazing', src: ''},
          {id: 4, title: 'test', src: ''},
          {id: 5, title: 'wow', src: ''},
          {id: 6, title: 'amazing', src: ''},
          {id: 7, title: 'test', src: ''},
          {id: 8, title: 'wow', src: ''},
          {id: 9, title: 'wow', src: ''},
          {id: 10, title: 'amazing', src: ''},
          {id: 11, title: 'test', src: ''},
          {id: 12, title: 'wow', src: ''},
          {id: 13, title: 'amazing', src: ''},
          {id: 14, title: 'test', src: ''},
          {id: 15, title: 'wow', src: ''},
          {id: 16, title: 'amazing', src: ''},
          {id: 17, title: 'test', src: ''},
          {id: 18, title: 'wow', src: ''},
          {id: 19, title: 'amazing', src: ''},
          {id: 20, title: 'test', src: ''}
        ]
      },
      {title: 'Vacation', photos: []},
      {title: 'Friends', photos: []},
    ];
    vm.currentCollection = vm.collections[0];


    // home controller methods
    vm.viewCollection = viewCollection;

    function viewCollection (collectionId) {

      // set current collection
      vm.currentCollection = vm.collections[collectionId];


    }

  }

})();
