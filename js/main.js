jQuery(document).ready(function ($) {
     // Toggle nav menu on button click
     var $root = $("html, body"),
          menu_toggle = $(".mobile-menu-toggle-btn");

     menu_toggle.on("click", function () {
          var $this = $(this);

          // $this.toggleClass("close");
          $("#sidebar-menu, .nav-wrapper, .main-terms").toggleClass("show");
          // Darken background 
          $('.content-wrap').toggleClass("darken-background");
          $('header').toggleClass("darken-header");
     });

     // Toggle nav menu on item click and smooth scrolling
     $(".sidebar-nav-link a").on("click", function () {
          var $this = $(this),
               href = $this.attr("href");

          // Toggle nav menu
          menu_toggle.removeClass("close");
          $this.parents(".nav-wrapper, .main-terms, #sidebar-menu").removeClass("show");

          // Remove darkened background 
          $('.content-wrap').removeClass("darken-background");
          $('header').removeClass("darken-header");

          // Smooth scrolling 

          $root.animate(
               {
                    scrollTop: $(href).offset().top - 100
               },
               500,
               function () {
                    window.location.hash = href;
               }
          );

          return false;
     })


     // BACK TO TOP BUTTON
     var goTopBtn = document.querySelector('.back-to-top');

     'use strict';
     function trackScroll() {
          var scrolled = window.pageYOffset;
          var coords = document.documentElement.clientHeight - 500;

          if (scrolled > coords) {
               goTopBtn.classList.add('back-to-top-show');
          }
          if (scrolled < coords) {
               goTopBtn.classList.remove('back-to-top-show');
          }
     }

     function scrollin() {
          $('html, body').animate({ scrollTop: 0 }, '1000');
     }

     function backToTop() {
          if (window.pageYOffset > 0) {
               window.scrollBy(100, -80);
               setTimeout(scrollin, 0);
          }
     }

     window.addEventListener('scroll', trackScroll);
     goTopBtn.addEventListener('click', backToTop);
     /* end begin Back to Top button  */



     // Hide Nav Menu on scroll down
     $(window).scroll(
          {
               previousTop: 0
          },
          function () {
               var currentTop = $(window).scrollTop();
               if (currentTop < this.previousTop) {
                    $(".sidebar em").text("Up"); /* optional for demo */
                    $(".nav-wrapper").show();
               } else {
                    $(".sidebar em").text("Down");
                    $(".nav-wrapper").hide();
               }
               this.previousTop = currentTop;
          });
});