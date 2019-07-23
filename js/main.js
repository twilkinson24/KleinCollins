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

     if (!$("#klein-collins")[0]) {
          console.log('yes');
          (function () {
               var _ = function (id) {
                    return document.getElementById(id);
               }
               // Setup all the variables needed
               var day = _('timer-days'),
                    hour = _('timer-hours'),
                    min = _('timer-minutes'),
                    sec = _('timer-seconds'),
                    // You can have as many date/times as you want in an array
                    targets = [
                         new Date('2019-09-25T16:30:00Z').getTime()],
                    i = 0;

               setInterval(function () {
                    var now = new Date().getTime();
                    var d = targets[i] - now;

                    if (d > 0) {
                         // Get number of weeks until event
                         var weeks = Math.floor(d / 604800000);

                         // Remove weeks from d variable and work out days
                         d = d - (weeks * 604800000);
                         var days = Math.floor(d / 86400000);
                         day.innerHTML = days;

                         // Remove days from d variable and work out hours
                         d = d - (days * 86400000);
                         var hours = Math.floor(d / 3600000);
                         hour.innerHTML = hours;

                         // Remove hours from d variable and work out minutes
                         d = d - (hours * 3600000);
                         var minutes = Math.floor(d / 60000);
                         min.innerHTML = minutes;

                         // Remove minutes from d variable and work out seconds
                         d = d - (minutes * 60000);
                         var seconds = Math.floor(d / 1000);
                         sec.innerHTML = seconds;
                    }

                    if (d <= 0 && i < targets.length) {
                         i++;
                    }

                    if (d <= 0 && i >= targets.length) {
                         day.innerHTML = '0';
                         hour.innerHTML = '0';
                         min.innerHTML = '0';
                         sec.innerHTML = '0';
                    }

               }, 1000);

          }());
     }
});