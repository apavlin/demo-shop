//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/jquery-ui/jquery-ui.js
//= ../../bower_components/jquery.columnizer/src/jquery.columnizer.js
//= ../../bower_components/selectize/dist/js/standalone/selectize.js

// Объявляем модуль
  var myModule = (function () {

// Инициализируем модуль
    var init = function () {
      _setUpListener();
    };

// Прослушиваем события
    var _setUpListener = function () {
      $('.reset-filter').on('click', _resetFilter)
    };


// Иконка при наведении на ссылку-триггер
   // $('.basic-filters__link-trigger').hover(function() {
   //    $(this).prepend('<i class="arrow-up"></i>')
   //  }, function() {
   //    $('.arrow-up').remove()
   //  });


//Аккордеон
var trigger = $('.basic-filters__link-trigger');

trigger.prepend('<i class="arrow-up arrow"></i>');
$('.arrow').hide();

trigger.hover(function() {
  $('.arrow',this).show()
  },  function() {
        $('.arrow',this).hide()
      });

trigger.click(function(e){
  e.preventDefault();
  $('.arrow',this).toggleClass('arrow-down');
  $(this).next('.accordeon__inner').slideToggle(200);
});

// Сброс фильтров
var _resetFilter = function(event) {
  event.preventDefault();
    $(this)
      .closest('ul')
      .find('input:checkbox')
      .removeAttr('checked');
}
// Ценовой слайдер
$(function() {
  $( ".priceRange__slider" ).slider({
      range: true,
      min: 0,
      max: 30000,
      values: [ 100, 13000 ],
      slide: function( event, ui ) {
        $( "#priceRange__amount1" ).val(ui.values[ 0 ]);
        $( "#priceRange__amount2" ).val(ui.values[ 1 ]);
      }
    });
    $( "#priceRange__amount1" ).val(  $( ".priceRange__slider" ).slider( "values", 0 ));
    $( "#priceRange__amount2" ).val(  $( ".priceRange__slider" ).slider( "values", 1 ));

  });

// Selectize
$('#select-field').selectize({
    create: true,
    sortField: 'text'
});

// Запускаем columnizer
$('.important-info__text').addClass('dontsplit');
$('.important-info__content').columnize({ width: 530 });

// Возвращаем объект (публичные методы)
  return {
    init: init
  };
})();

// Вызываем модуль
myModule.init();