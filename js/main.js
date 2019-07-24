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
                         new Date('2019-07-30T16:30:00Z').getTime()],
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

     // Donation Form Section
     const donationDisplay = document.getElementById('donation-display'),
          donationTotal = document.getElementById('donation-total'),
          feeCheck = document.getElementById('fee-check'),
          feeCheckBox = document.getElementById('transaction-fee');


     // Donation Options
     const fiveBtn = document.getElementById('5-usd'),
          tenBtn = document.getElementById('10-usd'),
          twentyFiveBtn = document.getElementById('25-usd'),
          fiftyBtn = document.getElementById('50-usd'),
          oneHundredBtn = document.getElementById('100-usd'),
          twoHundredBtn = document.getElementById('200-usd'),
          fiveHundredBtn = document.getElementById('500-usd'),
          customAmtBtn = document.getElementById('custom-amt-usd');

     const donationBtns = [fiveBtn, tenBtn, twentyFiveBtn, fiftyBtn, oneHundredBtn, twoHundredBtn, fiveHundredBtn, customAmtBtn];

     // adds commas to numbers in donation total inputs
     function formatNumber(num) {
          return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

     function setTotal(total) {
          donationDisplay.value = total;
          donationTotal.value = total;
     }

     function enterCustomAmt() {
          donationDisplay.value = '';
          donationDisplay.focus();
     }

     donationDisplay.addEventListener('blur', function () {
          if (isNaN(donationDisplay.value)) {
               donationDisplay.value = '50.00';
          } else {
               if (donationDisplay.value.includes('.')) {
                    let getNumber = Number(donationDisplay.value).toFixed(2);
                    donationDisplay.value = getNumber;
                    donationTotal.value = donationDisplay.value;
               } else {
                    let getNumber = formatNumber(Number(donationDisplay.value).toFixed(2));
                    donationDisplay.value = getNumber;
                    donationTotal.value = donationDisplay.value;
               }
          }
     });

     feeCheckBox.addEventListener("click", function () {
          feeCheck.click();
     });

     // disable user from changing the donation total input near submit btn
     donationTotal.addEventListener("click", function (e) {
          donationTotal.blur();
     });

     for (let i = 0; i < donationBtns.length; i++) {
          donationBtns[i].addEventListener("click", function (e) {
               switch (donationBtns[i]) {
                    case fiveBtn:
                         setTotal('5.00');
                         break;
                    case tenBtn:
                         setTotal('10.00');
                         break;
                    case twentyFiveBtn:
                         setTotal('25.00');
                         break;
                    case fiftyBtn:
                         setTotal('50.00');
                         break;
                    case oneHundredBtn:
                         setTotal('100.00');
                         break;
                    case twoHundredBtn:
                         setTotal('200.00');
                         break;
                    case fiveHundredBtn:
                         setTotal('500.00');
                         break;
                    case customAmtBtn:
                         enterCustomAmt();
                         break;
               }
          });
     }

     // Blue labels for form input fields
     const formFields = document.querySelectorAll(".form-field label");

     // console.log(formFields);
     // console.log(formFields.length);

     for (let i = 0; i < formFields.length; i++) {
          //  console.log(formFields[i].nextSibling.nextSibling);
          let inputForLabel = formFields[i].nextSibling.nextElementSibling,
               inputLabel = inputForLabel.previousElementSibling;

          formFields[i].nextSibling.nextElementSibling.addEventListener('keypress', function () {
               inputLabel.classList.add('show-label');
          });

     }


});