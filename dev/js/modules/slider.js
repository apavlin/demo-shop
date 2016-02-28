$(document).ready(function() {
    if ($('.priceRange').length) {
        priceRange();
    }
});

// Слайдер
var priceRange = function() {
  var priceslider = $('.priceRange__slider'),
      amount1 = $('#priceRange__amount1'),
      amount2 = $('#priceRange__amount2');

  priceslider.slider({
    range: true,
    min: 0,
    max: 30000,
    animate: true,
    step: 10,
    values: [ 100, 13000 ],
    slide: function( event, ui ) {
      amount1.val(ui.values[ 0 ]);
      amount2.val(ui.values[ 1 ]);
    }
  });

    amount1.val(priceslider.slider( 'values', 0 ));
    amount2.val(priceslider.slider( 'values', 1 ));

    amount1.change(function(){
      var value1 = amount1.val()
        value2 = amount2.val();
        if(parseInt(value1) > parseInt(value2)){
          value1 = value2;
          amount1.val(value1);
        }
      priceslider.slider('values', 0, value1);
    });

    amount2.change(function(){
      var value1 = amount1.val()
          value2 = amount2.val();
      if (value2 > 30000) { amount2.val(30000)}
      if(parseInt(value1) > parseInt(value2)){
        value2 = value1;
        amount2.val(value2);
    }
      priceslider.slider('values',1,value2);
    });
  };