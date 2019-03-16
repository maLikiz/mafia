$('.payment-radio').on('keyup click', function() {
  $('.phoneinput1, .phoneinput2').hide();
  $('.amountselect').show();
});

$('.payment-radio.phonemobile').on('keyup click', function() {
  $('.amountselect, .phoneinput2').hide();
  $('.phoneinput1').show();
});

$('.payment-radio.phoneqiwi').on('keyup click', function() {
  $('.amountselect, .phoneinput1').hide();
  $('.phoneinput2').show();
});


$('#phonemobile, #phoneqiwi').on('keyup change input click', function() {
  if (this.value.match(/[^0-9.]/g)) {
    this.value = this.value.replace(/[^0-9.]/g, '');
  }
});


$('#amount').on('keyup change input click', function() {
  mindep = Number(min);

  if (getCookie('lng') == 'EN') {
    deppperr = '<b>Minimum amount ' + valll + mindep + '!</b>';
    deppperr2 = 'Select payment system:';
    deppperr3 = '<b>Invalid format, example: 79876543210!</b>';
    deppperr4 = '<b>Invalid format, example: 9876543210!</b>';
    deppperr5 = '<b>System is temporarily unavailable!</b>';
    deppperr6 = '<b>Incorrect amount!</b>';
    deppperr7 = '<b class="white">We are sent SMS to you for the deposit</b>';
  }

  if (getCookie('lng') == null) {
    deppperr = '<b>Минимальная сумма ' + valll + mindep + '!</b>';
    deppperr2 = 'Выберите платежную систему:';
    deppperr3 = '<b>Неверный формат, пример: 79876543210!</b>';
    deppperr4 = '<b>Неверный формат, пример: 9876543210!</b>';
    deppperr5 = '<b>Система временно недоступна!</b>';
    deppperr6 = '<b>Некорректная сумма!</b>';
    deppperr7 = '<b class="white">Вам отправлено SMS для депозита</b>';
  }

  if (this.value.match(/[^0-9.]/g)) {
    this.value = this.value.replace(/[^0-9.]/g, '');
  }
  amount = Number($('#amount').val());

  if (mindep > amount) {
    $('#depbutton').attr('disabled', true).css({ 'opacity': '0.7' });
    $('.deptext').html(deppperr);
    return false;
  } else {
    $('.deptext').html(deppperr2);
    $('#depbutton').attr('disabled', false).css({ 'opacity': '1' });
  }
});

$('#depbutton').on('keyup click', function() {
  deway = $('input[name=depway]:checked').val();
  desum = $('#amount').val();
  phone = $('#phoneqiwi').val();

  if (phone == '') {
    phone = $('#phonemobile').val();
  }

  if ((deway == 'qiwi_rub') || (deway == 'qiwi_usd') || (deway == 'qiwi_eur')) {
    if (phone.length < 11) {
      $('.deptext').html(deppperr3);
      return;
    }
  }

  if ((deway == 'mts_rub') || (deway == 'beeline_rub') || (deway == 'tele2_rub') || (deway == 'megafon_rub')) {
    if (phone.length < 10) {
      $('.deptext').html(deppperr4);
      return;
    }
  }

  if (phone == '') {
    $('.depwindow').load('/deposit/pay/?payway=' + deway + '&amount=' + desum);
    errrr = $('.depwindow').text();
    if (errrr == 1) {
      $('.deptext').html(deppperr4);
    }
    if (errrr == 2) {
      $('.deptext').html(deppperr3);
    }
    if (errrr == 3) {
      $('.deptext').html(deppperr6);
    }
    if (errrr == 4) {
      $('.deptext').html(deppperr5);
    }
  } else {
    $('.depwindow').load('/deposit/pay/?payway=' + deway + '&amount=' + desum + '&phone=' + phone);
    errrr = $('.depwindow').text();

    if ((deway == 'mts_rub') || (deway == 'beeline_rub') || (deway == 'tele2_rub') || (deway == 'megafon_rub')) {
      $('.deptext').html(deppperr7);
      if (errrr == 5) {
        $('.deptext').html(deppperr7);
      }
    }
    if (errrr == 1) {
      $('.deptext').html(deppperr3);
    }
    if (errrr == 2) {
      $('.deptext').html(deppperr4);
    }
    if (errrr == 3) {
      $('.deptext').html(deppperr6);
    }
    if (errrr == 4) {
      $('.deptext').html(deppperr5);
    }
  }
  return false;
});

$('#reg_currr').on('keyup change input click', function() {
  currr = $('#reg_currr').val();
  $('#reg_cur').val(currr);

});

$('#reg_phn').on('keyup change input click', function() {
  regppp = $('#reg_phn').val();
  if (regppp == '') {
    $('#reg_phn').val('+');
  }
});
$('#rec_phn').on('keyup change input click', function() {
  regpph = $('#rec_phn').val();
  if (regpph == '') {
    $('#rec_phn').val('+');
  }
});

