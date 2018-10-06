// 轮播图 开始
$(function(){
		//全部变量
		var m=0;
		function bgcolor(){
			if(m==0){
				$('.nav-wrap').css('backgroundColor','#C9D4E8')
			}else if(m==1){
				$('.nav-wrap').css('backgroundColor','#E5E5E5')
			}else if(m==2){
				$('.nav-wrap').css('backgroundColor','#FF6F38')
			}
			else if(m==3){
				$('.nav-wrap').css('backgroundColor','#ECE6EA')
			}
			else if(m==4){
				$('.nav-wrap').css('backgroundColor','#FF2C6F')
			}else{
				$('.nav-wrap').css('backgroundColor','#FE9727')
			}
		}
		//封装函数 方便调用
		function run(){
			timer=setInterval(function(){
				//下标自增
				m++;
				//判断下标
				if(m>5){
					m=0;
				}
				bgcolor();
				//显示图片
				$('.img li').eq(m).addClass('show').siblings('li').removeClass('show');
				//显示数字
				$('.num li').eq(m).addClass('show').siblings('li').removeClass('show');
			    // m++;
			},2000)
		
		}
		//首次调用函数 轮播
		run();
		
		//设置数字显示对应的图片
		//容器鼠标移入移出
		$('#box').mouseenter(function(){
			//清除定时器
			clearInterval(timer);
			
			//鼠标移入数字 显示对应的图片
			$('.num li').mouseenter(function(){
				//获取当前li的下标
				m=$(this).index();
				//显示图片
				$('.img li').eq(m).addClass('show').siblings('li').removeClass('show');
				//显示数字
				$('.num li').eq(m).addClass('show').siblings('li').removeClass('show');		
			})
			
		}).mouseleave(function(){
			//继续轮播
			run();
		})

	
	})

// 轮播图 结束



// 选项卡 开始

	$(function(){
		//全部变量
		var n=0;
		//封装函数 方便调用
		function run1(){
			timer1=setInterval(function(){
				//下标自增
				n++;
				//判断下标
				if(n>1){
					n=0;
				}
				//显示图片
				$('#tab li').eq(n).addClass('selected').siblings('li').removeClass('selected');
				//显示数字
				$('#cont div').eq(n).addClass('show').siblings('div').removeClass('show');
			},2000)
		
		}
		//首次调用函数 轮播
		run1();

		//li标签的鼠标移入事件
	$('#tab li').mouseenter(function(){
		clearInterval(timer1);
		//显示当前li的背景色其余li的背景去掉
		//对应的内容 需要当前li的下标
		n=$(this).index();
		$('#tab li').eq(n).addClass('selected').siblings('li').removeClass('selected');
				//显示数字
				$('#cont div').eq(n).addClass('show').siblings('div').removeClass('show');
	}).mouseleave(function(){
        run1();
	})
});
// 选项卡 结束
// 当鼠标滑动到指定的文档高度时，显示搜索框 开始
/*下拉搜索框*/ 
	$(window).scroll(function(){
		var d=$(window).height();
		var a=$(document).scrollTop();
		if(a>=d){
			$('#big-nav').css('opacity','1').css('height','50px').css('transition','all 0.3s');
			// $('.left-nav').css('display','block');
		}else{
			$('#big-nav').css('opacity','0').css('height','0px').css('transition','all 0.1s');
		    // $('.left-nav').css('display','none');
		}
	})
// 当鼠标滑动到指定的文档高度时，显示搜索框 结束
// 换一换 特效 开始
$(function(){
	var arr1=['1','2','3','4','5','6','7','8','9','10','1','2','3','4','5','6','7','8','9','10','1','2','3','4','5','6','7','8','9',]
	function demo(){
		$('.brand-lest1').html(`<li class="brand-item huan">
				<a href="javascript:;">
					<i class="iconfont icon-huanyihuan"></i>
					<span class="btn-text">换一批</span>
				</a>
			</li>`);
		for(var i = 0; i<29; i++){
			var HTML = $('.brand-lest1').html();
			var rand = Math.floor(Math.random()*29+1);
			$('.brand-lest1').html(`<li class="brand-item" style="width:121px;">
					<a href="javascript:;">
						<div class="brand-img" style="width:122px;">
							<img src="assets/images/Huan/list`+rand+`.png">
						</div>
						<div class="brand-yin" style="width:122px;">`+`<b class="brand-b">`+arr1[rand]+`</b>`+`
							<div class="brand-click">`+`<a class="brand-a" href="javascript:;" style="color:#fff;">点击进入</a>`+`
							</div>	
						</div>
					</a>
				</li>`+HTML);
		}
	}
	demo();
	
	$('.huan').live('click',function(){
		demo();
		var len = $('.brand-item').length - 1;
		for(let i=0; i<len; i++){
			//let ES6 定义变量 ，块级作用域，一个｛｝就是一个作用域
			rotate(i);
		}
		function rotate(i){
			var random = Math.random()*1000;
			setTimeout(function(){
				$('.brand-item').eq(i).css({'transition':'all 1s','transform':'rotateY(360deg)'});
			},random);
		}
		
	})
})
// 换一换 特效 结束
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
// 左侧导航栏 开始
$(function(){
	var c=$(window).height();
		var a=$(document).scrollTop();
		if(a>=c){
			$('#left-nav').css({'height':'369px','width':'36px','transition':'all 0s'});
		}else{
			$('#left-nav').css({'height':'0px','width':'0px','transition':'all 0s'});
		}
	$(window).scroll(function(){
		var c=$(window).height();
		var a=$(document).scrollTop();
		if(a>=c){
			$('#left-nav').css({'height':'369px','width':'36px','transition':'all 1s'});
		}else{
			$('#left-nav').css({'height':'0px','width':'0px','transition':'all 1s'});
		}
	})

})
// 楼层
$(function(){
	function nav(j){
			if(j==0){
				$('.left-nav-a').eq(0).css('background','#64c333');
			}else if(j==1){
				$('.left-nav-a').eq(1).css('background','#000');
			}else if(j==2){
				$('.left-nav-a').eq(2).css('background','#EA5F8D');
			}else if(j==3){
				$('.left-nav-a').eq(3).css('background','#0AA6E8');
			}else if(j==4){
				$('.left-nav-a').eq(4).css('background','#64C333');
			}else if(j==5){
				$('.left-nav-a').eq(5).css('background','#F15453');
			}else if(j==6){
				$('.left-nav-a').eq(6).css('background','#19C8A9');
			}else if(j==7){
				$('.left-nav-a').eq(7).css('background','#000');
			}
	
	}

	$('.left-nav-a').click(function(){
		var index=$(this).index();
		console.log($(this).index())

		var top=$('.tm-cen').eq(index-1).offset().top;

		console.log(top);

		$('html').animate({scrollTop:top},500);
		$('.left-nav-a').css('background','rgba(0,0,0,0.6)');
		nav(index-1);
	})

})
$(function(){
	
	$('.tm-1').hover(function(){
		$(this).find('.right-nav-zi').css({'transform': 'translate(5px)',transition:' all 1s',opacity: 1})
	},function(){
		$(this).find('.right-nav-zi').css({'transform': 'translate(-30px)',transition:' all 1s',opacity: 0})
	})

})
// 左侧导航栏 结束

