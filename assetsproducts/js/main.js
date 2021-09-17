(function($) {
"use strict";

/*------------------------------------------------------------------
[Javascript Table of contents]
1. owl carousel function
2. content get width
3. email regex
4. smooth scroll function
5. input number funciton
6. work grid
7. work grid 2
8. banner slider and testimonial slider init
9. team slider , pricing slider, news slider, certificate slider and service slider init
10. client slider init
11. image slider
12. video popup
13. animate number
14. animate number init
15. waypoint init
16. image popup init
17. back to top init
18. current page active class
19. contact form
20. comment replay link init
21. slider range
20. nice select init
21. vertical slider init
22. number custom init
23. rate chart init
24. product slider init
25. back to top add class
26. map init

-------------------------------------------------------------------*/

/*=================================================
    1. owl carousel function
==============================================================*/
$.fn.myCarousel = function(options) {

	var settings = $.extend({
		items: 1,
		dots: false,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		nav: false,
		autoplay: true,
		navText: ['',''],
		margin: 0,
		stagePadding: 0,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		navRewind:false,
		responsive: {},
		animateOut: '',
		animateIn: '',
		center: '',
		merge: '',
		autoWidth: false,
	}, options);

    return this.owlCarousel( {
		items: settings.items,
		loop: settings.loop,
		mouseDrag: settings.mouseDrag,
		touchDrag: settings.touchDrag,
		nav: settings.nav,
		navText: settings.navText,
		dots: settings.dots,
		margin: settings.margin,
		stagePadding: settings.stagePadding,
		autoplay: settings.autoplay,
		autoplayTimeout: settings.autoplayTimeout,
		autoplayHoverPause: settings.autoplayHoverPause,
		animateOut: settings.animateOut,
		animateIn: settings.animateIn,
		responsive: settings.responsive,
		navRewind: settings.navRewind,
		center: settings.center,
		merge: settings.merge,
		autoWidth: settings.autoWidth
	});
};

/*=================================================
    2. content get width
==============================================================*/
function getWidth() {
	let item = $('.team-slider .owl-item'),
			team = $('.single-team .image');
	
	team.css('width', item.outerWidth());
	team.css('height', item.outerWidth());
}

/*=================================================
    3. email regex
==============================================================*/
function email_regex(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

/*=================================================
    4. smooth scroll function
==============================================================*/
$.fn.smoothScroll = function () {
	return this.each(function () {
		$('html, body').animate({
			scrollTop: $(this).offset().top
		}, 1500);
	});
}

/*=================================================
    5. input number funciton
==============================================================*/
$.fn.myNumber = function(options) {
	var settings = $.extend ({
		plus: '',
		minus: ''
	}, options);

	this.append('<span class="add">'+ settings.plus +'</span>');
	this.append('<span class="sub">'+ settings.minus +'</span>');
	
	return this.each(function () {
			let spinner = $(this),
				input = spinner.find('input[type="number"]'),
				add = spinner.find('.add'),
				sub = spinner.find('.sub');

			input.parent().on('click', '.sub', function(event) {
				event.preventDefault();
				if (input.val() > parseInt(input.attr('min'), 10)) {
					input.val(function(i, oldvalue) {
						return --oldvalue;
					})
				}
			});
			input.parent().on('click', '.add', function(event) {
				event.preventDefault();
				if (input.val() < parseInt(input.attr('max'), 10)) {
					input.val(function(i, oldvalue) {
						return ++oldvalue;
					})
				}
			});
	});
}

$(window).on('load', function() {

	// get with init
	getWidth();


	/*=================================================
		6. preloader
	==============================================================*/
	setTimeout(() => {
		$('#preloader').fadeOut(500);
	}, 1000);


	/*=================================================
		6. work grid
	==============================================================*/
	if ($( '.work-grid' ).length > 0 ) {
		var $container = $( '.work-grid' ),
			colWidth = function( ) {
			var w = $container.width( ),
					columnNum = 1,
					columnWidth = 0;
				if ( w > 1200 ) {
					columnNum = 5;
				} else if ( w > 900 ) {
					columnNum = 4;
				} else if ( w > 600 ) {
					columnNum = 3;
				} else if ( w > 450 ) {
					columnNum = 2;
				} else if ( w > 385 ) {
					columnNum = 1;
				}
			columnWidth = Math.floor( w / columnNum );
				$container.find( '.work-grid-item' ).each( function( ) {
			var $item = $( this ),
				multiplier_w = $item.attr( 'class' ).match( /work-grid-item-w(\d)/ ),
				multiplier_h = $item.attr( 'class' ).match( /work-grid-item-h(\d)/ ),
				width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
				height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
				$item.css( {
				width: width
					//height: height
				} );
			});
				return columnWidth;
			},
			isotope = function() {
			$container.isotope({
				resizable: false,
					itemSelector: '.work-grid-item',
					masonry: {
					columnWidth: colWidth( ),
						gutterWidth: 3
					}
				});
			};
			isotope();
			$( window ).on( 'resize', isotope );
		}

	/*=================================================
		7. work grid 2
	==============================================================*/
	if ($( '.work-grid-2' ).length > 0 ) {
		var $container = $( '.work-grid-2' ),
			colWidth = function( ) {
			var w = $container.width( ),
					columnNum = 1,
					columnWidth = 0;
				if ( w > 1200 ) {
					columnNum = 4;
				} else if ( w > 900 ) {
					columnNum = 3;
				} else if ( w > 600 ) {
					columnNum = 2;
				} else if ( w > 450 ) {
					columnNum = 1;
				} else if ( w > 385 ) {
					columnNum = 1;
				}
			columnWidth = Math.floor( w / columnNum );
				$container.find( '.work-grid-item-2' ).each( function( ) {
			var $item = $( this ),
				multiplier_w = $item.attr( 'class' ).match( /work-grid-item-2-w(\d)/ ),
				multiplier_h = $item.attr( 'class' ).match( /work-grid-item-2-h(\d)/ ),
				width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
				height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
				$item.css( {
				width: width
					//height: height
				} );
			});
				return columnWidth;
			},
			isotope = function() {
			$container.isotope({
				resizable: false,
					itemSelector: '.work-grid-item-2',
					masonry: {
					columnWidth: colWidth( ),
						gutterWidth: 3
					}
				});
			};
			isotope();
			$( window ).on( 'resize', isotope );
			var $optionSets = $( '.option-set' ),
			$optionLinks = $optionSets.find( 'a' );
			$optionLinks.on( 'click', function( ) {
			var $this = $( this );
				var $optionSet = $this.parents( '.option-set' );
				$optionSet.find( '.selected' ).removeClass( 'selected' );
				$this.addClass( 'selected' );
				// make option object dynamically, i.e. { filter: '.my-filter-class' }
				var options = {},
				key = $optionSet.attr( 'data-option-key' ),
				value = $this.attr( 'data-option-value' );
				// parse 'false' as false boolean
				value = value === 'false' ? false : value;
				options[key] = value;
				if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
			// changes in layout modes need extra logic
			changeLayoutMode( $this, options )
			} else {
			// creativewise, apply new options
			$container.isotope( options );
			}
			return false;
		});
		}

		/*=================================================
		7. work grid 2
	==============================================================*/
	if ($( '.work-grid-2' ).length > 0 ) {
		var $container = $( '.work-grid-2' ),
			colWidth = function( ) {
			var w = $container.width( ),
					columnNum = 1,
					columnWidth = 0;
				if ( w > 1200 ) {
					columnNum = 4;
				} else if ( w > 900 ) {
					columnNum = 3;
				} else if ( w > 600 ) {
					columnNum = 2;
				} else if ( w > 450 ) {
					columnNum = 1;
				} else if ( w > 385 ) {
					columnNum = 1;
				}
			columnWidth = Math.floor( w / columnNum );
				$container.find( '.work-grid-item-2' ).each( function( ) {
			var $item = $( this ),
				multiplier_w = $item.attr( 'class' ).match( /work-grid-item-2-w(\d)/ ),
				multiplier_h = $item.attr( 'class' ).match( /work-grid-item-2-h(\d)/ ),
				width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
				height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
				$item.css( {
				width: width
					//height: height
				} );
			});
				return columnWidth;
			},
			isotope = function() {
			$container.isotope({
				resizable: false,
					itemSelector: '.work-grid-item-2',
					masonry: {
					columnWidth: colWidth( ),
						gutterWidth: 3
					}
				});
			};
			isotope();
			$( window ).on( 'resize', isotope );
			var $optionSets = $( '.option-set' ),
			$optionLinks = $optionSets.find( 'a' );
			$optionLinks.on( 'click', function( ) {
			var $this = $( this );
				var $optionSet = $this.parents( '.option-set' );
				$optionSet.find( '.selected' ).removeClass( 'selected' );
				$this.addClass( 'selected' );
				// make option object dynamically, i.e. { filter: '.my-filter-class' }
				var options = {},
				key = $optionSet.attr( 'data-option-key' ),
				value = $this.attr( 'data-option-value' );
				// parse 'false' as false boolean
				value = value === 'false' ? false : value;
				options[key] = value;
				if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
			// changes in layout modes need extra logic
			changeLayoutMode( $this, options )
			} else {
			// creativewise, apply new options
			$container.isotope( options );
			}
			return false;
		});
		}
	
		/*=================================================
		7. work grid 2
	==============================================================*/
	if ($( '.testimonial-grid' ).length > 0 ) {
		var $container = $( '.testimonial-grid' ),
			colWidth = function( ) {
			var w = $container.width( ),
					columnNum = 1,
					columnWidth = 0;
				if ( w > 1200 ) {
					columnNum = 3;
				} else if ( w > 900 ) {
					columnNum = 3;
				} else if ( w > 600 ) {
					columnNum = 2;
				} else if ( w > 450 ) {
					columnNum = 1;
				} else if ( w > 385 ) {
					columnNum = 1;
				}
			columnWidth = Math.floor( w / columnNum );
				$container.find( '.testimonial-grid-item' ).each( function( ) {
			var $item = $( this ),
				multiplier_w = $item.attr( 'class' ).match( /testimonial-grid-item-w(\d)/ ),
				multiplier_h = $item.attr( 'class' ).match( /testimonial-grid-item-h(\d)/ ),
				width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
				height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
				$item.css( {
				width: width
					//height: height
				} );
			});
				return columnWidth;
			},
			isotope = function() {
			$container.isotope({
				resizable: false,
					itemSelector: '.testimonial-grid-item',
					masonry: {
					columnWidth: colWidth( ),
						gutterWidth: 3
					}
				});
			};
			isotope();
			$( window ).on( 'resize', isotope );
		}
}); // END load Function 

$(document).ready(function() {

	// get width init
	getWidth();


  /*=================================================
		8. banner slider and testimonial slider init
	==============================================================*/
  if ($('.banner-slider, .testimonial-slider').length > 0) {
    $('.banner-slider, .testimonial-slider').myCarousel({
      nav: true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive: {
				0: {
					nav: false
				},
				1024: {
					nav: true
				}
			}
    });
	}

	/*=================================================
    9. team slider , pricing slider, news slider, certificate slider and service slider init
	==============================================================*/
	if ($('.team-slider, .pricing-slider, .news-slider, .certificate-slider').length > 0) {
		$('.team-slider, .pricing-slider, .news-slider, .certificate-slider').myCarousel({
			dots: true,
			items: 3,
			center: true,
			margin: 30,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1024: {
					items: 3
				}
			}
		})
	}
	
	
	if ($('.service-slider').length > 0) {
		$('.service-slider').myCarousel({
			//dots: true,
			items: 1,
			autoplay:1,
			center: true,
			nav:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			margin: 30,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 1
				},
				1024: {
					items: 1
				}
			}
		})
	}
	
	

	/*=================================================
		10. client slider init
	==============================================================*/
	if ($('.client-slider').length > 0) {
		$('.client-slider').myCarousel({
			items: 6,
			dots: false,
			autoplay: true,
			nav: true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 3
				},
				1024: {
					items: 6
				}
			}
		})
	}

	/*=================================================
		11. image slider
	==============================================================*/
	if ($('.img-slider').length > 0) {
		$('.img-slider').myCarousel({
			nav: true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
		})
	}

	/*=================================================
		12. video popup
	==============================================================*/
	if ($('.video-popup').length > 0) {
		$('.video-popup').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	}



	/*=================================================
		13. animate number
	==============================================================*/
	$.fn.animateNumbers = function(stop, commas, duration, ease) {
		return this.each(function() {
			var $this = $(this);
			var start = parseInt($this.text().replace(/,/g, ""), 10);
			commas = (commas === undefined) ? true : commas;
			$({
				value: start
			}).animate({
				value: stop
			}, {
				duration: duration == undefined ? 500 : duration,
				easing: ease == undefined ? "swing" : ease,
				step: function() {
					$this.text(Math.floor(this.value));
					if (commas) {
						$this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
					}
				},
				complete: function() {
					if (parseInt($this.text(), 10) !== stop) {
						$this.text(stop);
						if (commas) {
							$this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
						}
					}
				}
			});
		});
	};

	/*=================================================
		14. animate number init
	==============================================================*/
	var value = $(".number-percentage");
	function animateNumber(){
		value.each(function() {
			$(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration"), 10));
		});
	}


	/*=================================================
    15. waypoint init
	==============================================================*/
	if ($('.waypoint-tigger').length > 0) {
		var waypoint = new Waypoint({
			element: document.getElementsByClassName('waypoint-tigger'),
			handler: function(direction) {
				animateNumber();
			},
			offset: '20%' 
		});
	}

	/*=================================================
			16. image popup init
	==============================================================*/
	if ($('.image-popup').length > 0) {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 500, //delay removal by X to allow out-animation
			callbacks: {
				beforeOpen: function () {
					// just a hack that adds mfp-anim class to markup
					this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
					this.st.mainClass = 'mfp-zoom-in';
				}
			},
			closeOnContentClick: true,
			midClick: true,
			gallery: {
				enabled: true,
			},
		});
	}

	/*=================================================
    17. back to top init
	==============================================================*/
	if ($('.backtotop').length > 0) {
		$('.backtotop').on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 1000)
		});
	}

	/*=================================================
		18. current page active class
	==============================================================*/
	let url = window.location.pathname,
			activePage = url.substr(url.lastIndexOf('/')+1);
			
  if ($('.navbar-nav li a').length > 0) {
		$('.navbar-nav li a').each(function(){  
				var currentPage = this.href.substr(this.href.lastIndexOf('/')+1);
				
				if (activePage == currentPage) {
					$(this).parent().addClass("active");
					$(this).parent().parent().parent().addClass('active');
				} else {
					$(this).parent().removeClass("active");
					$(this).parent().parent().removeClass('active');
				}
		});
	}
	if ($('.accordion-menu li a, .menu-btn').length > 0) {
		$('.accordion-menu li a, .menu-btn').each(function(){  
			var currentPage = this.href.substr(this.href.lastIndexOf('/')+1);
			
			if (activePage == currentPage) {
				$(this).parent().addClass("active");
			} else {
				$(this).parent().removeClass("active");
			}
		});
	}

	/*=================================================
		19. contact form
	==============================================================*/
	if ($('#contact-form').length > 0) {
		$('#contact-form').on('submit', function(event) {
			event.preventDefault();
			/* Act on the event */
	
			var contact_name = $('#contact_name'),
					contact_email = $('#contact_email'),
					contact_phone = $('#contact_phone'),
					contact_massage = $('#contact_massage'),
					contact_subject = $('#contact_subject'),
					contact_submit = $('#contact_submit'),
					contact_error = false;
	
			$('.success_message').remove();
	
			if (contact_name.length > 0) {
				if (contact_name.val().trim() === '') {
					contact_name.addClass('error');
					contact_error = true;
					contact_name.focus();
					return false;
				} else {
					contact_name.removeClass('error');
				}
			}
	
			if (contact_phone.length > 0) {
				if (contact_phone.val().trim() === '') {
					contact_phone.addClass('error');
					contact_error = true;
					contact_phone.focus();
					return false;
				} else {
					contact_phone.removeClass('error');
				}
			}
	
			if (contact_subject.length > 0) {
				if (contact_subject.val().trim() === '') {
					contact_subject.addClass('error');
					contact_error = true;
					contact_subject.focus();
					return false;
				} else {
					contact_subject.removeClass('error');
				}
			}
	
			if (contact_email.length > 0) {
				if (contact_email.val().trim() === '') {
					contact_email.addClass('error');
					contact_error = true;
					contact_email.focus();
					return false;
				} else if (!email_regex(contact_email.val().toLowerCase())){
					contact_email.addClass('error');
					contact_error = true;
					contact_email.focus();
					return false;
				} else {
					contact_email.removeClass('error');
				}
			}
	
			if (contact_massage.length > 0) {
				if (contact_massage.val().trim() === '') {
					contact_massage.addClass('error');
					contact_error = true;
					contact_massage.focus();
					return false;
				} else {
					contact_massage.removeClass('error');
				}
			}
	
			if (contact_error === false) {
				contact_submit.before().hide().fadeIn();
				$.ajax({
						type: "POST",
						url: "assets/php/contact-form.php",
						data: {
						'contact_name' : contact_name.val(),
						'contact_email' : contact_email.val(),
						'contact_massage' : contact_massage.val(),
						'contact_phone' : contact_phone.val(),
						'contact_subject' : contact_subject.val(),
					},
					success: function(result){
						contact_submit.after('<p class="success_message">' + result + '</p>').hide().fadeIn();
	
						setTimeout(() => {
							$(".success_message").fadeOut(1000, function() {
								$(this).remove();
							});
						}, 5000);
	
						$('#contact-form')[0].reset();
					}
				});
			}
		});
	}

	/*=================================================
		20. comment replay link init
	==============================================================*/
	if ($('.comment-reply-link').length > 0) {
		$('.comment-reply-link').on('click', function (event) {
			event.preventDefault();
			$('#comment-form').smoothScroll();
		});
	}

	/*=================================================
		21. slider range
	==============================================================*/
  if ($( "#slider-range" ).length > 0) {
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 2000,
			values: [ 0, 1250 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	}

	/*=================================================
		20. nice select init
	==============================================================*/
	if ($('select').length > 0) {
		$('select').niceSelect();
	}

	/*=================================================
		21. vertical slider init
	==============================================================*/
	if ($('.slideshow').length > 0) {
		$('.slideshow').desoSlide({
			thumbs: $('.slideshow_thumbs li > a'),
			auto: {
					start: true
			},
			first: 1,
			interval: 6000,
			overlay: 'none',
		});
	}

	/*=================================================
		22. number custom init
	==============================================================*/
	if ($('.my_number').length > 0) {
		$('.my_number').myNumber({
			plus: '<i class="fa fa-plus"</i>',
			minus: '<i class="fa fa-minus"></i>'
		});
	}

	/*=================================================
		23. rate chart init
	==============================================================*/
	if ($('.rate-chart').length > 0) {
		$('.rate-chart').each(function() {
			if ($(this).find('.rate-chart-bar').attr('data-percent') <= 100) {
				$(this).find('.rate-chart-bar').css({
					width: $(this).find('.rate-chart-bar').attr('data-percent') + '%',
				});
			} else {
				$(this).find('.rate-chart-bar').css({
					width: 100+'%',
				});
			}
		});	
	}

	/*=================================================
		24. product slider init
	==============================================================*/
	if ($('.product-slider').length > 0) {
		$('.product-slider').myCarousel({
			nav: true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			items: 4,
			margin: 30,
			responsive: {
				0: {
					items: 1,
					nav: false
				},
				768: {
					items: 2,
					nav: false
				},
				1024: {
					items: 4,
					nav: true
				}
			}
		})
	}

	 if ($(".slide-toggle[data-action]").length > 0) {
		 // All sides
		var sides = ["left", "top", "right", "bottom"];
		// Initialize sidebars
		for (var i = 0; i < sides.length; ++i) {
				var cSide = sides[i];
				$(".sidebar." + cSide).sidebar({side: cSide});
		}
		// Click handlers
		$(".slide-toggle[data-action]").on("click", function () {
				var $this = $(this);
				var action = $this.attr("data-action");
				var side = $this.attr("data-side");
				$(".sidebar." + side).trigger("sidebar:" + action);
				return false;
		});
	 }




}); // end ready function

