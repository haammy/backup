$(function(){
//-----------------------------------------
$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2800,
    pauseOnHover:false,
    pauseOnFocus:false,
    // dots:true,
});

//사업분야

$('.b_item01').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    autoplaySpeed:2500,
    asNavFor: '.b_sr'

});
$('.b_sr').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    autoplaySpeed:2500,
    asNavFor: '.b_item01',
    slidesToShow:1,
});

$('.b_item01').on('afterChange', function(e,s,c){
    $('.it_slider .num').text('0' + (c+1))
})


$('#content03 .bt i.xi-angle-left-thin').on('click', function(){
    $('.b_sr').slick('slickPrev')
});
$('#content03 .bt i.xi-angle-right-thin').on('click', function(){
   $('.b_sr').slick('slickNext')
});








$('.pr01').slick({
    arrows:false,
    autoplay:true,
    vertical :true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    pauseOnFocus:false,
    // dots:true,
});

//-----------------------------------------
})