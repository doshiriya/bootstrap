(function($){
	'use script';

	// WOW JS
	new WOW().init();


	


	/*---slider activation---*/
    var $slider = $('.hero-slider-full');
    if($slider.length > 0){
        $slider.owlCarousel({
            animateOut: 'fadeOut',
            loop: true,
            nav: false,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 1,
            nav:true,
            navText:['<span class="hero-slider-nav"><i class="fas fa-arrow-left"></i></span>','<span class="hero-slider-nav"><i class="fas fa-arrow-right"></i></span>']
        });
    }



	// Scroll Area
	$(document).ready(function(){
	    $('.scroll-area').click(function(){
	      	$('html').animate({
	        	'scrollTop' : 0,
	      	},700);
	      	return false;
	    });
	    $(window).on('scroll',function(){
	      	var a = $(window).scrollTop();
	      	if(a>400){
	            $('.scroll-area').slideDown(300);
	        }else{
	            $('.scroll-area').slideUp(200);
	        }
	    });
	});

	// Mini Cart
	// Search
	$('.header-cart .cart-icon').click(function(){
        $('.mini-cart, .off_canvars_overlay').addClass('active');
    });
    $('.mini-cart-close i, .off_canvars_overlay').click(function(){
        $('.mini-cart, .off_canvars_overlay').removeClass('active');
    });


    /*---product navactive activation---*/
    var $productNavactive = $('.product_navactive');
        if($productNavactive.length > 0){
        $('.product_navactive').owlCarousel({
            autoplay: true,
            loop: false,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 4,
            dots:false,
            navText:['<span class="quickview-slider-nav"><i class="fa fa-angle-left"></i></span>','<span class="quickview-slider-nav"><i class="fa fa-angle-right"></i></span>'],
            responsiveClass:true,
            responsive:{
                    0:{
                    items:1,
                },
                250:{
                    items:2,
                },
                480:{
                    items:3,
                },
                768:{
                    items:4,
                },

            }
        });
     } 
    
    $('.modal').on('shown.bs.modal', function (e) {
        $('.product_navactive').resize();
    })

    $('.product_navactive a').on('click',function(e){
      e.preventDefault();

      var $href = $(this).attr('href');

      $('.product_navactive a').removeClass('active');
      $(this).addClass('active');

      $('.product-details-large .tab-pane').removeClass('active show');
      $('.product-details-large '+ $href ).addClass('active show');

    })



    /*---Features Product---*/
    var $featuresProduct = $('.features-product-full');
        if($featuresProduct.length > 0){
        $('.features-product-full').owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 4,
            dots:false,
            navText:['<span class="featuresProduct-slider-nav"><i class="fa fa-angle-left"></i></span>','<span class="featuresProduct-slider-nav"><i class="fa fa-angle-right"></i></span>'],
            responsiveClass:true,
            responsive:{
                    0:{
                    items:1,
                },
                400:{
                    items:2,
                },
                767:{
                    items:3,
                },
                991:{
                    items:4,
                },

            }
        });
     } 

    /*---Product Category---*/
    var $productCategory = $('.product-category-full');
        if($productCategory.length > 0){
        $('.product-category-full').owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 8,
            dots:false,
            navText:['<span class="productCategory-slider-nav"><i class="fa fa-angle-left"></i></span>','<span class="productCategory-slider-nav"><i class="fa fa-angle-right"></i></span>'],
            responsiveClass:true,
            responsive:{
                    0:{
                    items:3,
                },
                360:{
                    items:4,
                },
                576:{
                    items:5,
                },
                767:{
                    items:6,
                },
                991:{
                    items:7,
                },
                1080:{
                    items:8,
                },

            }
        });
     } 



    /*---Sbi Photo Gallery---*/
    var $sbiPhotoGallery = $('.sbi-photo-full');
        if($sbiPhotoGallery.length > 0){
        $('.sbi-photo-full').owlCarousel({
            autoplay: true,
            loop: true,
            nav: false,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 6,
            dots:false,
            responsiveClass:true,
            responsive:{
                    0:{
                    items:1,
                },
                360:{
                    items:2,
                },
                576:{
                    items:2,
                },
                767:{
                    items:3,
                },
                991:{
                    items:4,
                },
                1080:{
                    items:6,
                },

            }
        });
     } 


     /*---Testimonial---*/
    var $testimonialFull = $('.testimonial-full');
        if($testimonialFull.length > 0){
        $('.testimonial-full').owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 1,
            navText:['<span class="testimonialFull-slider-nav"><i class="fa fa-angle-left"></i></span>','<span class="testimonialFull-slider-nav"><i class="fa fa-angle-right"></i></span>'],
            dots:false,
            responsiveClass:true,
        });
     } 







     /**
   * Countdown timer
   */
   var eShopCountdown = $('#eShopCountdown');
    if(eShopCountdown.length > 0){

	  let eShopCountdown = document.getElementById('eShopCountdown');
	  const output = eShopCountdown.innerHTML;

	  const countDownDate = function() {
	    let timeleft = new Date(eShopCountdown.getAttribute('data-countdown-codepopular')).getTime() - new Date().getTime();

	    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
	    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
	    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

	    eShopCountdown.innerHTML = output.replace('%d', days).replace('%h', hours).replace('%m', minutes).replace('%s', seconds);
	  }
	  countDownDate();
	  setInterval(countDownDate, 1000);
	}



	// Sticky Menu
	$(window).on('scroll',function(){
		var scroll = $(window).scrollTop();
		if(scroll < 150){
			$('.header-bottom').removeClass('sticky');
		}else{
			$('.header-bottom').addClass('sticky');
		}
	});

}(jQuery));