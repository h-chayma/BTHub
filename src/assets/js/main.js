/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. RTL Multi color Toggoler 
04. Sidebar Js
05. Search Js
06. Sticky Header Js
07. Data CSS Js
08. Nice Select Js
09. On Load Section Animation
10. Smooth Scroll Js
11. bd-hero-active Slider Js
12. bd-class-active Slider Js
13. bd-class-active-2 slider Js
14. bd-teacher-active Slider Js
15. bd-program-active Slider Js
16. bd-program-details-active Slider Js
17. bd-testimonial-active Slider Js
18. bd-testimonial-active-2 Slider Js
19. bd-blog-active Slider Js
20. bd-gallery-active Slider Js
21. bd-product-thumb-active  Slider Js
22. Masonary Js
23. magnificPopup Js
24. Wow Js
25. Cart Quantity Js
26. Show Login Toggle Js
27. Show Coupon Toggle Js
28. Create An Account Toggle Js
29. Shipping Box Toggle Js
30. odometter Js
31. Parallax Js
32. InHover Active Js



****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	//  01. PreLoader Js
	windowOn.on("load", function () {
	 $("#loading").delay(1000).fadeOut(300);
	});


	////////////////////////////////////////////////////
	// 02. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});



	$(".slider-drag").on("mouseenter", function () {
		$(".mouseCursor").addClass("cursor-big");
	});
	$(".slider-drag").on("mouseleave", function () {
		$(".mouseCursor").removeClass("cursor-big");
	});

	$("a,.sub-menu").on("mouseenter", function () {
		$(".mouseCursor").addClass("d-none");
	});
	$("a,.sub-menu").on("mouseleave", function () {
		$(".mouseCursor").removeClass("d-none");
	});



	// Mouse Custom Cursor
	function itCursor() {
		var myCursor = jQuery(".mouseCursor");
		if (myCursor.length) {
			if ($("body")) {
				const e = document.querySelector(".cursor-inner"),
					t = document.querySelector(".cursor-outer");
				let n,
					i = 0,
					o = !1;
				(window.onmousemove = function (s) {
					o ||
						(t.style.transform =
							"translate(" +
							s.clientX +
							"px, " +
							s.clientY +
							"px)"),
						(e.style.transform =
							"translate(" +
							s.clientX +
							"px, " +
							s.clientY +
							"px)"),
						(n = s.clientY),
						(i = s.clientX);
				}),
					$("body").on(
						"mouseenter",
						"button, a, .cursor-pointer",
						function () {
							e.classList.add("cursor-hover"),
								t.classList.add("cursor-hover");
						}
					),
					$("body").on(
						"mouseleave",
						"button, a, .cursor-pointer",
						function () {
							($(this).is("a", "button") &&
								$(this).closest(".cursor-pointer").length) ||
								(e.classList.remove("cursor-hover"),
								t.classList.remove("cursor-hover"));
						}
					),
					(e.style.visibility = "visible"),
					(t.style.visibility = "visible");
			}
		}
	}
	itCursor();
	
	////////////////////////////////////////////////////
	// 04. Sidebar Js
	$(".offcanvas-open-btn").on("click", function () {
		$(".offcanvas__area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".offcanvas__close-btn").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 04. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});



	////////////////////////////////////////////////////
	// 05. Search Js
	$(".bd-search-open-btn").on("click", function () {
		$(".bd-search-popup-area").addClass("bd-search-opened");
		$(".bd-search-overlay").addClass("bd-search-opened");
	});

	$(".bd-search-close-btn").on("click", function () {
		$(".bd-search-popup-area").removeClass("bd-search-opened");
		$(".bd-search-overlay").removeClass("bd-search-opened");
	});
	
	$(".bd-search-overlay").on("click", function () {
		$(".bd-search-popup-area").removeClass("bd-search-opened");
		$(".bd-search-overlay").removeClass("bd-search-opened");
	});
	
	


	////////////////////////////////////////////////////
	// 06. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	// last child menu
	$('.wp-menu nav > ul > li').slice(-4).addClass('menu-last');


	////////////////////////////////////////////////////
	// 07. Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});
	
	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

	////////////////////////////////////////////////////
	// 08. Nice Select Js
	$('.bd-nice-select').niceSelect();

	////////////////////////////////////////////////////
	// 09. On Load Section Animation

function bdOnLoadAnim(triggerClass, addClass, offsetNumber){
	let target_element = document.getElementsByClassName(triggerClass);
	if (target_element.length) {
		return new Waypoint({
			element: target_element,
			handler: function(direction) {
				$(this[0,'element']).addClass(addClass);
			},
			// Class add position from the top of the scrolling window 
			// for pixel value pass integer value, such as 20 in parameter and for % value pass string value, such as = "20%".
			offset: offsetNumber,
		  })
	}
}

bdOnLoadAnim('bd-promotion-area','active-anim','30%');
bdOnLoadAnim('bd-promotion-area-2','active-anim','30%');
bdOnLoadAnim('bd-joining-area','active-anim','35%');
bdOnLoadAnim('bd-faq-area','active-anim','35%');

  
	////////////////////////////////////////////////////
	// 10. Smooth Scroll Js
	function smoothSctollTop() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 120
				}, 1500);
			}
		});
	}
	smoothSctollTop();

	// mainSlider
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 4000,
			dots: false,
			rtl: rtl_setting,
			fade: true,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
			responsive: [{
			breakpoint: 767,
			settings: {
				dots: false,
				arrows: false
			}
			}]
		});
	
		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
			});
		}
	}
	mainSlider();


	////////////////////////////////////////////////////
	// 11. bd-hero-active Slider Js
	if (jQuery(".bd-hero-active").length > 0) {
		let sliderActive1 = ".bd-hero-active";
		let sliderInit1 = new Swiper(sliderActive1, {
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			rtl: rtl_setting,
			observeParents: true,
			observer: true,
			effect: 'fade',

			autoplay: {
				delay: 5000,
			},

			// If we need pagination
			pagination: {
				el: ".main-slider-dot",
				dynamicBullets: false,
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".bd-hero-next",
				prevEl: ".bd-hero-prev",
			},

			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function () {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			// Make animated when slide change
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}


	////////////////////////////////////////////////////
	// 12. bd-class-active Slider Js
	var ClassSlider = new Swiper('.bd-class-active', {
		slidesPerView: 1,
		spaceBetween: 24,
		loop: true,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		//slider dots
		pagination: {
			el: '.bd-class-pagination',
			clickable: true,
		  },
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
		},
	});
	// 13. bd-class-active-2 slider Js
	var ClassSlider = new Swiper('.bd-class-active-2', {
		slidesPerView: 1,
		spaceBetween: 24,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		loop: true,
		//slider dots
		pagination: {
			el: '.bd-class-pagination',
			clickable: true,
		  },
		breakpoints: {
			'1200': {
				slidesPerView: 2,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
		},
	});
	////////////////////////////////////////////////////
	// 14. bd-teacher-active Slider Js
	var teacherSlider = new Swiper('.bd-teacher-active', {
		slidesPerView: 1,
		spaceBetween: 24,
		loop: true,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		//slider dots
		pagination: {
			el: '.bd-teacher-pagination',
			clickable: true,
		  },
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
		},
	});
	////////////////////////////////////////////////////
	// 15. bd-program-active Slider Js
	var teacherSlider = new Swiper('.bd-program-active', {
		slidesPerView: 1,
		spaceBetween: 24,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		loop: true,
		//slider dots
		pagination: {
			el: '.bd-program-pagination',
			clickable: true,
		  },
		  navigation: {
			nextEl: ".bd-program-next",
			prevEl: ".bd-program-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
		},
	});
	////////////////////////////////////////////////////
	// 16. bd-program-details-active Slider Js
	var teacherSlider = new Swiper('.bd-program-details-active', {
		slidesPerView: 1,
		spaceBetween: 24,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		loop: true,
		// Navigation arrows
		navigation: {
			nextEl: ".bd-program-details-next",
			prevEl: ".bd-program-details-prev",
		},
	});

	////////////////////////////////////////////////////
	// 17. bd-testimonial-active Slider Js
	var testimonialSlider = new Swiper('.bd-testimonial-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		loop: true,
		//slider dots
		pagination: {
			el: '.bd-testimonial-pagination',
			clickable: true,
		  },
		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
		},
	});

	////////////////////////////////////////////////////
	// 18. bd-testimonial-active-2 Slider Js
	var testimonialSlider = new Swiper('.bd-testimonial-active-2', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		//slider dots
		pagination: {
			el: '.bd-testimonial-pagination-2',
			clickable: true,
		  },
		breakpoints: {
			'1200': {
				slidesPerView: 2,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
		},
	});

	////////////////////////////////////////////////////
	// 19. bd-blog-active Slider Js
	var blogSlider = new Swiper('.bd-blog-active', {
		slidesPerView: 1,
		spaceBetween: 24,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		loop: true,
		//slider dots
		pagination: {
			el: '.bd-blog-pagination',
			clickable: true,
		  },
		// Navigation arrows
		navigation: {
			nextEl: ".bd-blog-next",
			prevEl: ".bd-blog-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
		},
	});
	////////////////////////////////////////////////////
	// 20. bd-gallery-active Slider Js
	var gallerySlider = new Swiper('.bd-gallery-active', {
		slidesPerView: 1,
		spaceBetween: 24,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		loop: true,
		//slider dots
		pagination: {
			el: '.bd-gallery-pagination',
			clickable: true,
		  },

		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
		},
	});
	////////////////////////////////////////////////////
	// 21. bd-product-thumb-active  Slider Js
	var productSlider1 = new Swiper('.bd-product-thumb-active', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		//slider dots
		pagination: {
			el: '.bd-product-thumb-pagination',
			clickable: true,
		  },
	});

	var productSlider2 = new Swiper('.bd-product-thumb-active-2', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		//slider dots
		pagination: {
			el: '.bd-product-thumb-pagination-2',
			clickable: true,
		  },
	});

	var productSlider3 = new Swiper('.bd-product-thumb-active-3', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		//slider dots
		pagination: {
			el: '.bd-product-thumb-pagination-3',
			clickable: true,
		  },
	});

	var productSlider4 = new Swiper('.bd-product-thumb-active-4', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		//slider dots
		pagination: {
			el: '.bd-product-thumb-pagination-4',
			clickable: true,
		  },
	});

	var productSlider5 = new Swiper('.bd-product-thumb-active-5', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		//slider dots
		pagination: {
			el: '.bd-product-thumb-pagination-5',
			clickable: true,
		  },
	});
	var productSlider6 = new Swiper('.bd-product-thumb-active-6', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		//slider dots
		pagination: {
			el: '.bd-product-thumb-pagination-6',
			clickable: true,
		  },
	});
	var productSlider7 = new Swiper('.bd-product-thumb-active-7', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		//slider dots
		pagination: {
			el: '.bd-product-thumb-pagination-7',
			clickable: true,
		  },
	});
	var productSlider8 = new Swiper('.bd-product-thumb-active-8', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		//slider dots
		pagination: {
			el: '.bd-product-thumb-pagination-8',
			clickable: true,
		  },
	});
	var productSlider9 = new Swiper('.bd-product-thumb-active-9', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		rtl: rtl_setting,
		observeParents: true,
		observer: true,
		//slider dots
		pagination: {
			el: '.bd-product-thumb-pagination-9',
			clickable: true,
		  },
	});


	////////////////////////////////////////////////////
	// 22. Masonary Js
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});

		// filter items on button click
		$('.bd-filter-btn').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.bd-filter-btn button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	////////////////////////////////////////////////////
	// 23. magnificPopup Js
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 24. Wow Js
	new WOW().init();

	////////////////////////////////////////////////////
	// 25. Cart Quantity Js
	$('.cart-minus').on('click', function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});

	$('.cart-plus').on('click', function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});


	////////////////////////////////////////////////////
	// 26. Show Login Toggle Js
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 27. Show Coupon Toggle Js
	$('#showcoupon').on('click', function () {
		$('#checkout_coupon').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 28. Create An Account Toggle Js
	$('#cbox').on('click', function () {
		$('#cbox_info').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 29. Shipping Box Toggle Js
	$('#ship-box').on('click', function () {
		$('#ship-box-info').slideToggle(1000);
	});

	////////////////////////////////////////////////////
	// 30. odometter Js
	jQuery('.odometer').appear(function (e) {
		var odo = jQuery(".odometer");
		odo.each(function () {
			var countNumber = jQuery(this).attr("data-count");
			jQuery(this).html(countNumber);
		});
	});


	////////////////////////////////////////////////////
	// 31. Parallax Js
	var scene = document.getElementById('scene');
	scene && new Parallax(scene);

	var scene2 = document.getElementById('scene2');
	scene2 && new Parallax(scene2);

	////////////////////////////////////////////////////
	// 32. InHover Active Js
	$('.hover__active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	});
	
})(jQuery);