$(window).on('scroll', function() {
	/*=================================================
		25. back to top add class
	==============================================================*/
	let currentPosition = $(window).scrollTop(),
			parent = $('.backtotop-wraper'),
			height = Math.floor($(document).height() / 2.5);

		if (currentPosition > height) {
			parent.addClass('sticky');
		} else {
			parent.removeClass('sticky');
		}
}); // END Scroll Function 

	/*--------------------------
	Sticky Menu Activation Code
	---------------------------- */		   
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>200 ){
			$('#sticky').addClass('stick');
			} else {
			$('#sticky').removeClass('stick');
			}
		});


$(window).on('resize', function() {

	// get width
	getWidth();

}); // End Resize

/*=================================================
		26. map init
==============================================================*/
if ($("#map").length > 0) {
	function initialise() {
		var myLatlng = new google.maps.LatLng(5.376964, 100.399383);
		var mapOptions = {
			zoom: 16,
			minZoom: 6,
			maxZoom: 17,
			zoomControl:true,
			zoomControlOptions: {
					style:google.maps.ZoomControlStyle.DEFAULT
			},
				center: myLatlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false,
				panControl:false, 
				mapTypeControl:false, 
				scaleControl:false, 
				streetViewControl:false, 
				overviewMapControl:false, 
				rotateControl:false
		}
		var map = new google.maps.Map(document.getElementById('map'), mapOptions);
		var image = new google.maps.MarkerImage("assets/images/map-pointer.png"); 
		var marker = new google.maps.Marker({
			position: myLatlng,
			icon:image,
			map: map,
			title: 'Click here for more details'
		});
		google.maps.event.addDomListener(window, 'resize', function() { 
			map.setCenter(myLatlng); 
		}); 
	}
	google.maps.event.addDomListener(window, 'load', initialise);
}

})(jQuery);