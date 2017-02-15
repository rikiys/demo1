$(function(){
	//地图hover
	$('.map').hover(function(){
		$('.china_map').css({
			'display':'block',
		});
		$(this).css('background','#fff')
	},function(){
		$('.china_map').css('display','none');
		$(this).css('background','#e3e4e5')
	});
	//省份替换
	$('.map_item>a').click(function(){
		$('.bj').eq($(this).index()).html($(this).html())
	});
	//我的京东
	$('.fr').find('.fore').eq('0').hover(function(){
		$('.my_jd_list').css('display','block');
		$(this).css('background','#fff')
		},function(){
			$('.my_jd_list').css('display','none');
			$(this).css('background','#e3e4e5')	
		});	
		//客户服务
		$('.fr').find('.fore').eq('1').hover(function(){
		$('.fuwu').css('display','block');
		$(this).css('background','#fff')
		},function(){
			$('.fuwu').css('display','none');
			$(this).css('background','#e3e4e5')	
		})
		//网站导航
		$('.fr').find('.fore').eq('2').hover(function(){
		$('.daohang').css('display','block');
		$(this).css('background','#fff')
		},function(){
			$('.daohang').css('display','none');
			$(this).css('background','#e3e4e5')	
		})
		//家用电器等二级导航
		$('.item-menu li').mouseover(function(){
		//鼠标悬浮li时,当前left_nav_inner索引下标对应显示  其他隐藏  
			$('.left_nav_inner').eq($(this).index()).show().siblings('.left_nav_inner').hide();
			$('.left_nav').show();
		}).mouseout(function(){
			$('.left_nav_inner').hide();
			$('.left_nav').hide();
		})
		//$('.left_nav').mouseover(function(){
			// $('.left_nav_inner').show();
		// 	$('.left_nav').show();
		// }).mouseout(function(){
			// $('.left_nav_inner').hide();
			// $('.left_nav').hide();
		//});

	//	轮播图	
	var index = 0;
	var timer = null;
	$('.slider_main').mouseover(function(){
		clearInterval(timer);
		$('.jiantou').show();
	}).mouseout(function(){
		timer = setInterval(change,5000);
		$('.jiantou').hide();
	});
	//定时器
	timer = setInterval(change,5000);
	//鼠标悬浮小圆点时触发
	$('.circle i').mouseover(function(){
		index = $(this).index();
		changes($('.slider_list li'),$('.circle i'),index);
	});
	$('.left').click(function(){	
		index--;
		if(index<0) {
			index = $('.slider_list li').length -1;
		}
		changes($('.slider_list li'),$('.circle i'),index);
	})
	$('.right').click(function(){
		index++;
		if(index >=$('.slider_list li').length) {
			index = 0;
		}
		changes($('.slider_list li'),$('.circle i'),index);
	});
	//实现图片的轮播效果
	function change() {
		index++;
		//制定索引的范围
		if (index >=$('.slider_list li').length) {
			index=0;
			}
		changes($('.slider_list li'),$('.circle i'),index);	
	}
	//改变当前的类，实现图片切换，还有圆点样式的切换
	function changes(img,circles,index) {
		//清除其他图片li  class
		img.removeClass('current_pic');
		//清除其他小圆点li  class
		circles.removeClass('active');
		//给当前选中图片添加类名
		img.eq(index).addClass('current_pic');
		//给当前选中小圆点添加类名
		circles.eq(index).addClass('active');
	}
		//	倒计时
		var time = 7200;  //总秒数  
		setInterval(function(){
			var hour = 0;
			var minute = 0;
			var second = 0;  //初始值
			if(time>0) {
				 //一分钟60秒，一小时60分钟，一天24小时
				hour = Math.floor(time / (60*60));  //分 * 秒 = 小时
				minute = Math.floor(time / 60) - (hour*60);  //秒 *60=分
				second = Math.floor(time) - (hour *60 * 60) - (minute * 60);  //秒
			}
			if(hour <=9) {
				hour = '0' + hour;
			}
			if (minute <=9) {
				minute = '0' + minute;
			}
			if (second <=9) {
				second = '0' + second;
			}
			$('.clock_hour').html(hour);
			$('.clock_minute').html(minute);
			$('.clock_second').html(second);
			time--;	
		},1000);
		//新闻选项卡
		$('.tab_header a').mouseenter(function(){	
			$(this).addClass('news_first').siblings('a').removeClass('news_first');
			$('.news_list').eq($(this).index()).addClass('news_current').siblings('ul').removeClass('news_current');
		});
		$('.tab_header a').eq('0').mouseenter(function(){
			$('.tab_line').css('transform',' translateX(0px)')
		});
		$('.tab_header a').eq('1').mouseenter(function(){
			$('.tab_line').css('transform',' translateX(52px)');
		})
				
	//排行榜选项卡
	$('.charts_top a').mouseenter(function(){
		$('.charts_content_item').eq($(this).index()).addClass('charts_content_first').siblings('.charts_content_item').removeClass('charts_content_first');
	})
	$('.charts_top a').eq('0').mouseenter(function(){
		$('.charts_line').css('left','0px')
	})
	$('.charts_top a').eq('1').mouseenter(function(){
		$('.charts_line').css('left','72px')
	})
	$('.charts_top a').eq('2').mouseenter(function(){
		$('.charts_line').css('left','149px')
	})
	$('.charts_top a').eq('3').mouseenter(function(){
		$('.charts_line').css('left','226px')
	})
	$('.charts_top a').eq('4').mouseenter(function(){
		$('.charts_line').css('left','304px')
	})
	//右边侧栏(悬浮)
	$('.toolbar_tabs .toolbar_tab').mouseover(function(){
		$(this).css({background:'#c81623'});
		$('.tab-tip').css('display','none');
		$('.toolbar_tabs .tab_txt').eq($(this).index()).show().animate({
			left:'-60px',
			transition:'0.1s'
		})
	}).mouseout(function(){
		$(this).css('background','#7a6e6e');
		$('toolbar_tabs .tab-jdvip .tab-tip').css('display','block');
		$('.toolbar_tabs .tab_txt').eq($(this).index()).hide().css('left','35px')
	});		
	//右边返回顶部(悬浮)
	$('.toolbar-footer .toolbar_tab').hover(function(){
		$(this).css({'background':'#c81623'});
		$('.toolbar-footer .tab_txt').eq($(this).index()).css('left','-60px');
	},function(){
		$(this).css('background','#7a6e6e');
		$('.toolbar-footer .tab_txt').eq($(this).index()).css('left','35px');		
	});
	//监听浏览器滚动事件
	$(window).scroll(function(){
		//获取浏览器滚动时产生的高度
		var Top = $(document).scrollTop();
		//固定导航栏
		if (Top >= 650 ) {
			$('.search_fix').show();
		} else {
			$('.search_fix').hide();
		};
// 		左侧边栏
		if ( Top >=1600) {
			$('.lift').show();
			$('.lift_item').eq('0').addClass('lift_item_on').siblings('.lift_item').removeClass('lift_item_on');
		} else {
			$('.lift').hide();
			$('.lift_item').eq('0').removeClass('lift_item_on');
		}
//服饰美妆
		if ( Top >=2300 ) {
			$('.lift_item').eq('1').addClass('lift_item_on').siblings('.lift_item').removeClass('lift_item_on');
		} else {
			$('.lift_item').eq('1').removeClass('lift_item_on');
		}
//		家电手机
		if ( Top >= 2900 ) {
			$('.lift_item').eq('2').addClass('lift_item_on').siblings('.lift_item').removeClass('lift_item_on');
		} else {
			$('.lift_item').eq('2').removeClass('lift_item_on');
		}
//		电脑数码
		if ( Top >= 3400 ) {
			$('.lift_item').eq('3').addClass('lift_item_on').siblings('.lift_item').removeClass('lift_item_on');
		} else {
			$('.lift_item').eq('3').removeClass('lift_item_on');
		}
//		3C运动
		if ( Top >= 3900 ) {
			$('.lift_item').eq('4').addClass('lift_item_on').siblings('.lift_item').removeClass('lift_item_on');
		} else {
			$('.lift_item').eq('4').removeClass('lift_item_on');
		}
//		爱吃
		if ( Top >= 4700 ) {
			$('.lift_item').eq('5').addClass('lift_item_on').siblings('.lift_item').removeClass('lift_item_on');
		} else {
			$('.lift_item').eq('5').removeClass('lift_item_on');
		}
		//母婴家居
		if ( Top >= 5300 ) {
			$('.lift_item').eq('6').addClass('lift_item_on').siblings('.lift_item').removeClass('lift_item_on');
		} else {
			$('.lift_item').eq('6').removeClass('lift_item_on');
		}
		//图书汽车
		if ( Top >= 5700 ) {
			$('.lift_item').eq('7').addClass('lift_item_on').siblings('.lift_item').removeClass('lift_item_on');
		} else {
			$('.lift_item').eq('7').removeClass('lift_item_on');
		}
		//虚拟
		if ( Top >= 6400 ) {
			$('.lift_item').eq('8').addClass('lift_item_on').siblings('.lift_item').removeClass('lift_item_on');
		} else {
			$('.lift_item').eq('8').removeClass('lift_item_on');
		}
		//还没逛够
		if ( Top >= 7200 ) {
			$('.lift_item').eq('9').addClass('lift_item_on').siblings('.lift_item').removeClass('lift_item_on');
		} else {
			$('.lift_item').eq('9').removeClass('lift_item_on');
		}
	});	
	//楼层跳转
	$('.lift_item .lift_btn').click(function(){
		var index = this.title;
		var id = '#index_' +index;
		// 按照每个的id值进行跳转，过渡时间为300ms
		$('html,body').animate({scrollTop:$(id).offset().top},300);//offset().top
	});	
	// 返回顶部
	$('.lift_item_top').click(function(){
		$('html,body').animate({scrollTop:0},300);
	});
	$('.toolbar-footer .back').click(function(){
		$('html,body').animate({scrollTop:0},300);
	});

	// 生活服务
	$('.service_list .service_item1').mouseover(function(){		
		$('.service_content').css('display','block');
		$('.service_list').css('top','210px');
		$('.service_content_head').show();
		$('.service_content_head span').eq($(this).index()).addClass('service_on1').siblings('span').removeClass('service_on1');
		$('.play div').eq($(this).index()).addClass('service_infoo').siblings('div').removeClass('service_infoo');
		$('.service_content_head span').eq($(this).index()).addClass('service_head_on').siblings('span').removeClass('service_head_on');
	});

	// 生活服务
	$('.close').click(function(){
			$('.service_content').hide();
			$('.service_list').css('top','0px');
		});	
	// 隐藏部分的头部
	$('.service_head').mouseover(function(){
		$('.service_content_head span').eq($(this).index()).addClass('service_head_on').siblings('span').removeClass('service_head_on');	
		$('.service_info').eq($(this).index()).addClass('service_infoo').siblings('.service_info').removeClass('service_infoo');	
	});
	


	// 爱逛下面的广告轮播悬浮
	$('.love_life_inner1').mouseover(function(){
		$(' .love_life_inner1 .logo_jiantou').show();
	}).mouseout(function(){
		$(' .love_life_inner1 .logo_jiantou').hide();	
	});
	//爱美丽
	$(' .love_life_inner2').mouseover(function(){
		$('.love_life_inner2 .logo_jiantou').show();
	}).mouseout(function(){
		$('.love_life_inner2 .logo_jiantou').hide();	
	});
//	家电馆
	$('.love_life_inner3').mouseover(function(){
		$(' .love_life_inner3 .logo_jiantou').show();
	}).mouseout(function(){
		$('.love_life_inner3 .logo_jiantou').hide();	
	});
//	搞基派
	$('#index_3 .love_life_inner3').mouseover(function(){
		$('#index_3 .love_life_inner3 .logo_jiantou').show();
	}).mouseout(function(){
		$('#index_3 .love_life_inner3 .logo_jiantou').hide();	
	});
	//	玩3C
	$('#index_5 .love_life_inner1').mouseover(function(){
		$('#index_5 .love_life_inner1 .logo_jiantou').show();
	}).mouseout(function(){
		$('#index_5 .love_life_inner1 .logo_jiantou').hide();	
	});
	//	爱运动
	$('#index_5 .love_life_inner2').mouseover(function(){
		$('#index_5 .love_life_inner2 .logo_jiantou').show();
	}).mouseout(function(){
		$('#index_5 .love_life_inner2 .logo_jiantou').hide();	
	});
	//	爱宝宝
	$('#index_7 .love_life_inner1').mouseover(function(){
		$('#index_7 .love_life_inner1 .logo_jiantou').show();
	}).mouseout(function(){
		$('#index_7 .love_life_inner1 .logo_jiantou').hide();	
	});
	//	爱家
	$('#index_7 .love_life_inner2').mouseover(function(){
		$('#index_7 .love_life_inner2 .logo_jiantou').show();
	}).mouseout(function(){
		$('#index_7 .love_life_inner2 .logo_jiantou').hide();	
	});
	//	爱阅读
	$('#index_8 .love_life_inner1').mouseover(function(){
		$('#index_8 .love_life_inner1 .logo_jiantou').show();
	}).mouseout(function(){
		$('#index_8 .love_life_inner1 .logo_jiantou').hide();	
	});
	//	爱车
	$('#index_8 .love_life_inner2').mouseover(function(){
		$('#index_8 .love_life_inner2 .logo_jiantou').show();
	}).mouseout(function(){
		$('#index_8 .love_life_inner2 .logo_jiantou').hide();	
	});	


	// 爱逛下面的广告轮播点击
	var num = 2;
	//	爱逛
	$(' .love_life_inner1 .logo_jiantou i').click(function(){
		if (num%2==0) {
			$(' .love_life_inner1 .logo_list1').hide(),
			$(' .love_life_inner1 .logo_list2').show();
			num++;
		} else{
			$('.love_life_inner1 .logo_list1').show(),
			$('.love_life_inner1 .logo_list2').hide();
			num++;
		}
	});
	//	爱美丽
	$('#index_2 .love_life_inner2 .logo_jiantou i').click(function(){
		if (num%2==0) {
			$('#index_2 .love_life_inner2 .logo_list1').hide(),
			$('#index_2 .love_life_inner2 .logo_list2').show();
			num++;
		} else{
			$('#index_2 .love_life_inner2 .logo_list1').show(),
			$('#index_2 .love_life_inner2 .logo_list2').hide();
			num++;
		}
	});
	//	家电馆
		$('.love_life_inner3 .logo_jiantou i').click(function(){
		if (num%2==0) {
			$('.love_life_inner3 .logo_list1').hide(),
			$('.love_life_inner3 .logo_list2').show();
			num++;
		} else{
			$('.love_life_inner3 .logo_list1').show(),
			$('.love_life_inner3 .logo_list2').hide();
			num++;
		}
	});
	//搞基派
		$('#index_3 .love_life_inner2 .logo_jiantou i').click(function(){
		if (num%2==0) {
			$('#index_3 .love_life_inner2 .logo_list1').hide(),
			$('#index_3 .love_life_inner2 .logo_list2').show();
			num++;
		} else{
			$('#index_3 .love_life_inner2 .logo_list1').show(),
			$('#index_3 .love_life_inner2 .logo_list2').hide();
			num++;
		}
	});
	//		玩3C
		$('#index_5 .love_life_inner1 .logo_jiantou i').click(function(){
		if (num%2==0) {
			$('#index_5 .love_life_inner1 .logo_list1').hide(),
			$('#index_5 .love_life_inner1 .logo_list2').show();
			num++;
		} else{
			$('#index_5 .love_life_inner1 .logo_list1').show(),
			$('#index_5 .love_life_inner1 .logo_list2').hide();
			num++;
		}
	});
		//爱运动
		$('#index_5 .love_life_inner2 .logo_jiantou i').click(function(){
		if (num%2==0) {
			$('#index_5 .love_life_inner2 .logo_list1').hide(),
			$('#index_5 .love_life_inner2 .logo_list2').show();
			num++;
		} else{
			$('#index_5 .love_life_inner2 .logo_list1').show(),
			$('#index_5 .love_life_inner2 .logo_list2').hide();
			num++;
		}
	});
	//		爱宝宝
		$('#index_7 .love_life_inner1 .logo_jiantou i').click(function(){
		if (num%2==0) {
			$('#index_7 .love_life_inner1 .logo_list1').hide(),
			$('#index_7 .love_life_inner1 .logo_list2').show();
			num++;
		} else{
			$('#index_7 .love_life_inner1 .logo_list1').show(),
			$('#index_7 .love_life_inner1 .logo_list2').hide();
			num++;
		}
	});
		//爱家
		$('#index_7 .love_life_inner2 .logo_jiantou i').click(function(){
		if (num%2==0) {
			$('#index_7 .love_life_inner2 .logo_list1').hide(),
			$('#index_7 .love_life_inner2 .logo_list2').show();
			num++;
		} else{
			$('#index_7 .love_life_inner2 .logo_list1').show(),
			$('#index_7 .love_life_inner2 .logo_list2').hide();
			num++;
		}
	});
	//		爱阅读
		$('#index_8 .love_life_inner1 .logo_jiantou i').click(function(){
		if (num%2==0) {
			$('#index_8 .love_life_inner1 .logo_list1').hide(),
			$('#index_8 .love_life_inner1 .logo_list2').show();
			num++;
		} else{
			$('#index_8 .love_life_inner1 .logo_list1').show(),
			$('#index_8 .love_life_inner1 .logo_list2').hide();
			num++;
		}
	});
	//爱车
	$('#index_8 .love_life_inner2 .logo_jiantou i').click(function(){
		if (num%2==0) {
			$('#index_8 .love_life_inner2 .logo_list1').hide(),
			$('#index_8 .love_life_inner2 .logo_list2').show();
			num++;
		} else{
			$('#index_8 .love_life_inner2 .logo_list1').show(),
			$('#index_8 .love_life_inner2 .logo_list2').hide();
			num++;
		}
	});
	// 点击登录模块
	$('.tab-jdvip').click(function(){
		$('.jd_login').show();
		$('.ui-mask').show();
		 $('.tab_txt').hide().css('left','35px')
		
	});
	$('.tab-love').click(function(){
		$('.jd_login').show();
		$('.ui-mask').show();
		 $('.tab_txt').hide().css('left','35px')
		
	});	
	$('.tab-kf').click(function(){
		$('.jd_login').show();
		$('.ui-mask').show();
		 $('.tab_txt').hide().css('left','35px')
		
	});	
	$('.jd_login_header .fa-close').click(function(){
		$('.jd_login').hide();
		$('.ui-mask').hide();
	})
	// 购物车点击模块
	$('.tab-cart').click(function(){
		$('.tool_bar').css('right','270px');
		$('.toolbar_hide_car').show();
		$('.toolbar_hide_foot').hide();
	});
	// 关闭
	$('.guanbi').click(function(){
		$('.tool_bar').css('right','0px');
		$('.toolbar_hide_car').css('right','0px');
		$('.toolbar_hide_foot').css('right','0px');
	});
	// 我的足迹点击模块
	$('.tab-history').click(function(){
		$('.tool_bar').css('right','270px');
		$('.toolbar_hide_car').hide();
		$('.toolbar_hide_foot').show();
	});

})
