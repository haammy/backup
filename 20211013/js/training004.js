$(function(){
    $('.mopen').on('click',function(){
        $('nav').toggleClass('on');
    });

    $('nav>ul>li>a').on('click',function(){
        if($('nav').hasClass('on')){
            $(this).next().slideToggle();
        }
    });

    $(window).on('resize', function(){
        $('.sub').removeAttr('style')
    })
})