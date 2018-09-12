// iPad and iPhone detection
function isiPad() {
  console.log('ipad working');
  return (navigator.platform.indexOf("iPad") != -1);
};

function isiPhone() {
  console.log('iphone working');
  return (
	(navigator.platform.indexOf("iPhone") != -1) ||
	(navigator.platform.indexOf("iPod") != -1)
  );
};

function parallax() {
  console.log('parallax working');
  $(window).stellar();
};

function burgerMenu() {
  console.log('burgerMenu working');
	$('body').on('click', '.js-fh5co-nav-toggle', function(event){

		event.preventDefault();

		if ( $('#navbar').is(':visible') ) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}
	});
};

// Page Nav
function clickMenu() {
  console.log('clickMenu working');
	$('#navbar a:not([class="external"])').click(function(event){
		var section = $(this).data('nav-section'),
			navbar = $('#navbar');

			if ( $('[data-section="' + section + '"]').length ) {
		    	$('html, body').animate({
		        	scrollTop: $('[data-section="' + section + '"]').offset().top - 55
		    	}, 500);
		   }

	    if ( navbar.is(':visible')) {
	    	navbar.removeClass('in');
	    	navbar.attr('aria-expanded', 'false');
	    	$('.js-fh5co-nav-toggle').removeClass('active');
	    }

	    event.preventDefault();
	    return false;
	});
};

// Reflect scrolling in navigation
function navActive(section) {
  console.log('navActive working');
	var $el = $('#navbar > ul');
	$el.find('li').removeClass('active');
	$el.each(function(){
		$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
	});

};

function navigationSection() {
  console.log('navSection working');
	var $section = $('section[data-section]');

	$section.waypoint(function(direction) {

	  	if (direction === 'down') {
	    	navActive($(this.element).data('section'));
	  	}
	}, {
  		offset: '150px'
	});

	$section.waypoint(function(direction) {
	  	if (direction === 'up') {
	    	navActive($(this.element).data('section'));
	  	}
	}, {
	  	offset: function() { return -$(this.element).height() + 155; }
	});

};

// Window Scroll
function windowScroll() {
  console.log('windowScroll working');
	var lastScrollTop = 0;

	$(window).scroll(function(event){

	   	var header = $('#fh5co-header'),
			scrlTop = $(this).scrollTop();

		if ( scrlTop > 500 && scrlTop <= 2000 ) {
			header.addClass('navbar-fixed-top fh5co-animated slideInDown');
		} else if ( scrlTop <= 500) {
			if ( header.hasClass('navbar-fixed-top') ) {
				header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
				setTimeout(function(){
					header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
				}, 100 );
			}
		}

	});

};


	// Animations
	// Home

function homeAnimate() {
  console.log('home animate working');
	if ( $('#fh5co-home').length > 0 ) {

		$('#fh5co-home').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {


				setTimeout(function() {
					$('#fh5co-home .to-animate').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeInUp animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, 200);


				$(this.element).addClass('animated');

			}
		} , { offset: '80%' } );

	}
};

