(function() {
  'use strict';
  
  angular
    .module('app.photoLibrary', [])
    .factory('PhotoLibraryModel', PhotoLibraryModel);

    function PhotoLibraryModel() {
      // set path for photos
      var photoPath = '/content/img/';
      
      var photoLibraryModel = {
        constructor: constructor
      }

      return photoLibraryModel;

      /////////////////////////////////////

      // photo library constructor
      function constructor() {
        this.photoLibrary = [
          {id: 0, title: 'Albert Einstein', src: photoPath + 'albert-einstein.jpg'},{id: 1, title: 'Sound Waves', src: photoPath +  'sound-waves.jpg'},
          {id: 2, title: 'The Beatles', src: photoPath + 'beatles.jpg'}, {id: 3, title: 'Bermuda', src: photoPath + 'bermuda.jpg'}, 
          {id: 4, title: 'The Burger King', src: photoPath + 'burger-king.jpg'}, {id: 5, title: 'A Cat', src: photoPath + 'cat.jpg'},
          {id: 6, title: 'M.C. Escher', src: photoPath + 'escher.gif'}, {id: 7, title: 'Garden Life', src: photoPath + 'garden.jpg'},
          {id: 8, title: 'Gary Busey', src: photoPath + 'gary-busey.jpg'}, {id: 9, title: 'Rug Dog', src: photoPath + 'huge-dog.jpg'},
          {id: 10, title: 'Jaguar Life', src: photoPath + 'jaguar.jpg'}, {id: 11, title: 'A Mac Original', src: photoPath + 'mac.jpg'},
          {id: 12, title: 'They put a Man on the Moon', src: photoPath + 'manmoon.jpg'}, {id: 13, title: 'Norwegian Fjords', src: photoPath + 'norway.jpg'},
          {id: 14, title: 'Pizza', src: photoPath + 'pizza.jpg'}, {id: 15, title: 'Russia', src: photoPath + 'russia.jpg'},
          {id: 16, title: 'Snowboarding', src: photoPath + 'snowboarding.jpg'}, {id: 17, title: 'Lost in Space', src: photoPath + 'space.jpg'},
          {id: 18, title: 'Spanish Dreams', src: photoPath + 'spain.jpg'}, {id: 19, title: 'Surf life', src: photoPath + 'surf.jpg'}
        ];
      }
    }

})();
