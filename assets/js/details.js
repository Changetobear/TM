$(function(){
		//small中的鼠标移动事件
		$('.J_ImgBooth').mousemove(function(e){
			//move big 显示
			$('#move,#big').show();
			
			//获取鼠标的坐标
			var x=e.pageX-$(this).offset().left;
			var y=e.pageY-$(this).offset().top;
			// console.log(x+":"+y);
			//鼠标要居中-宽高一半
			var x=x-$('#move').width()/2;
			var y=y-$('#move').height()/2;
			
			//判断x y 的边界
			if(x<=0){
				x=0
			}else if(x>=$('.J_ImgBooth').width()-$('#move').width()){
				x=$('.J_ImgBooth').width()-$('#move').width()
			}
			
			if(y<=0){
				y=0;
			}else if(y>=$('.J_ImgBooth').height()-$('#move').height()){
				y=$('.J_ImgBooth').height()-$('#move').height()
			}
			
			
			//绑定给move
			// console.log(x+":"+y)
			$('#move').css({left:x,top:y});
			
			//大图和小图 比例关系
			var scale= $('#big>img').width()/$('.J_ImgBooth>img').width();
			// console.log(scale);
			//设置大图移动
			$('#big>img').css({left:-x*scale,top:-y*scale});
			//改变大图
			$('#big>img').attr('src',$('.small_pic').attr('src'));
		
		}).mouseout(function(){
			//move big 隐藏
			$('#move,#big').hide();
		});
		
		//点击更换图片
		$('.dian>li>img').click(function(){
			//给small中img图片=当前的img src
			$('.J_ImgBooth>.small_pic').attr('src',$(this).attr('src'))
		})
	})



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
		// clearInterval(timer);
		var top = $(document).scrollTop();
		timer3= setInterval(function(){
			top = top - 100;
			if(top<0){
				$(document).scrollTop('0');
				clearInterval(timer3);
			}
			$(document).scrollTop(top);
		},1)
	})
})
// 右侧导航栏 结束