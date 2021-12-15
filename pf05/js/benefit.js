$(function(){
//--------------------------
$('.top_banner i').on('click', function(){
    $('.top_banner ').slideUp(); 
    
});

$('.popup_close').on('click', function(){
    $(this).parent().hide();
});



$("#utc").YTPlayer({
    videoURL:'https://youtu.be/QMNB-oG2yOk',
    containment:'#main_visual',
    autoPlay: true,
    mute:true,
    useOnMobile: true,
    loop: true,//반복
    startAt:0, 
    opacity:1,     //
    showControls:false, // 재생버튼x

}); 

$('.best_tap>li').on('click', function(){
    var $this= $(this); //자기자신
    var idx= $(this).index(); //자기자신의 번호 0 1 2
    //console.log($this,idx);
    //$('.tab_content>div').eq(idx).Show().siblings().hide();
    $('.best_tap_content>div').eq(idx).addClass('on').siblings().removeClass('on');
    $this.addClass('on').siblings().removeClass('on');
});

$('.content01 .click01 li').on('click', function(){
    var idx= $(this).index(); //자기자신의 번호 0 1 2
    $(".tab_content>div").eq(idx).addClass('on').siblings().removeClass('on');
    $(this).addClass('on').siblings().removeClass('on');
});

AOS.init();


























//--------------------------
})