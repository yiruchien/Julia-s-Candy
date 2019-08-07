$(document).ready(function() {

	/*----.menu >> 漢堡選單收合----*/
   $('.showmenu').on('click',  function(e){
    	e.preventDefault();
    	$('body').toggleClass('menu-show');
  	});

    /*----.menu >> 點選 menu 連結 到指定的區塊----*/
   $(".menu a[href^='#']").click(function(e) {
		e.preventDefault();
		$("body, html").animate({
			scrollTop: $($(this).attr("href")).offset().top-50} ,1500 );
		$('body').removeClass('menu-show');
	});

	/*----.top >> 點選 top 按鈕 回到最上方位置----*/  
    $('.top').click(function() {
    	event.preventDefault();
    	$('html,body').animate({ scrollTop: 0 }, 'slow'); 
    });

    
    $(window).scroll(function() {
    	/*----.top >> top 按鈕 在捲軸位置大於 300 的時候才會出現----*/
        if ($(this).scrollTop() > 300){
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }

        /*----index.html .content >> 內容顯示控制----*/
        $(".content").children().children().each(function() {
        /*指定 .content 下層(.feature, .chef...) 的下層 (.feature-content, .chef-content...) 內元素*/
  			const position = $(this).offset().top; 	// 捲軸移動到的 .xxx-content 距離網頁上方的位置
  			const scroll = $(window).scrollTop();   // 目前捲軸移動到的位置
  			const windowHeight = $(window).height();  // 目前網頁視窗的可視範圍的高度
  			const move = $(this).height(); 	// 捲軸移動到的 .xxx-content 的高度

  			if($(window).width() > 414)	{
  				if (scroll > position - windowHeight-move*0.6) {
   					$(this).addClass("active");
  				}
  				if (scroll < 10) {
   					$(this).removeClass("active");
  				}
  			} else {
  				if (scroll > position - windowHeight-move*0.8) {
   					$(this).addClass("active");
  				}
  				if (scroll < 10) {
   					$(this).removeClass("active");
  				}
  			}
 		});
    });

	const scrollnum = $(window).scrollTop(); 
	if (scrollnum >= 0)  {
    /*----index.html .content >> 內容顯示控制----*/
       	$(".content").children().children().each(function() {
       	/*指定 .content 下層(.feature, .chef...) 的下層 (.feature-content, .chef-content...) 內元素*/
  			const position = $(this).offset().top; 	// 捲軸移動到的 .xxx-content 距離網頁上方的位置
  			const scroll = $(window).scrollTop();   // 目前捲軸移動到的位置
  			const windowHeight = $(window).height();  // 目前網頁視窗的可視範圍的高度
  			const move = $(this).height(); 	// 捲軸移動到的 .xxx-content 的高度

  			if($(window).width() > 414)	{
  				if (scroll > position - windowHeight-move*0.6) {
   					$(this).addClass("active");
  				}
  				if (scroll < 10) {
   					$(this).removeClass("active");
  				}
  			} else {
  				if (scroll > position - windowHeight-move*0.8) {
   					$(this).addClass("active");
  				}
  				if (scroll < 10) {
   					$(this).removeClass("active");
  				}
  			}
 		});
	}else {return false;}

    /*----.shop-list-like >> like 按鈕 的點選控制----*/
    $('.shop-list-like').on('click',  function(e){
    	e.preventDefault();
      	$(this).toggleClass('active');
  	});

    /*----.shop-menu >> shop.html 左側選單的控制----*/
    $('.shop-menu > ul > li > a').on('click',  function(e){
    	e.preventDefault();
    	$(this).parent().siblings().find('ul').removeClass('active');
    	$(this).parent().siblings().find('a').removeClass('active');
    	$(this).parent().find('ul').toggleClass('active');
    	$(this).toggleClass('active');
    });

});

