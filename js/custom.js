$(document).ready(function(){
    $('.bxslider1').bxSlider({
        minSlides: 1,
        maxSlides: 8,
        slideWidth: 189,
        slideMargin: 0,
        ticker: true,
        speed: 50000
    });
    $('#Carousel').carousel({
        interval: 3000
    })
});