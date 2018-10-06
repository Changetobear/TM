// 请输入手机号码
$(function(){
	$('.num').blur(function(){
		console.log($('.num').val())
		if($('.num').val()==''){
			$('.please').css('display','block');
		}else{
			$('.please').css('display','none');
		}
	})
	$('.num').blur(function(){
		if($('.num').val().length>0 && $('.num').val().length<11){
			$('.please2').css('display','block');
		}else{
			$('.please2').css('display','none');
		}
	})

})
$(function(){
	$('.small-honeybee').mousedown(function(e){
		var e=e || window.event;
		var bigleft = $('.registered-box').offset().left;

		var bigtop = $('.registered-box').offset().top;

		var offset=$(this).offset();
		var x=e.pageX-offset.left;
		var y=e.pageY-offset.top;
		$(document).mousemove(function(evt){
			var ll=evt.pageX-x-bigleft;
			var tt=evt.pageY-y-bigtop;
			// var x=x-$('.small-honeybee').width()/2;
			// var y=y-$('.small-honeybee').height()/2;
			console.log(ll+':'+tt);
			if(ll<=0){
				ll=0
			}else if(ll>=$('.registered-box').width()-$('.small-honeybee').width()){
				ll=$('.registered-box').widht()-$('.small-honeybee').width();
			}
			if(tt<=0){
				tt=0;
			}else if(tt>=$('.registered-box').height()-$('.small-honeybee').height()){
				tt=$$('.registered-box').height()-$('.small-honeybee').height()
			}
			$('.small-honeybee').css({left:ll+'px',top:tt+'px','position':'absolute','z-index':100});
		})
	})
	$(document).mouseup(function(){
		$(document).off('mousemove');
	})
})
//遮罩
$(function(){
		$(document).ready(function(){
			$('.agreement').css({
				width:$('.agreement').width(),
				height:$('.agreement').height(),
				display:'block'
			})
		$('.agreement').show();
	})
})
//遮罩点击
$(function(){
	$('.btn-2').click(function(){
		$('.agreement').fadeOut(1000);
	})
})