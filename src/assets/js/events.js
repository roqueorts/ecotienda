// +(function($) {
// Get the current year for the copyright
$(document).ready(function() {
  $('#year').text(new Date().getFullYear());

  //Init Scrollspy
  $('body').scrollspy({ target: '#main-nav' });

  //Smooth Scrolling
  $('#main-nav a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(document).on('click', '[data-toggle="lightbox"]', function(e) {
  e.preventDefault();
  $(this).ekkoLightbox();
});
// })(jQuery);
