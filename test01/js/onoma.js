$(function(){
    //----------------------------------------
    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        autoplaySpeed:4000,
        //<<위로 움직이는 슬라이드  vertical:true,
        //<<흐려졌다 나오기 fade:true,
    
    });
    
    $('.best_item01').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        autoplaySpeed:2000,
        asNavFor: '.best_sr'
    
    });
    $('.best_sr').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        autoplaySpeed:2000,
        asNavFor: '.best_item01',
        slidesToShow:2,
    });


    $('#content01 .bt i.xi-angle-left-thin').on('click', function(){
        $('.best_sr').slick('slickPrev')
    });
    $('#content01 .bt i.xi-angle-right-thin').on('click', function(){
        $('.best_sr').slick('slickNext')
    });
    


    //제품 슬라이드
    $(".pr_slider").slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 4,
        autoplaySpeed:2000,
        
    });
    
    $('#content04 .btn i.xi-angle-left-thin').on('click', function(){
        $('.pr_slider').slick('slickPrev')
    });
    $('#content04 .btn i.xi-angle-right-thin').on('click', function(){
        $('.pr_slider').slick('slickNext')
    });
    
    
    
    
    
    
    
    
    //--------------------------------------------
    
    })