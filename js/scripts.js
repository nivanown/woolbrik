$(document).ready(function(){

	/*- animation -*/
	jQuery('.first-animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animate__animated animate__fadeInLeft',
		offset: 100    
	}); 

	jQuery('.second-animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animate__animated animate__fadeInRight',
		offset: 100    
	}); 

	jQuery('.third-animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animate__animated animate__fadeInUp',
		offset: 100    
	});  

	jQuery('.fourth-animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animate__animated animate__fadeInDown',
		offset: 100    
	});

	jQuery('.five-animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animate__animated animate__fadeInTopLeft',
		offset: 100    
	}); 

	jQuery('.six-animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animate__animated animate__fadeInTopRight',
		offset: 100    
	}); 

	/*- menu-btn -*/
	var siteToggle = $('.menu-btn'),
		siteMenu= $('.header__bottom-panel');


	siteToggle.on('click', function(){
		$(this).toggleClass("collapsed");
		  siteMenu.toggleClass("show");
		$('body').toggleClass('overflow-hd');
	});

	/*- promo__slider -*/
	$('.promo__slider').slick({
		arrows: true,
		dots: false,
		infinite: true,
		speed: 500,
		cssEase: 'linear'
	});

	/*- advantages-slider -*/
	$('.advantages-slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		speed: 500,
		responsive: [
			{
			breakpoint: 1199,
			settings: {
				slidesToShow: 2
				}
	    	},
	    	{
			breakpoint: 767,
			settings: {
				slidesToShow: 1
				}
	    	},
	    	{
			breakpoint: 580,
			settings: {
				slidesToShow: 1
				}
	    	}
	  	]
	});

	/*- product-slider -*/
	$('.product-slider__big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		infinite: true,
		asNavFor: '.product-slider__small'
	});

	$('.product-slider__small').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.product-slider__big',
		dots: false,
		centerMode: false,
		infinite: false,
		focusOnSelect: true
	});

	/*- to-top -*/
	$('.to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 900);
		return false;
	});

	/*- tabs-wrapper -*/
	$('.gl-tabs').each(function() {
		let ths = $(this);
		ths.find('.gl-tabs__content__item').not(':first').hide();
		ths.find('.gl-tabs__nav__item').click(function() {
			ths.find('.gl-tabs__nav__item').removeClass('active').eq($(this).index()).addClass('active');
			ths.find('.gl-tabs__content__item').hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass('active');
	});

});











