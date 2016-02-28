$(document).ready(function() {
    if ($('.basic-filters').length) {
        accordeon().trigger();
        accordeon().reset();
    }
});

// Модуль accordeon
var accordeon = function () {

// Аккордеон
    function trigger() {

      var trigger = $('.basic-filters__link-trigger');


      trigger.prepend('<i class="arrow-up arrow"></i>');
      $('.arrow').hide();

      trigger.click(function() {
        $('.arrow',this).toggleClass('arrow-down arrow-up');
        $(this).next('.accordeon__inner').stop(true, true).slideToggle(200);
      });

      trigger.hover(function(event) {
                      event.preventDefault();
                      $('.arrow', this).show();
                      if ($('.arrow',this).hasClass('arrow-down')) {
                        $(this).css('background', '#d9e5ea');
                      };
                    }, function() {
                      $('.arrow', this).hide();
                      $(this).css('background', 'inherit');
                    });

    };
    // Сброс фильтров
    function reset() {

      var reset = $('.reset-filter');

      reset.click(function(event) {
        event.preventDefault();
        $(this)
          .closest('ul')
          .find('input:checkbox')
          .removeAttr('checked');
      });
    };

    return {
      trigger: trigger,
      reset: reset
    };

};
