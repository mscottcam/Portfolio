
$(document).ready(function() {


  // listen for click of work button
  $('.links').on('click', '.work', function(event){
    event.preventDefault();
    $(event.currentTarget).parent('nav').siblings(".introduction").toggleClass("hidden");
    $(event.currentTarget).parent('nav').siblings(".about-me").toggleClass("hidden");
  });

  $('.links').on('click', '.about', function(event){
    event.preventDefault();
    $(event.currentTarget).parent('nav').siblings(".introduction").toggleClass("hidden");
    $(event.currentTarget).parent('nav').siblings(".projects").toggleClass("hidden");
    $(event.currentTarget).parent('nav').siblings(".about-me").toggleClass("hidden");

  });

  $('.top-header').on('click', '.logo', function(event){
    event.preventDefault();
    $(event.currentTarget).parent('header').siblings(".main").children('.introduction').toggleClass("hidden");
    $(event.currentTarget).parent('header').siblings(".main").children('.projects').toggleClass("hidden");
    $(event.currentTarget).parent('header').siblings(".main").children('.about-me').toggleClass("hidden");

  });
});