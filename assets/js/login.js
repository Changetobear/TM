// 登录切换

$(function(){
		$('.Enter .icon-wx_l').click(function(){
		$('.Code').css('display','block');
	});
		$('.Code .icon-imagevector').click(function(){
		$('.Code').css('display','none');
	})
})

// 账号验证
$(function(){
	$('.button').eq(0).click(function(){
		// e.stopPropagation();
		$.ajax({
			url:'assets/php/login.php',
			type:'post',
			data:$('.form').serialize(),
			async:true,
			success:function(msg){
				console.log(msg);
			}
		})
	})

})