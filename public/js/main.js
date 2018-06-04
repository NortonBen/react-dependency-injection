(function($) {
	"use strict"
	
	$(window).on('scroll', function() {
		// Fixed Nav
		var wScroll = $(this).scrollTop();
		wScroll > $('header').height() ? $('#nav-header').addClass('fixed') : $('#nav-header').removeClass('fixed');
		
		// Back to top appear
		wScroll > 740 ? $('#back-to-top').addClass('active') : $('#back-to-top').removeClass('active')
	});
	
	// Back to top
	$('#back-to-top').on("click", function(){
		$('body,html').animate({
            scrollTop: 0
        }, 500);
	});
	
	// Mobile Toggle Btn
	$('#nav-header .nav-collapse-btn').on('click',function(){
		$('#main-nav').toggleClass('nav-collapse');
	});
	
	// Search Toggle Btn
	$('#nav-header .search-collapse-btn').on('click',function(){
		$(this).toggleClass('active');
		$('.search-form').toggleClass('search-collapse');
	});

})(jQuery);