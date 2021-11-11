$(function(){

    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        console.log(sct);
        if(sct>0) {
            $('#header').addClass('on');
        }else{
            $('#header').removeClass('on');
            
        }
       
    });



    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2500,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
    });



    //메인슬라이드버튼
    $('#main_visual .btn i.xi-angle-left-thin').on('click', function(){
        $('.main_slider').slick('slickPrev')
    });
    $('#main_visual .btn i.xi-angle-right-thin').on('click', function(){
        $('.main_slider').slick('slickNext')
    });
    






//----제품슬라이드
$('.pro_sr').slick({
    autoplay:true,
    autoplaySpeed:2000,
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



$("#mv01").YTPlayer({//--html에서 가져온 소스에 div id 로 바꿔야함
    videoURL:'https://www.youtube.com/watch?v=GwelxL6XwA8',
    containment:'#content04', //내가 넣을 곳 . section 아이디 
    autoPlay:true,
    mute:true, 
    startAt:0, 
    opacity:1,     // 1보다낮추면 배경에 비치게 나옴 0.2,0.1
    showControls:false, // 재생버튼 없애는것 깃허브에 있음

}); 




  
//누르면 위로가는 버튼
    
$('#toTop').on('click', function(){
    $('html, body').animate({scrollTop:0},900) //누르면 밑에서 위로,600은 시간(2초동안 올라감)
});

$(window).on('scroll', function(){
var sct=$(window).scrollTop();
 if(sct>3000) {
    $('#toTop').fadeIn()
}else{
    $('#toTop').fadeOut()
}
});
    








})