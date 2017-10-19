
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



// $(document).ready(function() {


//   // listen for click of work button
//   $('.links').on('click', '.work', function(event){
//     event.preventDefault();
//     console.log('testing css ----> ', $(event.currentTarget).parent('nav').siblings(".about-me").hasClass('.hidden'))
//     $(event.currentTarget).parent('nav').siblings(".introduction").toggleClass("hidden");
//     $(event.currentTarget).parent('nav').siblings(".about-me").toggleClass("hidden");
//     console.log('testing css 2 ----> ', $(event.currentTarget).parent('nav').siblings(".about-me").hasClass('.hidden'))
//   });

//   $('.links').on('click', '.about', function(event){
//     event.preventDefault();
//     $(event.currentTarget).parent('nav').siblings(".introduction").toggleClass("hidden");
//     $(event.currentTarget).parent('nav').siblings(".projects").toggleClass("hidden");
//     $(event.currentTarget).parent('nav').siblings(".about-me").toggleClass("hidden");

//   });

//   $('.top-header').on('click', '.logo', function(event){
//     event.preventDefault();
//     $(event.currentTarget).parent('header').siblings(".main").children('.introduction').toggleClass("hidden");
//     $(event.currentTarget).parent('header').siblings(".main").children('.projects').toggleClass("hidden");
//     $(event.currentTarget).parent('header').siblings(".main").children('.about-me').toggleClass("hidden");

//   });
// });