$(function(){
//-----------------------------------------

$("#utc").YTPlayer({
    videoURL:'https://www.youtube.com/embed/qScWdIOjV3k',
    containment:'#main_visual',
    autoPlay: true,
    mute:true,
    useOnMobile: true,
    loop: true,//반복
    startAt:0, 
    opacity:1,     //
    showControls:false, // 재생버튼x

}); 




//베스트제품슬라이드

$('.best_item01').slick({
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    fade:true,
    speed:1000,
    pauseOnHover:false,
    asNavFor: '.best_sr'

});
$('.best_sr').slick({
    arrows:false,    
    pauseOnHover:false,
    asNavFor: '.best_item01',
    slidesToShow:1,
});

//버튼
$('#content02 .bt i.xi-angle-left-thin').on('click', function(){
    $('.best_sr').slick('slickPrev')
});
$('#content02 .bt i.xi-angle-right-thin').on('click', function(){
    $('.best_sr').slick('slickNext')
});





//티종류

$('.pr_slider').slick({
    arrows:false,
    slidesToShow:4,
    autoplay:true,
    autoplaySpeed:2500,
    //centerMode:true,
    //centerPadding:"100px"<양옆에 이미지 나오는 크기
    pauseOnHover:false,//마우스오버시 멈춰라
    pauseOnFocus:false,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3, //아이패드사이즈일때 슬라이드 3개보이기
          }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1, //폰사이즈일때 슬라이드 1개보이기
            }
          },
      ]

});


//버튼
$('#content03 .bt i.xi-angle-left-thin').on('click', function(){
    $('.pr_slider').slick('slickPrev')
});
$('#content03 .bt i.xi-angle-right-thin').on('click', function(){
    $('.pr_slider').slick('slickNext')
});


AOS.init();



//클릭시 탑
    
$('#toTop').on('click', function(){
    $('html, body').animate({scrollTop:0},900) //누르면 밑에서 위로,600은 시간(2초동안 올라감)
});

$(window).on('scroll', function(){
var sct=$(window).scrollTop();
 if(sct>2800) {
    $('#toTop').fadeIn()
}else{
    $('#toTop').fadeOut()
}
});
    



//반응형 컨트롤


$('.mopen').on('click', function(){
    $('.gnb').toggleClass('on');
    $(this).toggleClass('on');
});



$('.depth01>li>a').on('click', function(){
    if($(window).width() < 769) {
        $(this).next().slideToggle();
        $(this).parent().siblings().find('.depth02').slideUp();
    }
    
});



$(window).on('resize', function(){
    $('.depth02').removeAttr('style')
})


//-----------------------------------------
})