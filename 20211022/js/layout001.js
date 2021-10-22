$(function(){
$('#TapContent li').on('click', function(){
     //$(this)이벤트가 적용되는 대상이다.
     //$(this).index() 이벤트가 적용되는 대상 이것의 index번호 0.1.2.3....
     //console.log() ()안의 값을 개발자도구 콘솔창에 나타내라.
     //변수값을 넣어놓는 저장소메모리 var 내가준이름 =값; let,const 가있다
     //펑션(함수)는 어떤일을 저장해놓는 저장소;
     var idx=$(this).index();
     //console.log(idx);
     $(this).addClass('oo').siblings().removeClass('oo');
     $('#TapContent .tab>div').eq(idx).addClass('oo').siblings().removeClass('oo');

    });




});