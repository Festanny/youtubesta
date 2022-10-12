// метод оплаты
var objMethod = {
    '1': '../images/qiwi-method.png',
    '2': '../images/card.png',
    '3': ''
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
});
$('.next-rev').click(()=>{
    $('.carousel-form').slick('slickNext');
});
$('.prev-rev').click(() => {
    $('.carousel-form').slick('slickPrev');
});

// слайдер для work
$('.work-carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
});
$('.next-rev-work').click(()=>{
    $('.work-carousel').slick('slickNext');
});
$('.prev-rev-work').click(() => {
    $('.work-carousel').slick('slickPrev');
});

// слайдер для quick order
$('.featuresOfUse-carousel').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
});

// quantity and coast (input)
$('.startPromote .startPromoteMain .order-block .qty-sum input').on('input', function(el) {
    var elemInput = $(el.target)[0],
        coefficient = $(el.target).attr('data-coefficient'),
        inputNum = $(el.target).attr('data-input'),
        elemInputCoast = elemInput.value * coefficient;
    $('.startPromote .order-block .carousel-form .item[data-input="'+ inputNum +'"] .qty-sum .qty span').html(elemInput.value);
    $('.startPromote .order-block .carousel-form .item[data-input="'+ inputNum +'"] .qty-sum .sum span').html(elemInputCoast);
    tabEdit();
});

// allSumOrder
$('.startPromote .paymentMain').on('click change', function () {
    tabEdit()
});
$('.startPromote').on('click change', function () {
    tabEdit()
});

// tabEdit
function tabEdit() {
var contentCount = $('.startPromote .order-block .carousel-form .item .qty-sum input[type="range"]').length,
    sumComm = 0,
    sumAllOrder = 0,
    commission = Number($('.startPromote .paymentMain .payment .methodInput select option:selected').attr('data-com-sys')) / 100;
    $('.summaryInfo .commissionText span.commission').text((commission * 100).toFixed(1));
    for (var i=1; i<=contentCount; i++) {
        turnOnOrder(i);
        if ($('.startPromote .order-block .carousel-form .item[data-input="'+ i +'"] .title-service input[type="checkbox"]').is(':checked')) {
            sumAllOrder = sumAllOrder + Number($('.startPromote .order-block .carousel-form .item[data-input="'+ i +'"] .qty-sum .sum span').text());
            var rangeInputBlock = $('.startPromote .startPromoteMain .order-block .item[data-input="'+ i +'"] .qty-sum input'),
                elemInput = $(rangeInputBlock)[0],
                coefficient = $(rangeInputBlock).attr('data-coefficient'),
                elemInputCoast = elemInput.value * coefficient;
            $('.startPromote .order-block .carousel-form .item[data-input="'+ i +'"] .qty-sum .sum span').text(elemInputCoast);
            $('.startPromote .startPromoteMain .order-block .carousel-form .item[data-input="'+ i +'"] .btn-settings a.true').removeClass('true');
        } else {
            $('.startPromote .order-block .carousel-form .item[data-input="'+ i +'"] .qty-sum .sum span').html(0);
            $('.startPromote .startPromoteMain .order-block .carousel-form .item[data-input="'+ i +'"] .btn-settings a').addClass('true');
        }
        sumComm = sumAllOrder * commission;
        $('.summaryInfo .commissionText .allСommissionPaymentForm').text(sumComm.toFixed(2))
        $('form .payment .col-6 div .allSumPaymentForm').text(Number(sumAllOrder.toFixed(2)) + Number(sumComm.toFixed(2)))
    }
}
tabEdit()

function turnOnOrder(i) {
    var inputRange = $('.startPromote .order-block .carousel-form .item[data-input="'+ i +'"] .qty-sum input[type="range"]'),
        check = $('.startPromote .order-block .carousel-form .item[data-input="'+ i +'"] .title-service input[type="checkbox"]');

    inputRange.on('change', function() {
        if (Number(inputRange.val()) > Number(inputRange.attr('min'))) {
            check.prop('checked', true);
        }
    })
}