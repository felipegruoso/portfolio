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

  $('#tohash').on('click', function(){
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
    return false;
  });

  // accordian
  $('.accordion-toggle').on('click', function(){
    $(this).closest('.panel-group').children().each(function(){
    $(this).find('>.panel-heading').removeClass('active');
     });

    $(this).closest('.panel-heading').toggleClass('active');
  });

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
      return false;
    });
  });

  //Pretty Photo
  $("a[rel^='prettyPhoto']").prettyPhoto({
    social_tools: false
  });

});

$('#top').on('click', function() {
  $('html body').animate({ scrollTop: 0 }, 1000);
  return false;
});


function sendMail()
{
  var link = "mailto:felipe.gruoso@gmail.com"+
             "?&subject=" + escape("This is subject")+
             "&body=" + escape("This is body");
  window.location.href = link;
}
