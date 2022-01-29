$(function(){

    $('.slider_container').slick({
        nextArrow: '<button type="button" class="slick-button slick-next"></button>',
        prevArrow: '<button type="button" class="slick-button slick-prev"></button>'
    });

    $('select').styler()


$('.header_btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
});
});