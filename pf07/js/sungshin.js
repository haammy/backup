$(function(){
//------------------------------------------------------------

$('#main').fullpage({
    anchors:['c01', 'c02', 'c03', 'c04', 'footer'],
    //navigation: true,
    afterLoad: function(origin, destination, direction){
        let txt = $('.navbar>li').eq(destination.index).find('a').text();
        $('.section').eq(destination.index).addClass("on").siblings().removeClass('on');
        $('.navbar>li').eq(destination.index).addClass("on").siblings().removeClass('on');
        $('.now').text(txt);


        destination.index==0 ? $('.top_pop').fadeIn() : $('.top_pop').fadeOut();
        // destination.index==0 ? $('.header').fadeIn() : $('.header').fadeOut();
        destination.index==0 ? $('.right_pop').fadeIn() : $('.right_pop').fadeOut();
    },
});


//right_pop
$('.pop01>li>a').on('click', function(){        
    $(this).next().slideToggle();
    $(this).parent().siblings().find('.spop01').slideUp();
});



//------------------------------------------------------------
})