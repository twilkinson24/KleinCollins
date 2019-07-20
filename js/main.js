jQuery(document).ready(function ($) {
     // Toggle nav menu on button click
     var $root = $("html, body"),
          menu_toggle = $(".mobile-menu-toggle-btn");

     menu_toggle.on("click", function () {
          var $this = $(this);

          // $this.toggleClass("close");
          $("#sidebar-menu, .nav-wrapper, .sidebar-nav-link").toggleClass("show");
     });

     // Toggle nav menu on item click and smooth scrolling
     $(".sidebar-nav-link a").on("click", function () {
          var $this = $(this),
               href = $this.attr("href");

          // Toggle nav menu
          menu_toggle.removeClass("close");
          $this.parents(".sidebar-nav-link, .nav-wrapper, #sidebar-menu").removeClass("show");

          // Smooth scrolling 
          /*
          $root.animate(
               {
                    scrollTop: $(href).offset().top - 100
               },
               500,
               function () {
                    window.location.hash = href;
               }
          );
          */
          return false;
     })
});