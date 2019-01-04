jQuery(function($) {'use strict';

  // Navigation Scroll
  $(window).scroll(function(event) {
    Scroll();
  });

  $('.navbar-collapse ul li a').on('click', function() {
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
    return false;
  });

  // User define function
  function Scroll() {
    var contentTop      =   [];
    var contentBottom   =   [];
    var winTop      =   $(window).scrollTop();
    var rangeTop    =   200;
    var rangeBottom =   500;
    $('.navbar-collapse').find('.scroll a').each(function(){
      contentTop.push( $( $(this).attr('href') ).offset().top);
      contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
    })
    $.each( contentTop, function(i){
      if ( winTop > contentTop[i] - rangeTop ){
        $('.navbar-collapse li.scroll')
        .removeClass('active')
        .eq(i).addClass('active');
      }
    })
  };

  //Initiat WOW JS
  new WOW().init();
  //smoothScroll
  smoothScroll.init();

  // portfolio filter
  $(window).load(function(){'use strict';
    var $portfolio_selectors = $('.portfolio-filter >li>a');
    var $portfolio = $('.portfolio-items');
    $portfolio.isotope({
      itemSelector : '.portfolio-item',
      layoutMode : 'fitRows'
    });

    $portfolio_selectors.on('click', function(){
      $portfolio_selectors.removeClass('active');
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
      $portfolio.isotope({ filter: selector });
      $('.portfolio-info').removeClass('wow');
      $('.portfolio-info').removeClass('slideInUp');
      $('.portfolio-info').removeClass('animated');
      $('.portfolio-info').each(function() {
        $(this).attr('style', null);
      });
      return false;
    });
  });

});

$('#top').on('click', function() {
  $('html body').animate({ scrollTop: 0 }, 1000);
  return false;
});

$(".portfolio-item-inner").hover(function (e) {
  e.stopPropagation();
  var info = $(this).find('.portfolio-info');
  info.stop().animate({
    "margin-top" : '-' + info.outerHeight() + 'px'
  }, 250);

  return false;
}, function (e){
    e.stopPropagation();
    var info = $(this).find('.portfolio-info');
    info.stop().animate({
      "margin-top": '-28px'
    }, 250);

    return false;
});

$(".portfolio-item-inner").click(function() {
  $('#portfolio-modal').modal('toggle');

  var title = $(this).find('h3').html();
  var content = $(this).find('#description').html();

  $('#modal-title').html(title);
  $('#modal-content').html(content);
});
