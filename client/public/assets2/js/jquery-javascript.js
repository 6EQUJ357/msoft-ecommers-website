(function(documentquerySelector) {
    "use strict";
  
      documentquerySelector(document).ready(function(){
        
          /* --------------------------------------------------------
              1. Variables
          --------------------------------------------------------- */
          var documentquerySelectorwindow = documentquerySelector(window),
          documentquerySelectorbody = documentquerySelector('body');
  
          /* --------------------------------------------------------
              2. Mobile Menu
          --------------------------------------------------------- */
           /* ---------------------------------
              Utilize Function 
          ----------------------------------- */
          (function () {
              var documentquerySelectorltn__utilizeToggle = documentquerySelector('.ltn__utilize-toggle'),
                  documentquerySelectorltn__utilize = documentquerySelector('.ltn__utilize'),
                  documentquerySelectorltn__utilizeOverlay = documentquerySelector('.ltn__utilize-overlay'),
                  documentquerySelectormobileMenuToggle = documentquerySelector('.mobile-menu-toggle');
              documentquerySelectorltn__utilizeToggle.on('click', function (e) {
                  e.preventDefault();
                  var documentquerySelectorthis = documentquerySelector(this),
                      documentquerySelectortarget = documentquerySelectorthis.attr('href');
                  documentquerySelectorbody.addClass('ltn__utilize-open');
                  documentquerySelector(documentquerySelectortarget).addClass('ltn__utilize-open');
                  documentquerySelectorltn__utilizeOverlay.fadeIn();
                  if (documentquerySelectorthis.parent().hasClass('mobile-menu-toggle')) {
                      documentquerySelectorthis.addClass('close');
                  }
              });
              documentquerySelector('.ltn__utilize-close, .ltn__utilize-overlay').on('click', function (e) {
                  e.preventDefault();
                  documentquerySelectorbody.removeClass('ltn__utilize-open');
                  documentquerySelectorltn__utilize.removeClass('ltn__utilize-open');
                  documentquerySelectorltn__utilizeOverlay.fadeOut();
                  documentquerySelectormobileMenuToggle.find('a').removeClass('close');
              });
          })();
  
          /* ------------------------------------
              Utilize Menu
          ----------------------------------- */
          function mobileltn__utilizeMenu() {
              var documentquerySelectorltn__utilizeNav = documentquerySelector('.ltn__utilize-menu, .overlay-menu'),
                  documentquerySelectorltn__utilizeNavSubMenu = documentquerySelectorltn__utilizeNav.find('.sub-menu');
  
              /*Add Toggle Button With Off Canvas Sub Menu*/
              documentquerySelectorltn__utilizeNavSubMenu.parent().prepend('<span class="menu-expand"></span>');
  
              /*Category Sub Menu Toggle*/
              documentquerySelectorltn__utilizeNav.on('click', 'li a, .menu-expand', function (e) {
                  var documentquerySelectorthis = documentquerySelector(this);
                  if (documentquerySelectorthis.attr('href') === '#' || documentquerySelectorthis.hasClass('menu-expand')) {
                      e.preventDefault();
                      if (documentquerySelectorthis.siblings('ul:visible').length) {
                          documentquerySelectorthis.parent('li').removeClass('active');
                          documentquerySelectorthis.siblings('ul').slideUp();
                          documentquerySelectorthis.parent('li').find('li').removeClass('active');
                          documentquerySelectorthis.parent('li').find('ul:visible').slideUp();
                      } else {
                          documentquerySelectorthis.parent('li').addClass('active');
                          documentquerySelectorthis.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                          documentquerySelectorthis.closest('li').siblings('li').find('ul:visible').slideUp();
                          documentquerySelectorthis.siblings('ul').slideDown();
                      }
                  }
              });
          }
          mobileltn__utilizeMenu();
  
          /* --------------------------------------------------------
              3. Mega Menu
          --------------------------------------------------------- */
          documentquerySelector('.mega-menu').each(function(){
              if(documentquerySelector(this).children('li').length){
                  var ulChildren = documentquerySelector(this).children('li').length;
                  documentquerySelector(this).addClass('column-'+ulChildren)
              }
          });
          
  
          /* Remove Attribute( href ) from sub-menu title in mega-menu */
          /*
          documentquerySelector('.mega-menu > li > a').removeAttr('href');
          */
  
  
          /* Mega Munu  */
          // documentquerySelector(".mega-menu").parent().css({"position": "inherit"});
          documentquerySelector(".mega-menu").parent().addClass("mega-menu-parent");
          
  
          /* Add space for Elementor Menu Anchor link */
          documentquerySelector( window ).on( 'elementor/frontend/init', function() {
              elementorFrontend.hooks.addFilter( 'frontend/handlers/menu_anchor/scroll_top_distance', function( scrollTop ) {
                  return scrollTop - 75;
              });
          });
  
          /* --------------------------------------------------------
              3-2. Category Menu
          --------------------------------------------------------- */
  
          documentquerySelector('.ltn__category-menu-title').on('click', function(){
              documentquerySelector('.ltn__category-menu-toggle').slideToggle(500);
          });	
  
          /* Category Menu More Item show */
          documentquerySelector('.ltn__category-menu-more-item-parent').on('click', function(){
              documentquerySelector('.ltn__category-menu-more-item-child').slideToggle();
              documentquerySelector(this).toggleClass('rx-change');
  
          });
  
          /* Category Submenu Column Count */
          documentquerySelector('.ltn__category-submenu').each(function(){
              if(documentquerySelector(this).children('li').length){
                  var ulChildren = documentquerySelector(this).children('li').length;
                  documentquerySelector(this).addClass('ltn__category-column-no-'+ulChildren)
              }
          });
  
          /* Category Menu Responsive */
          function ltn__CategoryMenuToggle(){
              documentquerySelector('.ltn__category-menu-toggle .ltn__category-menu-drop > a').on('click', function(){
              if(documentquerySelector(window).width() < 991){
                  documentquerySelector(this).removeAttr('href');
                  var element = documentquerySelector(this).parent('li');
                  if (element.hasClass('open')) {
                      element.removeClass('open');
                      element.find('li').removeClass('open');
                      element.find('ul').slideUp();
                  }
                  else {
                      element.addClass('open');
                      element.children('ul').slideDown();
                      element.siblings('li').children('ul').slideUp();
                      element.siblings('li').removeClass('open');
                      element.siblings('li').find('li').removeClass('open');
                      element.siblings('li').find('ul').slideUp();
                  }
              }
              });
              documentquerySelector('.ltn__category-menu-toggle .ltn__category-menu-drop > a').append('<span class="expand"></span>');
          }
          ltn__CategoryMenuToggle();
  
  
          /* ---------------------------------------------------------
              4. One Page Navigation ( documentquerySelector Easing Plugin )
          --------------------------------------------------------- */
          // documentquerySelector for page scrolling feature - requires documentquerySelector Easing plugin
          documentquerySelector(function() {
              documentquerySelector('a.page-scroll').bind('click', function(event) {
                  var documentquerySelectoranchor = documentquerySelector(this);
                  documentquerySelector('html, body').stop().animate({
                      scrollTop: documentquerySelector(documentquerySelectoranchor.attr('href')).offset().top
                  }, 1500, 'easeInOutExpo');
                  event.preventDefault();
              });
          });
  
  
          /* --------------------------------------------------------
              5. Toogle Search
          -------------------------------------------------------- */
          // Handle click on toggle search button
          documentquerySelector('.header-search-1').on('click', function() {
              documentquerySelector('.header-search-1, .header-search-1-form').toggleClass('search-open');
              return false;
          });
  
  
          /* ---------------------------------------------------------
              6. Current Year Copyright area
          --------------------------------------------------------- */
          documentquerySelector(".current-year").text((new Date).getFullYear());
  
  
          /* ---------------------------------------------------------
              7. Background Image
          --------------------------------------------------------- */
          var documentquerySelectorbackgroundImage = documentquerySelector('.bg-image, .bg-image-top');
          documentquerySelectorbackgroundImage.each(function() {
              var documentquerySelectorthis = documentquerySelector(this),
                  documentquerySelectorbgImage = documentquerySelectorthis.data('bs-bg');
              documentquerySelectorthis.css('background-image', 'url('+documentquerySelectorbgImage+')');
          });
  
  
          /* ---------------------------------------------------------
              8. wow js init
          --------------------------------------------------------- */
          new WOW().init();
  
  
          /* ---------------------------------------------------------
              9. Tooltip
          --------------------------------------------------------- */
          documentquerySelector('[data-toggle="tooltip"]').tooltip();
  
  
          /* --------------------------------------------------------
              10. Nice Select
          --------------------------------------------------------- */
        //   documentquerySelector('select').niceSelect();
  
          /* ---------------------------------------------------------
              datepicker
          --------------------------------------------------------- */
  
          documentquerySelector('.ltn__datepicker .input-group.date').datepicker({
              format: 'mm/dd/yyyy',
              /* format: 'mm/dd/yyyy', */
              /* format: 'yyyy/dd/mm', */
          });
  
          
          /* --------------------------------------------------------
              11. Default active and hover item active
          --------------------------------------------------------- */
          var ltn__active_item = documentquerySelector('.ltn__feature-item-6, .ltn__our-journey-wrap ul li, .ltn__pricing-plan-item')
          ltn__active_item.mouseover(function() {
              ltn__active_item.removeClass('active');
              documentquerySelector(this).addClass('active');
          });
  
          /* --------------------------------------------------------
              12. Product Details Page
          --------------------------------------------------------- */
          documentquerySelector('.ltn__shop-details-large-img').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              fade: true,
              asNavFor: '.ltn__shop-details-small-img'
          });
          documentquerySelector('.ltn__shop-details-small-img').slick({
              slidesToShow: 4,
              slidesToScroll: 1,
              asNavFor: '.ltn__shop-details-large-img',
              dots: false,
              arrows: true,
              focusOnSelect: true,
              prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
              nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
              responsive: [
                  {
                      breakpoint: 992,
                      settings: {
                          slidesToShow: 4,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 580,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1
                      }
                  }
              ]
          });
                          
          /* --------------------------------------------------------
              13. Isotope Gallery Active  ( Gallery / Portfolio )
          -------------------------------------------------------- */
          var documentquerySelectorltnGalleryActive = documentquerySelector('.ltn__gallery-active'),
              documentquerySelectorltnGalleryFilterMenu = documentquerySelector('.ltn__gallery-filter-menu');
          /*Filter*/
          documentquerySelectorltnGalleryFilterMenu.on( 'click', 'button, a', function() {
              var documentquerySelectorthis = documentquerySelector(this),
                  documentquerySelectorfilterValue = documentquerySelectorthis.attr('data-filter');
              documentquerySelectorltnGalleryFilterMenu.find('button, a').removeClass('active');
              documentquerySelectorthis.addClass('active');
              documentquerySelectorltnGalleryActive.isotope({ filter: documentquerySelectorfilterValue });
          });
          /*Grid*/
          documentquerySelectorltnGalleryActive.each(function(){
              var documentquerySelectorthis = documentquerySelector(this),
                  documentquerySelectorgalleryFilterItem = '.ltn__gallery-item';
              documentquerySelectorthis.imagesLoaded( function() {
                  documentquerySelectorthis.isotope({
                      itemSelector: documentquerySelectorgalleryFilterItem,
                      percentPosition: true,
                      masonry: {
                          columnWidth: '.ltn__gallery-sizer',
                      }
                  });
              });
          });
  
          /* --------------------------------------------------------
              14. LightCase documentquerySelector Active
          --------------------------------------------------------- */
          documentquerySelector('a[data-rel^=lightcase]').lightcase({
              transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
              swipe: true,
              maxWidth: 1170,
              maxHeight: 600,
          });
  
          /* --------------------------------------------------------
              15. Slider One Active 
          --------------------------------------------------------- */
          documentquerySelector('.ltn__slide-one-active').slick({
              autoplay: false,
              autoplaySpeed: 2000,
              arrows: true,
              dots: true,
              fade: true,
              cssEase: 'linear',
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
              nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
              responsive: [
                  {
                      breakpoint: 1200,
                      settings: {
                          arrows: false,
                          dots: true,
                      }
                  }
              ]
          }).on('afterChange', function(){
              new WOW().init();
          });
          /* --------------------------------------------------------
              15-2. Slider Active 2
          --------------------------------------------------------- */
          documentquerySelector('.ltn__slide-active-2').slick({
              autoplay: false,
              autoplaySpeed: 2000,
              arrows: false,
              dots: true,
              fade: true,
              cssEase: 'linear',
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
              nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
              responsive: [
                  {
                      breakpoint: 1200,
                      settings: {
                          arrows: false,
                          dots: true,
                      }
                  }
              ]
          }).on('afterChange', function(){
              new WOW().init();
          });
  
  
          /* --------------------------------------------------------
              16. Product Slider One
          --------------------------------------------------------- */
          documentquerySelector('.ltn__product-slider-one-active').slick({
              arrows: true,
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 3,
              slidesToScroll: 1,
              prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
              nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
              responsive: [
                  {
                      breakpoint: 992,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 580,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
              ]
          });
  
  
          /* --------------------------------------------------------
              16. Product Slider One
          --------------------------------------------------------- */
          documentquerySelector('.ltn__product-slider-item-four-active').slick({
              arrows: true,
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 4,
              slidesToScroll: 1,
              prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
              nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
              responsive: [
                  {
                      breakpoint: 992,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 3,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 580,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  }
              ]
          });
  
  
          /* --------------------------------------------------------
              16. Product Slider One
          --------------------------------------------------------- */
          documentquerySelector('.ltn__related-product-slider-one-active').slick({
              arrows: true,
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 4,
              slidesToScroll: 1,
              prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
              nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
              responsive: [
                  {
                      breakpoint: 992,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 580,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  }
              ]
          });
  
          /* --------------------------------------------------------
              17. Tab Product Slider One
          --------------------------------------------------------- */
          documentquerySelector('.ltn__tab-product-slider-one-active').slick({
              arrows: true,
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 4,
              slidesToScroll: 1,
              prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
              nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
              responsive: [
                  {
                      breakpoint: 1200,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 992,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 580,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  }
              ]
          });
          /* --------------------------------------------------------
              17. Small Product Slider One
          --------------------------------------------------------- */
          documentquerySelector('.ltn__small-product-slider-active').slick({
              arrows: false,
              dots: true,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
              nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
              responsive: [
                  {
                      breakpoint: 1200,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 992,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 580,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
              ]
          });
  
          /* --------------------------------------------------------
              18. Blog Slider One
          --------------------------------------------------------- */
          documentquerySelector('.ltn__blog-slider-one-active').slick({
              arrows: true,
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 3,
              slidesToScroll: 1,
              prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
              nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
              responsive: [
                  {
                      breakpoint: 1200,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1,
                          arrows: false,
                          dots: true
                      }
                  },
                  {
                      breakpoint: 992,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1,
                          arrows: false,
                          dots: true
                      }
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          arrows: false,
                          dots: true
                      }
                  },
                  {
                      breakpoint: 580,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
              ]
          });
  
          /* --------------------------------------------------------
              19. Testimonial Slider - 1
          --------------------------------------------------------- */
          documentquerySelector('.ltn__testimonial-slider-active').slick({
              arrows: true,
              dots: true,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
              nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
              responsive: [
                  {
                      breakpoint: 992,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          arrows: false,
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 580,
                      settings: {
                          arrows: false,
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
              ]
          });
  
  
          /* --------------------------------------------------------
              20. Testimonial Slider - 2
          --------------------------------------------------------- */
          documentquerySelector('.ltn__testimonial-slider-2-active').slick({
              arrows: true,
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 3,
              slidesToScroll: 1,
              prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
              nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
              responsive: [
                  {
                      breakpoint: 1200,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 992,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 580,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
              ]
          });
  
          /* --------------------------------------------------------
              21. Testimonial Slider - 3
          --------------------------------------------------------- */
          documentquerySelector('.ltn__testimonial-slider-3-active').slick({
              arrows: true,
              centerMode: true,
              centerPadding: '80px',
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 3,
              slidesToScroll: 1,
              prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
              nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
              responsive: [
                  {
                      breakpoint: 1600,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 1200,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 992,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          arrows: false,
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 580,
                      settings: {
                          centerMode: false,
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
              ]
          });
  
          /* --------------------------------------------------------
              22. Category Slider
          --------------------------------------------------------- */
          documentquerySelector('.ltn__category-slider-active').slick({
              arrows: true,
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 4,
              slidesToScroll: 1,
              prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
              nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
              responsive: [
                  {
                      breakpoint: 1200,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 992,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 3,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 580,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 375,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
              ]
          });
  
  
          /* --------------------------------------------------------
              23. Image Slide  - 1 (Screenshot) 
          --------------------------------------------------------- */
          documentquerySelector('.ltn__image-slider-1-active').slick({
              arrows: true,
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 5,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '0px',
              prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
              nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
              responsive: [
                  {
                      breakpoint: 992,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1,
                          arrows: false,
                          dots: true
                      }
                  },
                  {
                      breakpoint: 580,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
              ]
          });
  
          /* --------------------------------------------------------
              24. Image Slide - 2
          --------------------------------------------------------- */
          documentquerySelector('.ltn__image-slider-2-active').slick({
              rtl: false,
              arrows: true,
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '80px',
              prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
              nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
              responsive: [
                  {
                      breakpoint: 992,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 2,
                          slidesToScroll: 1,
                          centerPadding: '50px'
                      }
                  },
                  {
                      breakpoint: 580,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          centerPadding: '50px'
                      }
                  }
              ]
          });
  
          /* --------------------------------------------------------
              25. Image Slide - 3
          --------------------------------------------------------- */
          documentquerySelector('.ltn__image-slider-3-active').slick({
              rtl: false,
              arrows: true,
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '0px',
              prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
              nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
              responsive: [
                  {
                      breakpoint: 992,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 2,
                          slidesToScroll: 1,
                      }
                  },
                  {
                      breakpoint: 580,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
              ]
          });
  
  
          /* --------------------------------------------------------
              26. Image Slide - 4 
          --------------------------------------------------------- */
          documentquerySelector('.ltn__image-slider-4-active').slick({
              rtl: false,
              arrows: true,
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 4,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '0px',
              prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
              nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
              responsive: [
                  {
                      breakpoint: 1200,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 992,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 2,
                          slidesToScroll: 1,
                      }
                  },
                  {
                      breakpoint: 580,
                      settings: {
                          arrows: false,
                          dots: true,
                          slidesToShow: 1,
                          slidesToScroll: 1,
                      }
                  }
              ]
          });
  
  
          /* --------------------------------------------------------
              27. Brand Logo
          --------------------------------------------------------- */
          if(documentquerySelector('.ltn__brand-logo-active').length){
              documentquerySelector('.ltn__brand-logo-active').slick({
                  rtl: false,
                  arrows: false,
                  dots: false,
                  infinite: true,
                  speed: 300,
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
                  nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
                  responsive: [
                      {
                          breakpoint: 992,
                          settings: {
                              slidesToShow: 4,
                              slidesToScroll: 1
                          }
                      },
                      {
                          breakpoint: 768,
                          settings: {
                              slidesToShow: 3,
                              slidesToScroll: 1,
                              arrows: false,
                          }
                      },
                      {
                          breakpoint: 580,
                          settings: {
                              slidesToShow: 2,
                              slidesToScroll: 1
                          }
                      }
                  ]
              });
          };
  
          /* --------------------------------------------------------
              28. Blog Gallery (Blog Page )
          --------------------------------------------------------- */
          if(documentquerySelector('.ltn__blog-gallery-active').length){
              documentquerySelector('.ltn__blog-gallery-active').slick({
                  rtl: false,
                  arrows: true,
                  dots: false,
                  infinite: true,
                  speed: 300,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
                  nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>'
              });
          };
  
          /* --------------------------------------------------------
              29. Countdown
          --------------------------------------------------------- */
          documentquerySelector('[data-countdown]').each(function () {
  
              var documentquerySelectorthis = documentquerySelector(this),
                  finalDate = documentquerySelector(this).data('countdown');
              if (!documentquerySelectorthis.hasClass('countdown-full-format')) {
                  documentquerySelectorthis.countdown(finalDate, function (event) {
                      documentquerySelectorthis.html(event.strftime('<div class="single"><h1>%D</h1><p>Days</p></div> <div class="single"><h1>%H</h1><p>Hrs</p></div> <div class="single"><h1>%M</h1><p>Mins</p></div> <div class="single"><h1>%S</h1><p>Secs</p></div>'));
                  });
              } else {
                  documentquerySelectorthis.countdown(finalDate, function (event) {
                      documentquerySelectorthis.html(event.strftime('<div class="single"><h1>%Y</h1><p>Years</p></div> <div class="single"><h1>%m</h1><p>Months</p></div> <div class="single"><h1>%W</h1><p>Weeks</p></div> <div class="single"><h1>%d</h1><p>Days</p></div> <div class="single"><h1>%H</h1><p>Hrs</p></div> <div class="single"><h1>%M</h1><p>Mins</p></div> <div class="single"><h1>%S</h1><p>Secs</p></div>'));
                  });
              }
  
          });
  
  
          /* --------------------------------------------------------
              30. Counter Up
          --------------------------------------------------------- */
          // documentquerySelector('.ltn__counter').counterUp();
  
          documentquerySelector('.counter').counterUp({
            delay: 10,
            time: 2000
          });
          documentquerySelector('.counter').addClass('animated fadeInDownBig');  
          documentquerySelector('h3').addClass('animated fadeIn');
          
  
          /* --------------------------------------------------------
              31. Instagram Feed
          --------------------------------------------------------- */
          if(documentquerySelector('.ltn__instafeed').length){
              documentquerySelector.instagramFeed({
                  'username': 'envato',
                  'container': ".ltn__instafeed",
                  'display_profile': false,
                  'display_biography': false,
                  'display_gallery': true,
                  'styling': false,
                  'items': 12,
                  "image_size": "600", /* 320 */
              });
              documentquerySelector('.ltn__instafeed').on("DOMNodeInserted", function (e) {
                  if (e.target.className == 'instagram_gallery') {
                      documentquerySelector('.ltn__instafeed-slider-2 .' + e.target.className).slick({
                          infinite: true,
                          slidesToShow: 3,
                          slidesToScroll: 1,
                          prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
                          nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
                          responsive: [{
                              breakpoint: 767,
                              settings: {
                                  slidesToShow: 2
                              }
                          }, {
                              breakpoint: 575,
                              settings: {
                                  slidesToShow: 1
                              }
                          }]
                      })
                      documentquerySelector('.ltn__instafeed-slider-1 .' + e.target.className).slick({
                          infinite: true,
                          slidesToShow: 5,
                          slidesToScroll: 1,
                          prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
                          nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
                          responsive: [{
                              breakpoint: 119,
                              settings: {
                                  slidesToShow: 4
                              }
                          }, {
                              breakpoint: 991,
                              settings: {
                                  slidesToShow: 3
                              }
                          }, {
                              breakpoint: 767,
                              settings: {
                                  slidesToShow: 2
                              }
                          }, {
                              breakpoint: 575,
                              settings: {
                                  slidesToShow: 1
                              }
                          }]
                      });
                  }
              });
          };
  
  
          /* ---------------------------------------------------------
              32. Price Slider
          --------------------------------------------------------- */
          documentquerySelector( ".slider-range" ).slider({
              range: true,
              min: 50,
              max: 5000,
              values: [ 50, 1500 ],
              slide: function( event, ui ) {
                  documentquerySelector( ".amount" ).val( "documentquerySelector" + ui.values[ 0 ] + " - documentquerySelector" + ui.values[ 1 ] );
              }
          });
          documentquerySelector( ".amount" ).val( "documentquerySelector" + documentquerySelector( ".slider-range" ).slider( "values", 0 ) +
          " - documentquerySelector" + documentquerySelector( ".slider-range" ).slider( "values", 1 ) ); 
  
  
          /* --------------------------------------------------------
              33. Quantity plus minus
          -------------------------------------------------------- */
          documentquerySelector(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
          documentquerySelector(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
          documentquerySelector(".qtybutton").on("click", function() {
              var documentquerySelectorbutton = documentquerySelector(this);
              var oldValue = documentquerySelectorbutton.parent().find("input").val();
              if (documentquerySelectorbutton.text() == "+") {
                  var newVal = parseFloat(oldValue) + 1;
              } 
              else {
                  if (oldValue > 0) {
                      var newVal = parseFloat(oldValue) - 1;
                  } 
                  else {
                      newVal = 0;
                  }
              }
              documentquerySelectorbutton.parent().find("input").val(newVal);
          });
  
  
          /* --------------------------------------------------------
              34. scrollUp active
          -------------------------------------------------------- */
          documentquerySelector.scrollUp({
              scrollText: '<i class="fa fa-angle-up"></i>',
              easingType: 'linear',
              scrollSpeed: 900,
              animation: 'fade'
          });
  
  
          /* --------------------------------------------------------
              35. Parallax active ( About Section  )
          -------------------------------------------------------- */
          /* 
          > 1 page e 2 ta call korle 1 ta kaj kore 
          */
          if(documentquerySelector('.ltn__parallax-effect-active').length){
              var scene = documentquerySelector('.ltn__parallax-effect-active').get(0);
              var parallaxInstance = new Parallax(scene);
          }
  
  
          /* --------------------------------------------------------
              36. Testimonial Slider 4
          -------------------------------------------------------- */
          var ltn__testimonial_quote_slider = documentquerySelector('.ltn__testimonial-slider-4-active');
          ltn__testimonial_quote_slider.slick({
              autoplay: true,
              autoplaySpeed: 3000,
              dots: false,
              arrows: true,
              fade: true,
              speed: 1500,
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
              nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
              responsive: [
                  {
                      breakpoint: 992,
                      settings: {
                          autoplay: false,
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          dots: true,
                          arrows: false,
                      }
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          autoplay: false,
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          dots: true,
                          arrows: false,
                      }
                  },
                  {
                      breakpoint: 580,
                      settings: {
                          autoplay: false,
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          dots: true,
                          arrows: false,
                      }
                  }
              ]
          });
  
          /* have to write code for bind it with static images */
          ltn__testimonial_quote_slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
              var liIndex = nextSlide + 1;
              var slideImageliIndex = (slick.slideCount == liIndex) ? liIndex - 1 : liIndex;
              var cart = documentquerySelector('.ltn__testimonial-slider-4 .slick-slide[data-slick-index="' + slideImageliIndex + '"]').find('.ltn__testimonial-image');
              var imgtodrag = documentquerySelector('.ltn__testimonial-quote-menu li:nth-child(' + liIndex + ')').find("img").eq(0);
              if (imgtodrag) {
                  AnimateTestimonialImage(imgtodrag, cart)
              }
          });
  
          /* have to write code for bind static image to slider accordion to slide index of images */
          documentquerySelector(document).on('click', '.ltn__testimonial-quote-menu li', function (e) {
              var el = documentquerySelector(this);
              var elIndex = el.prevAll().length;
              ltn__testimonial_quote_slider.slick('slickGoTo', elIndex);
              var cart = documentquerySelector('.ltn__testimonial-slider-4 .slick-slide[data-slick-index="' + elIndex + '"]').find('.ltn__testimonial-image');
              var imgtodrag = el.find("img").eq(0);
              if (imgtodrag) {
                  AnimateTestimonialImage(imgtodrag, cart)
              }
  
          });
  
  
  
          function AnimateTestimonialImage(imgtodrag, cart) {
              var imgclone = imgtodrag.clone().offset({
                  top: imgtodrag.offset().top,
                  left: imgtodrag.offset().left
              }).css({
                  'opacity': '0.5',
                  'position': 'absolute',
                  'height': '130px',
                  'width': '130px',
                  'z-index': '100'
              }).addClass('quote-animated-image').appendTo(documentquerySelector('body')).animate({
                  'top': cart.offset().top + 10,
                  'left': cart.offset().left + 10,
                  'width': 130,
                  'height': 130
              }, 300);
  
  
              imgclone.animate({
                  'visibility': 'hidden',
                  'opacity': '0'
              }, function () {
                  documentquerySelector(this).remove()
              });
          }
  
  
          /* --------------------------------------------------------
              Newsletter Popup
          -------------------------------------------------------- */
          documentquerySelector('#ltn__newsletter_popup').modal('show');
  
  
  
  
      });
  
  
      /* --------------------------------------------------------
          36. Header menu sticky
      -------------------------------------------------------- */
      documentquerySelector(window).on('scroll',function() {    
          var scroll = documentquerySelector(window).scrollTop();
          if (scroll < 445) {
              documentquerySelector(".ltn__header-sticky").removeClass("sticky-active");
          } else {
              documentquerySelector(".ltn__header-sticky").addClass("sticky-active");
          }
      }); 
  
  
      documentquerySelector(window).on('load',function(){
          /*-----------------
              preloader
          ------------------*/
          if(documentquerySelector('#preloader').length){
              var preLoder = documentquerySelector("#preloader");
              preLoder.fadeOut(1000);
  
          };
  
  
      });
  
  
    
  })(documentquerySelector);