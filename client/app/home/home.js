(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('Home', Home);

    function Home(CollectionModel, PhotoLibraryModel, $state) {

      // set $scope to vm (view model)
      var vm = this;

      // photo library
      vm.allPhotos = new PhotoLibraryModel.constructor().photoLibrary;

      // array of all photo collections
      vm.collections = [
        {id: 0, title: 'All Photos', photos: vm.allPhotos}
      ];

      // initialize current collection to 'All Photos'
      vm.currentCollection = vm.collections[0];
      vm.collectionOnly = false;
      vm.createCollection = false;
      vm.collectionsCount = 1;
      vm.states = ['co-modal', 'p-modal', 'dc-modal'];
      vm.currentPhotoIndex;
      vm.currentPhotoId;

      // Home controller methods
      vm.viewCollection = viewCollection;
      vm.addCollection = addCollection;
      vm.removeCollection = removeCollection;
      vm.addPhoto = addPhoto;
      vm.removePhoto = removePhoto;
      vm.showModal = showModal;
      vm.closeModal = closeModal;
      vm.collectionModal = collectionModal;
      vm.photoModal = photoModal;

      ////////////////////////////////////////

      function viewCollection(collectionId) {
        // set the current collection
        vm.currentCollection = vm.collections[collectionId];
      }

      function addCollection(title, collectionOnly) {

        // create a new collection, assign the collection an id
        var newCollection = new CollectionModel.constructor(title);
        newCollection.id = vm.collectionsCount++;

        // add the new collection to the list of collections
        vm.collections.push(newCollection);

        // reset form and create collection mode
        vm.collectionTitle = '';
        vm.createCollection = false;

        // close the modal if in collectionOnly creation mode (not on the fly)
        if (vm.collectionOnly) {
          vm.closeModal('co-modal');
        }
      }

      function removeCollection(collectionId) {

        // get the index of the collection in the collections array
        var collectionIndex = (function(){
          for (var i = 0; i < vm.collections.length; i++) {
            var currentCollection = vm.collections[i];
            if (currentCollection.id === collectionId) {
              return i;
            }
          }
        })();

        // remove the collection from the array and set the current collection to All Photos
        vm.collections.splice(collectionIndex, 1);
        vm.currentCollection = vm.collections[0];

        // close the modal
        vm.closeModal('dc-modal');

      }

      function addPhoto(photoId) {

        // get all collection ids from the checkboxes
        var checkedValues = $('input:checkbox:checked').map(function() {
          return parseInt(this.attributes['ng-true-value'].value, 10);
        }).get();

        // add the photo to each checked collection if it doesn't already exist in the collection
        checkedValues.forEach(function(collectionId){
          var photoInCollection = false;
          var collectionIndex;

          // get the index of the collection with the associated collectionId
          for (var i = 0; i < vm.collections.length; i++) {
            var currentCollection = vm.collections[i];
            if (collectionId === currentCollection.id) {
              collectionIndex = i;
            }
          }

          // check to see if the photo exists in the current collection
          vm.collections[collectionIndex].photos.forEach(function(photo){
            if (photo.id === photoId) {
              photoInCollection = true;
            }
          });
            
          // if photo does not exist in collection, add it to the collection
          if (!photoInCollection) {
            var currentPhoto;

            // set current photo
            vm.allPhotos.forEach(function(photo){
              if (photoId === photo.id) {
                currentPhoto = photo;
              }
            });

            // add the current photo to the current collection
            vm.collections[collectionIndex].photos.push(currentPhoto);

            // go to the current collection
            vm.currentCollection = vm.collections[collectionIndex];
            $state.go('home.collection', {collectionName: vm.currentCollection.title.split(' ').join('')});
          }
        });

        // reset photo form
        document.getElementsByClassName('photo-form')[0].reset();

        // close the modal
        vm.closeModal('p-modal');

      }

      function removePhoto(photoId) {

        // get all photos from current collection
        var collectionPhotos = vm.collections[vm.collections.indexOf(vm.currentCollection)].photos;

        // remove the photo from the current collection
        for (var i = 0; i < collectionPhotos.length; i++) {
          var currentPhoto = collectionPhotos[i];
          if (currentPhoto.id === photoId) {
            collectionPhotos.splice(i, 1);
          }
        }
      }

      function showModal(state) {

        // hide the modals that are not active
        vm.states.forEach(function(item){
          if (item !== state) {
            $('.' + item).addClass('hide');
          }
        });

        // show the active modal
        $('.modal').addClass('active');
        $('.' + state).addClass('modal-content');
        $('.' + state).addClass('show-opaque');

        // if click event occurs outside the modal, close the active modal
        $('.modal-overlay').on('click', function(e){
          if (e.target === e.currentTarget) {
            vm.closeModal(state);
          }
        });
      }

      function closeModal(state) {

        // reset the collection title in case it had been previously filled in but not submitted
        vm.collectionTitle = '';
        vm.createCollection = false;
        vm.collectionOnly = false;

        // hide the active modal
        $('.modal').removeClass('active');
        $('.' + state).removeClass('show-opaque');
        
        // reset each modal to deactive state
        setTimeout(function(){
          $('.' + state).removeClass('modal-content');
          vm.states.forEach(function(item){
            if (item !== state) {
              $('.' + item).removeClass('hide');
            }
          });
        }, 300);

      }

      // show the collection modal
      function collectionModal() {
        vm.collectionOnly = true;
        vm.showModal('co-modal');
      }

      // show the photo modal
      function photoModal(photoId) {
        vm.currentPhotoId = photoId;

        // set the index in the current collection's photos array
        for (var i = 0; i < vm.currentCollection.photos.length; i++) {
          var currentPhoto = vm.currentCollection.photos[i];
          if (currentPhoto.id === photoId) {
            vm.currentPhotoIndex = i;
            break;
          }
        }

        // show the photo modal
        vm.showModal('p-modal');
      }

    }

})();
