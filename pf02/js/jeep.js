$(function(){
    $('.main_slider').slick({
        arrows:false,        
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
        fade:true, //사라지고나오게
        speed:3000
    });



//----제품슬라이드
$('.pro_sr').slick({
    arrows:false,
    pauseOnHover:false,
    asNavFor: '.product02'

});
$('.product02').slick({
    arrows:false,    
    pauseOnHover:false,
    fade:true,
    speed:1200,
    asNavFor: '.pro_sr',
    slidesToShow:1,
});
//버튼
$('#content01 .bt i.xi-angle-left-thin').on('click', function(){
    $('.product02').slick('slickPrev')
});
$('#content01 .bt i.xi-angle-right-thin').on('click', function(){
    $('.product02').slick('slickNext')
});





})