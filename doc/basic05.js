$(function(){
//------------------------------------------------------
$('#top_banner i').on('click', function(){
    $('#top_banner ').hide(); 
    //$('#top_banner ').slideUp(); >천천히 올라감
});
//function topBannerClose(){
//    $('#top_banner i').hide();
//}

$('.main_slider').slick({
    arrows:false,//버튼없애기
    autoplay:true,//자동으로돌아라
    autoplaySpeed:2000,//슬라이드속도 1000=1초
    pauseOnHover:false,//마우스오버시 멈춰라
    

})



//------------------------------------------------------
});