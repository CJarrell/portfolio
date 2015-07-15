

$('#masonry-container').masonry({
  isAnimated: !Modernizr.csstransitions,
  itemSelector: '.box',
  isFitWidth: true,
});
