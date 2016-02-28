$(document).ready(function() {
    if ($('.product').length) {
      view().init();
    }
});

// Объявляем модуль
  var view = function() {

// Инициализируем модуль
    var init = function() {
      _setUpListener();
    };

// Прослушиваем события
    var _setUpListener = function () {
      $('.catalog-view__link_piclist').on('click', _viewPiclist)
      $('.catalog-view__link_table').on('click', _viewTable)
      $('.catalog-view__link_list').on('click', _viewList)
    };

// Переключаем отображение контента
var _viewPiclist = function(event) {
  event.preventDefault();
  $('.catalog-view').find('.active').removeClass('active');
  $(this).addClass('active');
  $('.table').removeClass('table').addClass('piclist');
  $('.list').removeClass('list').addClass('piclist');
};

var _viewTable = function(event) {
  event.preventDefault();
  $('.catalog-view').find('.active').removeClass('active');
  $(this).addClass('active');
  $('.list').removeClass('list').addClass('table');
  $('.piclist').removeClass('piclist').addClass('table');
};

var _viewList = function(event) {
  event.preventDefault();
  $('.catalog-view').find('.active').removeClass('active');
  $(this).addClass('active');
  $('.table').removeClass('table').addClass('list');
  $('.piclist').removeClass('piclist').addClass('list');
};

// Возвращаем объект (публичные методы)
  return {
   init: init
  };
};
