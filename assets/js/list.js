
// 右侧导航栏 开始
$(function(){
		var d=$(document).scrollTop();
		if(d>=300){
			$('.right-nav-tm7').css('opacity','1').css('transition','all 0s');
		}else{
			$('.right-nav-tm7').css('opacity','0').css('transition','all 0s');
		}
			$(window).scroll(function(){
			var d=$(document).scrollTop();
			if(d>=300){
				$('.right-nav-tm7').css('opacity','1').css('transition','all 1.5s');
			}else{
				$('.right-nav-tm7').css('opacity','0').css('transition','all 1.5s');
			}
		})
})
$(function(){
	$('.right-nav-tm7').click(function(){
		var top = $(document).scrollTop();
		timer = setInterval(function(){
			top = top - 100;
			if(top<0){
				$(document).scrollTop('0');
				clearInterval(timer);
			}
			$(document).scrollTop(top);
		},1)
	})
})
// 右侧导航栏 结束