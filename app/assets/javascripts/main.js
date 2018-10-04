// iPad and iPhone detection
function isiPad() {
  return (navigator.platform.indexOf("iPad") != -1);
};

function isiPhone() {
  return (
	(navigator.platform.indexOf("iPhone") != -1) ||
	(navigator.platform.indexOf("iPod") != -1)
  );
};

function parallax() {
  $(window).stellar();
};

function burgerMenu() {
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
	var $el = $('#navbar > ul');
	$el.find('li').removeClass('active');
	$el.each(function(){
		$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
	});

};

function navigationSection() {
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

function optionsAnimate() {
	var services = $('#fh5co-options');
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
	$('.js-counter').countTo({
		 formatter: function (value, options) {
      return value.toFixed(options.decimals);
    },
	});
};

function counterWayPoint() {
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
  $('[data-toggle="popover"]').popover({
    container: "body",
  });
};




// $(document).on('turbolinks:load', isiPad);

$( document ).ready( isiPad );
$( document ).ready( isiPhone );
$( document ).ready( parallax);
$( document ).ready( burgerMenu);
$( document ).ready( clickMenu);
$( document ).ready( navActive);
$( document ).ready( navigationSection);
$( document ).ready( windowScroll);
$( document ).ready( testimonialCarousel);
$( document ).ready( homeAnimate);
$( document ).ready( exploreAnimate);
$( document ).ready( gettingStartedAnimate);
$( document ).ready( gettingStarted2Animate);
$( document ).ready( pricingAnimate);
$( document ).ready( servicesAnimate);
$( document ).ready( optionsAnimate);
$( document ).ready( teamAnimate);
$( document ).ready( faqAnimate);
$( document ).ready( trustedAnimate);
$( document ).ready( footerAnimate);
$( document ).ready( blogAnimate);
$( document ).ready( counterWayPoint);

