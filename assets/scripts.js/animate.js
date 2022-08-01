document.getElementsByClassName('main_title')
$( "#main_title" ).animate({
    opacity: 1,
    top: "20%",
  }, 2000, function() {
    // Animation complete.
  });

  $( "#but" ).onclick(function() {
    $( "#main_title" ).animate({
        opacity: 1,
        top: "20%",
      }, 2000, function() {
      // Animation complete.
    });
  });

  $(window).on('load', function() {
    $( "#main_title" ).animate({
        opacity: 1,
        top: "20%",
      }, 2000, function() {
        // Animation complete.
      });
   });