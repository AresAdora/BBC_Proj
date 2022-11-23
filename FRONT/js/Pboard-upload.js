/*
$(function cllick_border() {
    $("img").click(function(){
        $("img").css("border","none");
        $(this).css("border","4px solid #396cfd");
    })
})

function click_border() {
    $("img").css("border","none");
    $(this).css("border","4px solid #396cfd");
}
$(function() {
    $("#image").click(function() {
        alert("click");
    })
})
$(function(){
	$(".image").click(function(){
		//사용하고자 하는 함수
		alert("click")
		
	});
});	

function fn_kakaoLogin(){
	alert("click");
}

$(function(){
	$(img).click(function(){
		//사용하고자 하는 함수
		alert("hi");
	});
});	

const image=document.querySelector(".image");

function handleClick() {
    image.style.color="blue";
}

image.addEventListener("click",handleClick);

function func() {
    alert("Hi");
}

function prev_image() {
    $("img").click(function(){
        var vimg=$('<img>', {
            'src' : '../pboard-image/레이어 3.png',
            'width' : '100px',
            'height' : '100px'
        });
        $(vimg).appendTo('#result');
    });
    alert("hi");
}
function border() {
    $("img").click(function(){
        $("img").css("border","none");
        $(this).css("border","4px solid blue");
    });
}
$(document).ready(function () {
	$("img").click(function () {
		$(this).attr('src',"");
	})
});
$(document).on("click","img",function(){
    var path=$(this).attr('src');
    showImage(path);

    function showImage(fileCallpath) {
        $('#result').css("display","flex").show();
        $('#result')
        .html("<img src='"+fileCallpath+"' >")
        .animate({width:'100%',height:'100%'},1000)
    }
})
 */

function prev_image() {
    for(i=1; i<=9; i++){ //.attr().attr()연달아 사용할 수 있다.
		let img = $(".image").attr({'src':'http://127.0.0.1:5500/pboard-image/%EB%A0%88%EC%9D%B4%EC%96%B4%208.png',
							"class":"photo"});
	$("body").append(img);
	}
	$('.photo').click(function() {
		$(this).removeAttr("src");
	})
}

$(document).ready(function() {
	for(i=1; i<=9; i++){ //.attr().attr()연달아 사용할 수 있다.
		let img = $("<img>").attr({'src': './image/photo_'+i+'.jpg',
							"class":"photo"});
	$("body").append(img);
	}
	$('.photo').click(function() {
		$(this).removeAttr("src");
	})
});