function exploreAnimate() {
  console.log('explore animate working');
	var explore = $('#fh5co-explore');
	if ( explore.length > 0 ) {

		explore.waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {


				setTimeout(function() {
					explore.find('.to-animate').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeInUp animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, 200);

				setTimeout(function() {
					explore.find('.to-animate-2').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('bounceIn animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, 700);

				setTimeout(function() {
					explore.find('.to-animate-3').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeInRight animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, 1000);


				$(this.element).addClass('animated');

			}
		} , { offset: '80%' } );

	}

};

function gettingStartedAnimate() {
  console.log('getting started animate working');
	var started = $('.getting-started-1');
	if ( started.length > 0 ) {

		started.waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {


				setTimeout(function() {
					started.find('.to-animate').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeInUp animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, 200);

				setTimeout(function() {
					started.find('.to-animate-2').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeInRight animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, 200);


				$(this.element).addClass('animated');

			}
		} , { offset: '80%' } );

	}

};

function gettingStarted2Animate() {
  console.log('getting started 2 animate working');
	var started = $('.getting-started-2');
	if ( started.length > 0 ) {

		started.waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {


				setTimeout(function() {
					started.find('.to-animate').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeInUp animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, 200);

				setTimeout(function() {
					started.find('.to-animate-2').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeInRight animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, 200);


				$(this.element).addClass('animated');

			}
		} , { offset: '80%' } );

	}
};

function pricingAnimate() {
  console.log('pricing animate working');
	var pricing = $('#fh5co-pricing');
	if ( pricing.length > 0 ) {

		pricing.waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {


				setTimeout(function() {
					pricing.find('.to-animate').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeIn animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, 200);

				setTimeout(function() {
					pricing.find('.to-animate-2').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeInUp animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, 200);


				$(this.element).addClass('animated');

			}
		} , { offset: '80%' } );

	}

};

function servicesAnimate() {
  console.log('services animate working');
	var services = $('#fh5co-services');
	if ( services.length > 0 ) {

		services.waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {


				var sec = services.find('.to-animate').length,
					sec = parseInt((sec * 200) + 400);

				setTimeout(function() {
					services.find('.to-animate').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeInUp animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, 200);

				setTimeout(function() {
					services.find('.to-animate-2').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('bounceIn animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, sec);


				$(this.element).addClass('animated');

			}
		} , { offset: '80%' } );

	}

};

function teamAnimate() {
  console.log('teamAnimate working');
	var team = $('#fh5co-team');
	if ( team.length > 0 ) {

		team.waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				var sec = team.find('.to-animate').length,
					sec = parseInt((sec * 200) + 400);

				setTimeout(function() {
					team.find('.to-animate').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeIn animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, 200);

				setTimeout(function() {
					team.find('.to-animate-2').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeInUp animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, sec);


				$(this.element).addClass('animated');

			}
		} , { offset: '80%' } );

	}
};

function faqAnimate() {
  console.log('faqAnimate working');
	var faq = $('#fh5co-faq');
	if ( faq.length > 0 ) {

		faq.waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				var sec = faq.find('.to-animate').length,
					sec = parseInt((sec * 200) + 400);

				setTimeout(function() {
					faq.find('.to-animate').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeIn animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, 200);

				setTimeout(function() {
					faq.find('.to-animate-2').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeInUp animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, sec);


				$(this.element).addClass('animated');

			}
		} , { offset: '80%' } );

	}
};

function trustedAnimate() {
  console.log('trustedAnimate working');
	var trusted = $('#fh5co-trusted');
	if ( trusted.length > 0 ) {

		trusted.waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				var sec = trusted.find('.to-animate').length,
					sec = parseInt((sec * 200) + 400);

				setTimeout(function() {
					trusted.find('.to-animate').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeIn animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, 200);

				setTimeout(function() {
					trusted.find('.to-animate-2').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('bounceIn animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, sec);


				$(this.element).addClass('animated');

			}
		} , { offset: '80%' } );

	}
};

function footerAnimate() {
  console.log('footerAnimate working');
	var footer = $('#fh5co-footer');
	if ( footer.length > 0 ) {

		footer.waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				setTimeout(function() {
					footer.find('.to-animate').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeIn animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, 200);


				$(this.element).addClass('animated');

			}
		} , { offset: '80%' } );

	}
};

function blogAnimate() {
  console.log('blogAnimate working');
	var footer = $('#fh5co-blog');
	if ( footer.length > 0 ) {

		footer.waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				setTimeout(function() {
					footer.find('.to-animate').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeIn animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, 200);


				$(this.element).addClass('animated');

			}
		} , { offset: '80%' } );

	}
};

function counter() {
  console.log('counter working');
	$('.js-counter').countTo({
		 formatter: function (value, options) {
      return value.toFixed(options.decimals);
    },
	});
};

function counterWayPoint() {
  console.log('counterWayPoint working');
	if ($('#fh5co-counter-section').length > 0 ) {
		$('#fh5co-counter-section').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				setTimeout( counter , 400);
				$(this.element).addClass('animated');

			}
		} , { offset: '90%' } );
	}
};

function testimonialCarousel() {
  console.log('carousel working');
  $('.owl-carousel-fullwidth').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		responsiveClass: true,
		nav: false,
		dots: true,
		smartSpeed: 800,
		autoHeight: true,
		animateIn: 'fadeIn',
      animateOut: 'fadeOut'
	});
};

$(document).on('turbolinks:load', isiPad);
$(document).on('turbolinks:load', isiPhone);
$(document).on('turbolinks:load', parallax);
$(document).on('turbolinks:load', burgerMenu);
$(document).on('turbolinks:load', clickMenu);
$(document).on('turbolinks:load', navActive);
$(document).on('turbolinks:load', navigationSection);
$(document).on('turbolinks:load', windowScroll);
$(document).on('turbolinks:load', testimonialCarousel);
$(document).on('turbolinks:load', homeAnimate);
$(document).on('turbolinks:load', exploreAnimate);
$(document).on('turbolinks:load', gettingStartedAnimate);
$(document).on('turbolinks:load', gettingStarted2Animate);
$(document).on('turbolinks:load', pricingAnimate);
$(document).on('turbolinks:load', servicesAnimate);
$(document).on('turbolinks:load', teamAnimate);
$(document).on('turbolinks:load', faqAnimate);
$(document).on('turbolinks:load', trustedAnimate);
$(document).on('turbolinks:load', footerAnimate);
$(document).on('turbolinks:load', blogAnimate);
$(document).on('turbolinks:load', counter);
$(document).on('turbolinks:load', counterWayPoint);

document.addEventListener("turbolinks:load", function() {
    console.log('main works!');
});