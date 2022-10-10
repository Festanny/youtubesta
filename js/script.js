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

// quantity and coast (input)
$('.sliderCustomizeService .swiper-slide .function input').on('input', function(el) {
    var elemInput = $(el.target)[0],
        coefficient = $(el.target).attr('data-coefficient'),
        elemInputCoast = elemInput.value * coefficient,
        quan = $($(elemInput).prev()[0]).children()[0],
        coast = $($(elemInput).next()[0]).children()[0];
    $(coast).html(elemInputCoast);
    $(quan).html(elemInput.value);
});
  
// allSumOrder
$('.servicesBlock .block').on('click change', function () {
var id = $(this).attr('data-tab'),
    commission = Number($('.itemTabServices  .block[data-tab="' + id + '"] .paymentMain select option:selected').attr('data-com-sys')) / 100;
tabEdit(id, commission)
});
  
// TabOrder
$('.servicesBlock .swiper-slide.slideBlock').on('click',function () {
    var id = $(this).attr('data-tab'),
    content = $('.servicesBlock .block[data-tab="' + id + '"]'),
    commission = Number($('.itemTabServices .block[data-tab="' + id + '"] .paymentMain select option:selected').attr('data-com-sys')) / 100,
    socName = $('.servicesBlock .swiper-slide.slideBlock[data-tab="' + id + '"] .featureCard__content .featureCard__title').text();

    $('.servicesBlock .block[data-tab="' + id + '"] .socNameFormOrder').val(socName);
    $('.servicesBlock .swiper-slide.slideBlock.active').removeClass('active');
    $(this).addClass('active');

    $('.servicesBlock .block.active').removeClass('active');
    content.addClass('active');
    tabEdit(id, commission);
});
  
// tabEdit
function tabEdit(id, commission) {
var contentCount = $('.servicesBlock .block[data-tab="' + id + '"] input[type="range"]').length,
    sumComm = 0,
    sumAllOrder = 0;
$('form .payment .commission').text((commission * 100).toFixed(1));
for (var i=0; i<contentCount; i++) {
    sumComm = sumComm + Number($('.servicesBlock .block[data-tab="' + id + '"] input[type="range"]').eq(i).next().children().text()) * commission;
    sumAllOrder = sumAllOrder + Number($('.servicesBlock .block[data-tab="' + id + '"] input[type="range"]').eq(i).next().children().text());
    $('form .payment .col-6 div .allСommissionPaymentForm').text(sumComm.toFixed(2))
    $('form .payment .col-6 div .allSumPaymentForm').text(Number(sumAllOrder.toFixed(2)) + Number(sumComm.toFixed(2)))
}
}