$('#reg_currr').on('keyup change input click', function() {
  selectedcur = $('#reg_cur').val();

  if (selectedcur == 'RUB') {
    $('#giftnodeposit').text('Бездепозитный бонус ₽650');
  }

  if (selectedcur == 'USD') {
    $('#giftnodeposit').text('Бездепозитный бонус $10');
  }

  if (selectedcur == 'EUR') {
    $('#giftnodeposit').text('Бездепозитный бонус €10');
  }

});

$('.marker2.onPhone').on('keyup click', function() {
  $('#reg_ema').val('');
});

$('.marker2.onEmail').on('keyup click', function() {
  $('#reg_phn').val('');
});
$('#rec_ema').on('keyup click', function() {
  $('#rec_phn').val('');
});


$('#gift1').on('keyup click', function() {
  $('#reg_gif').val('1');
});

$('#gift2').on('keyup click', function() {
  $('#reg_gif').val('2');
});

$('#gift3').on('keyup click', function() {
  $('#reg_gif').val('3');
});


$(function() {
  $('#searchquery').bind('change keyup input click',
    function() {
      if (this.value.length >= 2) {
        $.ajax({
          type: 'post', url: '/core/post/search/',
          data: { 'searchquery': this.value },
          cache: false,
          success: function(html) {
            $('.games').html(html);
          },
        });
      }
    });
});

$(function() {
  $('#brandquery').bind('change select',
    function() {
      if (this.value.length == 2) {
        $.ajax({
          type: 'post', url: '/core/post/brand/',
          data: { 'brandquery': this.value },
          cache: false,
          success: function(html) {
            $('.games').html(html);
          },
        });
      }
    });
});

// swipe sidebar
(function($) {
  var startX = 0;
  var setX = 0;
  var sidebarWidth = 230;
  var amplitude = 20;
  var halfSideBarWidth = sidebarWidth / 2;
  var disabledToggleSidebar = false;
  var startScrollTop = $(window).scrollTop();
  var differenceScrollTop = 0;

  $(window).on('touchstart', function(event) {
    startX = event.originalEvent.touches[0].clientX;
    setX = 0;

    $('body > .wrapper').css({ transition: '0s' });

    if ($('.mobile-sidebar').hasClass('active')) {
      startScrollTop = $('.mobile-sidebar').scrollTop();
    } else {
      startScrollTop = $(window).scrollTop();
    }
  });

  $(window).on('touchmove', function(event) {
    var sidebarIsActive = $('.mobile-sidebar').hasClass('active');
    var scrollTop = $(window).scrollTop();

    if (sidebarIsActive) {
      scrollTop = $('.mobile-sidebar').scrollTop();
    }

    differenceScrollTop = (startScrollTop - scrollTop);
    differenceScrollTop = differenceScrollTop < 0 || differenceScrollTop > 0;

    if (!disabledToggleSidebar) {
      disabledToggleSidebar = differenceScrollTop;
    }

    if (differenceScrollTop && !sidebarIsActive) {
      $('.mobile-sidebar').css({
        top: scrollTop,
        height: $(window).height(),
      });
    }

    if (!disabledToggleSidebar) {
      var touches = event.originalEvent.touches[0];
      var x = touches.clientX;

      if (sidebarIsActive) {
        setX = Math.max(Math.min(0, -(startX - x)), -sidebarWidth);
        setSkewX = sidebarWidth + setX;
      } else {
        setX = Math.max(Math.min(sidebarWidth, -(startX - x)), 0);
        setSkewX = Math.max(Math.min(sidebarWidth + amplitude, -(startX - x)), amplitude) - amplitude;
      }

      $('body > .wrapper').css({ transform: 'translate(' + setSkewX + 'px, 0)' });
    }
  });

  $(window).on('touchend', function(event) {

    if (setX < -halfSideBarWidth) {
      hideSdebar();
    }

    if (setX > halfSideBarWidth) {
      showSdebar();
    }

    differenceScrollTop = 0;
    disabledToggleSidebar = false;

    $('body > .wrapper').removeAttr('style');

    document.querySelector('html').style.touchAction = '';
  });
  $(window).resize(function() {
    if ($(window).width() >= 880) {
      hideSdebar();
    }
  });
})(jQuery);


function overflowHidden(isHidden, delay, delay2) {
  var div = document.createElement('div');
  var html = document.documentElement;
  var { scrollY } = window;

  // get scrollbar width
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.visibility = 'hidden';

  document.body.appendChild(div);

  var scrollWidth = div.offsetWidth - div.clientWidth;

  document.body.removeChild(div);

  if (isHidden) {
    // set `html` position to look the same as before
    setTimeout(function() {
      $('html').css({
        width: '100vw',
        position: 'fixed',
        top: -scrollY,
        overflow: 'hidden',
      });
    }, delay);

  } else {
    setTimeout(function() {
      // get style top for reset position scroll
      var top = html.style.top.replace('px', '') / 1;

      // reset styles
      html.style = null;

      // reset position scroll
      window.scrollTo(0, -top);
    }, delay2);
  }

}

