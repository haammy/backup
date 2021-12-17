$(function(){
//--------------------------
$('.top_banner i').on('click', function(){
    $('.top_banner ').slideUp(); 
    
});

$('.popup_close').on('click', function(){
    $(this).parent().hide();
});

//--메뉴
$('.gnb>ul>li>a') .on('click',function(e){
    if($('.gnb').hasClass('on')) { //hasClass('on') 사이즈에상관없이 가능하게
        e.preventDefault(); //-링크걸려있는데로 가지마라
        $(this).next().stop().slideToggle();//slideToggle()부드럽게슬라이드로나옴
        $(this).parent().siblings().find('.depth02').stop().slideUp();//클릭했을때 서브메뉴 하나만 보이게
        

    }
    
});




$('.mopen').on('click', function(){ //리스트아이콘을 클릭하면 나와라 
    $('.gnb').toggleClass('on'); 
     $('.header_search').fadeToggle(); //fadeToggle();나타낫다사라져라
});

$(window).on('resize', function(){
    $('.depth02').removeAttr('style') //윈도우사이즈로 돌아갔을때 원래 스타일로 돌아와라
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




























//--------------------------
})