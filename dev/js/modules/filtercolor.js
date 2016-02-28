$(document).ready(function() {
    if ($('ul.color').length) {
        color();
    }
});

function color() {
  $('.color__link').click(function(event) {
    event.preventDefault();
      if ($(this).hasClass('choosen-color')) {
        $(this).removeClass('choosen-color');
      }
      else {
        $(this).addClass('choosen-color')
      };
 });
};
