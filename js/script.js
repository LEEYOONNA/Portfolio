'use strict';

$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


//fixHeader
var scrollTop = 0;
scrollTop = $(document).scrollTop();
fixHeader();

//윈도우창 조절 시 이벤트
$(window).on('scroll resize', function(){
    scrollTop=$(document).scrollTop();
    fixHeader();
});

//고정헤더 함수
function fixHeader(){
    if(scrollTop >150){
    $('header').addClass('on');
    }
    else{
        $('header').removeClass('on');
    }
}

//스크롤 애니메이션
$(function(){
    $('.animate').scrolla({
        mobile: false,
        once: false
    });
});

//차트
$(window).ready(function(){
   draw(80, '.pie-chart1', '#ccc');
  draw(50, '.pie-chart2', '#8b22ff');
  draw(30, '.pie-chart3','#ff0');
});

function draw(max, classname, colorname){
   var i=1;
    var func1 = setInterval(function(){
      if(i<max){
          color1(i,classname,colorname);
          i++;
      } else{
        clearInterval(func1);
      }
    },10);
}
function color1(i, classname,colorname){
   $(classname).css({
        "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
   });
}


function replay(){
  draw(80, '.pie-chart1', '#ccc');
  draw(50, '.pie-chart2', '#8b22ff');
  draw(30, '.pie-chart3','#ff0');
}