function hideSdebar() {
  $('body').removeClass('active-mobile');
  $('.mobile-sidebar').removeClass('active');
  $('.open-menu').removeClass('active');
  overflowHidden(false, 300, 0);
}

function showSdebar() {
  $('body').addClass('active-mobile');
  $('.mobile-sidebar').addClass('active');
  $('.open-menu').addClass('active');
  overflowHidden(true, 300, 300);


  $('.mobile-sidebar').css({
    top: $(window).scrollTop(),
    height: $(window).height(),
  });
}

(function($) {

  $('.open-menu').click(function(event) {
    if ($(this).hasClass('active')) {
      hideSdebar();
    } else {
      showSdebar();
    }
    event.preventDefault();
  });

  $('.popup-bonus').click(function(event) {
    $('.popup-bonus').removeClass('active');
    $(this).toggleClass('active');
    event.preventDefault();
  });

  $('.open-menu2').click(function(event) {
    $('.header-games-nav').toggleClass('active');
    event.preventDefault();
  });

  $('.marker').click(function(event) {
    $('.marker').removeClass('active');
    $(this).addClass('active');
    var id = '#' + $(this).attr('data-tab');
    $('.info-block').removeClass('active');
    $(id).addClass('active');

    event.preventDefault();
  });

  var div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.visibility = 'hidden';

  document.body.appendChild(div);
  SW = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);

  var $body = $('body');

  function openPopup() {
    var options = {
      paddingRight: SW,
    };

    $('.popup').addClass('active');
    $body.addClass('popup-active');
    $body.css(options);
    $('.fast-links').css(options);
  }

  function closePopup() {
    var options = {
      paddingRight: 0,
    };

    $('.popup').removeClass('active');
    $body.removeClass('popup-active');
    $body.css(options);
    $('.fast-links').css(options);
  }


  $('.marker2').click(function() {
    var $this = $(this);
    var id = '#' + $this.attr('data-tab');
    console.log(id)

    $('.marker2').removeClass('active');
    $this.addClass('active');
    $('.info-block2').removeClass('active');
    $(id).addClass('active');
  });

  $('.open-login').click(function() {
    openPopup();

    $('.popup .registration').removeClass('active');
    $('.popup-recovery').removeClass('active');
    $('.popup-login').addClass('active');
  });

  $('.recovery').click(function() {
    openPopup();

    $('.popup-login').removeClass('active');
    $('.popup .registration').removeClass('active');
    $('.popup-recovery').addClass('active');
  });

  $('.open-account').click(function() {
    openPopup();

    $('.popup .account').addClass('active');
  });

  $('.open-aff').click(function() {
    openPopup();

    $('.popup .account').addClass('active');
    $('[data-tab]').removeClass('active');
    $('#tab1,#tab2,#tab3,#tab4,#tab5,#tab6').removeClass('active');
    $('#tab4').addClass('active');
    $('[data-tab="tab4"]').addClass('active');
  });

  $('.open-profile').click(function() {
    openPopup();

    $('.popup .account').addClass('active');
    $('[data-tab]').removeClass('active');
    $('#tab1,#tab2,#tab3,#tab4,#tab5,#tab6').removeClass('active');
    $('#tab6').addClass('active');
    $('[data-tab="tab6"]').addClass('active');
  });

  $('.open-bonuses').click(function() {
    openPopup();

    $('.popup .account').addClass('active');
    $('[data-tab]').removeClass('active');
    $('#tab1,#tab2,#tab3,#tab4,#tab5,#tab6').removeClass('active');
    $('#tab5').addClass('active');
    $('[data-tab="tab5"]').addClass('active');
  });

  $('.open-registration').click(function() {
    openPopup();

    $('.popup-login').removeClass('active');
    $('.popup-recovery').removeClass('active');
    $('.popup .registration').addClass('active');
  });

  $('.popup .btn-close').click(function() {
    closePopup();

    $('.popup > div').removeClass('active');
  });

  $('.toggle-dop-nav').click(function() {
    $('.dop-nav-list').toggleClass('active');
  });

  $('.toggle-main-nav').click(function() {
    $('.main-nav-list').toggleClass('active');
  });


  $('.btn-account').on('click', function() {
    var index = $(this).index();
    var $accountTab = $('.account-tab');

    $accountTab.removeClass('active');
    $accountTab.eq(index).addClass('active');
  });

  $('.game-tabBtn').on('click', function() {
    var $this = $(this);
    var index = $this.index();
    var $tab = $('.gameTab');

    $this.siblings().removeClass('active');
    $this.addClass('active');

    $tab.removeClass('active');
    $tab.eq(index).addClass('active');
  });

  $('.btn-resize').on('click', function() {
    var $display = $('.game-display');
    $display.toggleClass('fullScreen');
  });
})(jQuery);
