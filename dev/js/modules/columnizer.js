$(document).ready(function() {
    if ($('.important-info').length) {
        twoColumns();
    }
});

function twoColumns() {
  $('.important-info__text').addClass('dontsplit');
  $('.important-info__content').columnize({ columns: 2 });
}
