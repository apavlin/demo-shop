$(document).ready(function() {
    if ($('select').length) {
        select();
    }
});

function select() {
  $('#select-field').selectize({
    create: false,
    sortField: 'text'
  });
}


