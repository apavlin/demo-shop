$(document).ready(function() {
    if ($('.item__image').length) {
        slideShow();
    }
});

// Инициализируем модуль
  var slideShow = function () {
    $('.image__list').find(':first-child').addClass('active');
    $('.image__item-link').on('click', picSlide);

// Переключаем изображения в слайдере
  function picSlide(event) {
    event.preventDefault();
    var $this = $(this),
        item = $this.closest('.image__item'),
        container = $this.closest('.image'),
        display = container.find('.image__big-pic'),
        pathImg = item.find('.image__item-pic').attr('src'),
        duration = 100;

    if (!item.hasClass('active')) {
      item.addClass('active').siblings().removeClass('active');

      display.fadeOut(duration, function() {
        $(this).attr('src', pathImg).fadeIn(duration);
      });
    }
  };
};
