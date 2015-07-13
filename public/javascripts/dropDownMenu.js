// Todd Motto's Flawless clickable drop-down navigation
// http://toddmotto.com/flawless-clickable-drop-down-navigation/

// // version 1:
// var dropDown = function(menuUl, menuJsUl, menuJs, clicker, menuJsUlThis) {
//   menuUl.toggleClass('no-js js');
//   menuJsUl.hide();
//   menuJs.click(function(e) {
//     menuJsUl.slideToggle(200);
//     clicker.toggleClass('active');
//     e.stopPropagation();
//   });
//   $(document).click(function() {
//     if (menuJsUl.is(':visible')) {
//       menuJsUlThis.slideUp();
//       clicker.removeClass('active');
//     }
//   });
// });

// // version 2:
// var dropDown = function(menuUl, menuJsUl, menuJs, clicker) {
//   $(menuUl).toggleClass('no-js js');
//   $(menuJsUl).hide();
//   $(menuJs).click(function(e) {
//     $(menuJsUl).slideToggle(200);
//     $(clicker).toggleClass('active');
//     e.stopPropagation();
//   });
//   $(document).click(function() {
//     if ($(menuJsUl).is(':visible')) {
//       $(menuJsUl, this).slideUp();
//       $(clicker).removeClass('active');
//     }
//   });
// });

$(function () {
  // version 1 call:
  // dropDown('$(\'.header-mobile > ul\')', '$(\'.header-mobile .js ul\')', '$(\'.header-mobile .js\')', '$(\'.clicker\')', '$(\'.header-mobile .js ul\', this)');

  // version 2 call:
  // dropDown('.header-mobile > ul', '.header-mobile .js ul', '.header-mobile .js', '.clicker');

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
  if ($(window).width() <= 450) {
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
  }
});
