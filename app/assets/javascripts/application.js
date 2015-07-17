// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require masonry/jquery.masonry
//= require turbolinks
//= require bxslider
//= require bootstrap-tabcollapse
//= require_tree .
//= require bootstrap-sprockets

// function animateHSP(width) {
//   console.log("hey");
//   $('.home-screen-panels').css({

//     //for firefox
//     "-moz-animation-name":"tab-rotate",
//     "-moz-animation-duration":"2s",
//     "-moz-animation-iteration-count":"1",
//     "-moz-animation-fill-mode":"forwards",

//     //for safari & chrome
//     "-webkit-animation-name":"tab-rotate",
//     "-webkit-animation-duration":"2s",
//     "-webkit-animation-iteration-count":"1",
//     "-webkit-animation-fill-mode" : "forwards",

//   });
// }

var detectViewPort = function(viewPortWidth){
  var viewPortWidth = $(window).width();
  return viewPortWidth;
  
};


$(function(){
  detectViewPort();
});

$(window).resize(function () {
  var screenSize = detectViewPort();
  console.log(screenSize);
  function animatePanel(screenSize){
    if(screenSize > 767){
      $(window).on('resize', function(){
        $('#myTab').tabCollapse({
          tabsClass: 'hidden-xs',
          accordionClass: 'visible-xs'
        });
        $('.home-screen-panels').css({

          //for firefox
          "-moz-animation-name":"tab-rotate",
          "-moz-animation-duration":"2s",
          "-moz-animation-iteration-count":"1",
          "-moz-animation-fill-mode":"forwards",

          //for safari & chrome
          "-webkit-animation-name":"tab-rotate",
          "-webkit-animation-duration":"2s",
          "-webkit-animation-iteration-count":"1",
          "-webkit-animation-fill-mode" : "forwards",

        });
        
      });
    } else if(screenSize < 767){
      $(window).on('resize', function(){
        $('#myTab').tabCollapse({
          tabsClass: 'hidden-xs',
          accordionClass: 'visible-xs'
        });
        $('.home-screen-panels').css({

          //for firefox
          "-moz-animation-name":"tab-rotate-2",
          "-moz-animation-duration":"2s",
          "-moz-animation-iteration-count":"1",
          "-moz-animation-fill-mode":"backwards",

          //for safari & chrome
          "-webkit-animation-name":"tab-rotate-2",
          "-webkit-animation-duration":"2s",
          "-webkit-animation-iteration-count":"1",
          "-webkit-animation-fill-mode" : "backwards",

        });
        
      });
    } 
  };
  var screenSize = detectViewPort();
  animatePanel(screenSize);
  detectViewPort();
});


$(document).ready(function(){
  $('.bxslider').bxSlider();
});

$(document).on('page:load', function(){
  $('.bxslider').bxSlider();
});


$(document).ready(function(){
  $('#myTab').tabCollapse({
    tabsClass: 'hidden-xs',
    accordionClass: 'visible-xs'
  });
});


$(document).on('page:load', function(){
  $('#myTab').tabCollapse({
    tabsClass: 'hidden-xs',
    accordionClass: 'visible-xs'
  });
});

$(document).on('page:load', function(){
  var time = 200;
  $(".box").each( function(element){
    var box = $(this)
    box.hide();
    setTimeout(function(){
      box.show();
      box.addClass("bigEntrance");
    }, time)
    time += 100;
  });
});



