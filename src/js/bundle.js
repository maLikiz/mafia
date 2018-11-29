$(document).ready(function(){function e(e){}var t=($(".ah-games-week.slider"),$(".slider"));$(".header-slider.owl-carousel").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",loop:!0,items:1,touchDrag:!1,mouseDrag:!1,autoplay:!0,autoplayTimeout:3000000,autoplaySpeed:0,dotsSpeed:0}),$(".scrollbar-inner").scrollbar(),t.each(function(){var e=$(this),t=e.find(".slide");t.each(function(){$(this).parents(".slider").find(".slider-dots").append('<div class="slider-dot"></div>')}),t.eq(0).addClass("active").css({left:50}),e.find(".slider-dot").eq(0).addClass("active"),t.eq(1).css({left:-20}),t.eq(2).css({left:120})});var s=t.find(".slider-dot");s.length;if(t.on("click",".slider-dot",function(){var e=$(this),t=e.index(),s=e.parents(".slider"),a=s.find(".slide");s.find(".slider-dot").removeClass("active"),e.addClass("active"),a.removeClass("active"),a.eq(t).addClass("active"),a.eq(1).hasClass("active")||(a.eq(1).css({left:-160,bottom:0}),setTimeout(function(){a.eq(1).css({left:-20,bottom:0})},200)),a.eq(0).css({left:-160,bottom:0}),a.eq(2).css({left:260,bottom:0}),setTimeout(function(){a.eq(0).css({left:-20,bottom:0}),a.eq(2).css({left:120,bottom:0}),a.eq(t).css({left:50,bottom:0})},200),a.eq(2).hasClass("active")&&(setTimeout(function(){a.eq(0).css({left:260,bottom:0})},1),setTimeout(function(){a.eq(0).css({left:120,bottom:0})},201))}),$gameItem=$(".game-item"),$gameItem.length)for(var a=1;a<=19;++a)e(a);
//jackpot(); setInterval(jackpot,1000);








    var tmpImg = new Image() ;
    tmpImg.src = '/img/bg-header.jpg';
    tmpImg.onload = function() {

    var tmpImg = new Image() ;
    tmpImg.src = $('#logo').attr('src') ;
    tmpImg.onload = function() {
logoanim();
    } ;


    } ;


// вызов функции после загрузки всех эл-тов страницы

// запуск внимации два раза

// описание анимации
function logoanim() {
$("#logo").animate({opacity: 0.2}, 200).animate({opacity: 0.8}, 300).delay(1000).animate({opacity: 0.2}, 200).animate({opacity: 0.8}, 300).delay(1000).animate({opacity: 0.2}, 900).animate({
        opacity: 0.8
    }, 50).animate({
        opacity: 0.1
    }, 100).animate({
        opacity: 0.7
    }, 50).animate({
        opacity: 0.1
    }, 100).animate({
        opacity: 0.7
    }, 50).animate({
        opacity: 0.1
    }, 100).animate({
        opacity: 0.7
    }, 50).animate({
        opacity: 0.1
    }, 100).animate({
        opacity: 0.7
    }, 50).animate({
        opacity: 0.1
    }, 100).animate({
        opacity: 1
    }, 1500);
};








});