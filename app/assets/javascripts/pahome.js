//def owl function
function owlCarousel () {
    $("#intro").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
  });
};


//def #intro full screen
function fullScreenContainer() {
    var t = $(window).width() + "px", e = $(window).height() + "px";
    $("#intro, #intro .item, #intro-video").css({
        width: t,
        height: e
    }), $(window).resize(function() {
        var t = $(window).width() + "px", e = $(window).height() + "px";
        $("#intro, #intro .item, #intro-video, #intro-video .item").css({
            width: t,
            height: e
        })
    })
};

//preloader fade out
$(window).load(function(){

  $(".preloader").fadeOut(1.5e3);
  //init();
});


//intro owl carousel
$(document).ready(function() {
  // set owl carousel
  owlCarousel();

  //let intro full screen
  fullScreenContainer();
 
});





