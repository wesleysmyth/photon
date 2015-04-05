(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('Home', Home);

    function Home(CollectionModel) {
      var photoPath = '/content/img/';
      var vm = this;
      vm.collectionTitle = '';
      vm.allPhotos = [
        {title: 'Albert Einstein', src:'albert-einstein.jpg'},{title: 'Sound Waves', src: 'sound-waves.jpg'},
        {title: 'The Beatles', src:'beatles.jpg'}, {title: 'Bermuda', src:'bermuda.jpg'}, 
        {title: 'The Burger King', src:'burger-king.jpg'}, {title: 'A Cat', src:'cat.jpg'},
        {title: 'M.C. Escher', src:'escher.gif'}, {title: 'Garden Life', src:'garden.jpg'},
        {title: 'Gary Busey', src:'gary-busey.jpg'}, {title: 'Rug Dog', src:'huge-dog.jpg'},
        {title: 'Jaguar Life', src:'jaguar.jpg'}, {title: 'A Mac Original', src:'mac.jpg'},
        {title: 'They put a Man on the Moon', src:'manmoon.jpg'}, {title: 'Norwegian Fjords', src:'norway.jpg'},
        {title: 'Pizza', src:'pizza.jpg'}, {title: 'Russia', src:'russia.jpg'},
        {title: 'Snowboarding', src:'snowboarding.jpg'}, {title: 'Lost in Space', src:'space.jpg'},
        {title: 'Spanish Dreams', src:'spain.jpg'}, {title: 'Surf life', src:'surf.jpg'}
      ];


      vm.collections = [
        {title: 'All Photos', photos: [
            {id: 1, title: 'test', src: photoPath + vm.allPhotos[0].src},
            {id: 2, title: 'wow', src: photoPath + vm.allPhotos[1].src},
            {id: 3, title: 'amazing', src: photoPath + vm.allPhotos[2].src},
            {id: 4, title: 'test', src: photoPath + vm.allPhotos[3].src},
            {id: 5, title: 'wow', src: photoPath + vm.allPhotos[4].src},
            {id: 6, title: 'amazing', src: photoPath + vm.allPhotos[5].src},
            {id: 7, title: 'test', src: photoPath + vm.allPhotos[6].src},
            {id: 8, title: 'wow', src: photoPath + vm.allPhotos[7].src},
            {id: 9, title: 'wow', src: photoPath + vm.allPhotos[8].src},
            {id: 10, title: 'amazing', src: photoPath + vm.allPhotos[9].src},
            {id: 11, title: 'test', src: photoPath + vm.allPhotos[10].src},
            {id: 12, title: 'wow', src: photoPath + vm.allPhotos[11].src},
            {id: 13, title: 'amazing', src: photoPath + vm.allPhotos[12].src},
            {id: 14, title: 'test', src: photoPath + vm.allPhotos[13].src},
            {id: 15, title: 'wow', src: photoPath + vm.allPhotos[14].src},
            {id: 16, title: 'amazing', src: photoPath + vm.allPhotos[15].src},
            {id: 17, title: 'test', src: photoPath + vm.allPhotos[16].src},
            {id: 18, title: 'wow', src: photoPath + vm.allPhotos[17].src},
            {id: 19, title: 'amazing', src: photoPath + vm.allPhotos[18].src},
            {id: 20, title: 'test', src: photoPath + vm.allPhotos[19].src}
          ]
        },
        {title: 'Vacation', photos: []},
        {title: 'Friends', photos: []},
      ];
      vm.currentCollection = vm.collections[0];


      // home controller methods
      vm.viewCollection = viewCollection;
      vm.addCollection = addCollection;
      vm.showModal = showModal;

      function viewCollection(collectionId) {

        // set current collection
        vm.currentCollection = vm.collections[collectionId];
      }

      function showModal() {
        // show the modal
        $('#modal').removeClass('hide');

        // if click event occurs outside the modal, close the modal
        $('#modal').on('click', function(e){
          if (e.target === e.currentTarget) {
            $(this).addClass('hide');
          }
        });

        // if cancel is clicked, hide the modal
        $('.cancel').on('click', function(){
          $('#modal').addClass('hide');
        });
      }

      function addCollection(title) {
        var newCollection = new CollectionModel.constructor(title);
        vm.collections.push(newCollection);
        vm.currentCollection = newCollection;

        // reset form
        document.getElementsByClassName('collection-form')[0].reset();

        $('#modal').addClass('hide');
      }

    }

})();
