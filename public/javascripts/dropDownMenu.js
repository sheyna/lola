// $(function(){
//   $('li.sub-subhead').hide();
// });

// $('li#li-subhead').on('click', function(){
//   $('li.sub-subhead').show();
//   $('li#li-subhead').on('click', function(){
//     $('li.sub-subhead').hide();
//   });
// });

// $('li#li-subhead').on('click', function(){
//   if ($('li.sub-subhead').hide();) {
//     $('li.sub-subhead').show();
//   } else {
//     $('li.sub-subhead').hide();
//   }
// });

// Todd Motto's Flawless clickable drop-down navigation
// http://toddmotto.com/flawless-clickable-drop-down-navigation/

$(function () {
  $('.header-mobile > ul').toggleClass('no-js js');
  $('.header-mobile .js ul').hide();
  $('.header-mobile .js').click(function(e) {
    $('.header-mobile .js ul').slideToggle(200);
    $('.clicker').toggleClass('active');
    e.stopPropagation();
  });
  $(document).click(function() {
    if ($('.header-mobile .js ul').is(':visible')) {
      $('.header-mobile .js ul', this).slideUp();
      $('.clicker').removeClass('active');
    }
  });
});

$(function () {
  $('.drop-down-menu > ul').toggleClass('no-js js');
  $('.drop-down-menu .js ul').hide();
  $('.drop-down-menu .js').click(function(e) {
    $('.drop-down-menu .js ul').slideToggle(200);
    $('.drop-down-menu--clicker').toggleClass('active');
    e.stopPropagation();
  });
  $(document).click(function() {
    if ($('.drop-down-menu .js ul').is(':visible')) {
      $('.drop-down-menu .js ul', this).slideUp();
      $('.drop-down-menu--clicker').removeClass('active');
    }
  });
});
