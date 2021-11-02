$(function(){
    //----------------------------------------
    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        //<<위로 움직이는 슬라이드  vertical:true,
        //<<흐려졌다 나오기 fade:true,
    
    });
    
    $('.it_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        //<<위로 움직이는 슬라이드  vertical:true,
        //<<흐려졌다 나오기 fade:true,
    
    });


    //제품 슬라이드
    $(".pr_slider").slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 4,
        
    });
    
    $('#content04 .btn i.xi-angle-left-thin').on('click', function(){
        $('.pr_slider').slick('slickPrev')
    });
    $('#content04 .btn i.xi-angle-right-thin').on('click', function(){
        $('.pr_slider').slick('slickNext')
    });
    
    
    
    
    
    
    
    
    //--------------------------------------------
    
    })