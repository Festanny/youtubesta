// метод оплаты
var objMethod = {
    '1': '../images/qiwi-method.png',
    '2': '../images/card.png',
    '3': 'Яндекс'
}
$('.startPromote .paymentMain .payment .methodInput select').on('change', '', function (e) {
    var method = $('.startPromote .paymentMain .payment .methodInput select option:selected').attr('data-select');
    $('.startPromote .paymentMain .payment .methodInput .selectionMethod .methodImg').css('background-image', 'url("' + objMethod[method] + '")');
});

// слайдер для заказа
$('.carousel-form').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 574,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
});

$('.next-rev').click(()=>{
    $('.carousel-form').slick('slickNext')
});
$('.prev-rev').click(() => {
    $('.carousel-form').slick('slickPrev')
});