# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


$ ->
  $('#masonry-container').imagesLoaded ->
    $('#masonry-container').masonry
      itemSelector: '.box'
      columnWidth: (containerWidth) ->
        containerWidth / 5
      isAnimated: true
      animationOptions: ->
        duration: 150,
        easing: 'ease',
        queue: false
      
      isOriginLeft: false
      isFitWidth: true
      isRTL: false