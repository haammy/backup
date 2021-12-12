$(function(){
//--------------------------
$('.top_banner i').on('click', function(){
    $('.top_banner ').slideUp(); 
    
});


$("#utc").YTPlayer({
    videoURL:'https://youtu.be/QMNB-oG2yOk',
    containment:'#main_visual',
    autoPlay: true,
    // mute:true,
    useOnMobile: true,
    loop: true,//반복
    startAt:0, 
    opacity:1,     //
    showControls:false, // 재생버튼x

}); 





























//--------------------------
})