
// 高仿ajax瀑布流
$(function(){
	demo();
	function rand(index,value){
		return Math.floor(Math.random()*109)+1;
	}
	console.log(rand(1,110))
	function demo(){
		var data = [
			{"src":'list ('+rand(1,109)+').jpg','title':'墨西哥牛油果','des':'天然种植,营养博士','price':'1','money':'59.8'},
			{"src":'list ('+rand(1,109)+').jpg','title':'南非巨无霸西柚','des':'2.1kg,350-450g','price':'2','money':'59.8'},
			{"src":'list ('+rand(1,109)+').jpg','title':'泰国17度甜山竹','des':'纯净国度，甜度17°','price':'3','money':'59.8'},
			{"src":'list ('+rand(1,109)+').jpg','title':'马来西亚猫山王','des':'醇香软糯，冰爽甜美','price':'4','money':'59.8'},
			{"src":'list ('+rand(1,109)+').jpg','title':'美国新奇士脐橙','des':'阳光亲吻,美味多汁','price':'5','money':'59.8'},
			{"src":'list ('+rand(1,109)+').jpg','title':'菲律宾高地蕉3把','des':'高地栽培,13度或冷藏','price':'6','money':'59.8'},
			{"src":'list ('+rand(1,109)+').jpg','title':'佳沛巨无霸金果','des':'纯净产区，丰富维C','price':'7','money':'59.8'},
			{"src":'list ('+rand(1,109)+').jpg','title':'美国车厘子双J','des':'美国空运，1KG/9.5R','price':'8','money':'59.8'},
			{"src":'list ('+rand(1,109)+').jpg','title':'新西兰红玫瑰苹果','des':'淡雅果香，水润清脆','price':'1','money':'59.8'},
			{"src":'list ('+rand(1,109)+').jpg','title':'美国黄金车厘子','des':'20%以上甜度，28mm+','price':'2','money':'59.8'},
			{"src":'list ('+rand(1,109)+').jpg','title':'菲律宾进口大菠萝','des':'雨林认证,5-10度或冷藏','price':'3','money':'59.8'},
			{"src":'list ('+rand(1,109)+').jpg','title':'菲律宾进口木瓜','des':'非转基因,8-10度储藏','price':'4','money':'59.8'}
		];

		for(var i=0; i<data.length; i++){
			
			var HTML = $('.list').html();
			$('.list').html(HTML+`
				<li>
					<a href="javascript:void(0)" class="list-a">
						<div class="pic-wrap">
							<img src="assets/images/list(waterfall)/`+data[i].src+`" alt="l1">
							<span class="title">`+data[i].title+`</span>
						</div>
						<div class="info-wrap">
							<p>`+data[i].des+`</p>
							<div class="info">
								<div class="logo">
									<img src="assets/images/list(waterfall)/in3.jpg" alt="">
								</div>
								<div class="wrap-p">
									<p class="money">
										专柜价:<span>￥<del>`+data[i].price+`</del></span>
									</p>
									<p class="red">
										狂欢价:￥`+data[i].money+`
									</p>
								</div>
							</div>
							<div class="btn">
								<button>立即购买 ></button>
							</div>
						</div>
					</a>
				</li>
			`);
			
			Index = $('.list li').index();
			if((Index+1)%4==0){
				$('.list li').eq(Index).addClass('last');
			}
		}	
	}
	$(window).scroll(function(){
		var t=$(window).height();
		var h=$(document).scrollTop();
		var y=$(document).height();
		if(y-h-t<960 && y<240000){
			demo();
		}
	})
});



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
		// clearInterval(time5);
		var top = $(document).scrollTop();
		timer5= setInterval(function(){
			top = top - 100;
			if(top<0){
				$(document).scrollTop('0');
				clearInterval(timer5);
			}
			$(document).scrollTop(top);
		},1)
	})
})
// 右侧导航栏 结束