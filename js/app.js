
$('a[href*="#"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 750, function() {
          var $target = $(target);
          $target.focus();
        });
      }
    }
  });

window.copyText.addEventListener('click', function(e) {
  e.preventDefault();
  this.select();
  document.execCommand('copy');
  alert('copied');
});