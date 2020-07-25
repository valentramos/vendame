$(document).ready(function(){
	$(".et-preloader").fadeOut("slow");
	//-------------------------------
	// Mobile Nav Menu
	//-------------------------------
	if($("#et-mobile-nav").length) {
		$('#et-mobile-nav').hcOffcanvasNav({
			maxWidth: 768
		});
	}

	//-------------------------------
	// Google Maps Initialization
	//-------------------------------
	if ($('#loadmaps').length) {
		var singleMap   =   false;
		if($('#loadmaps').hasClass('single-map')) {
			singleMap   =   true;
		}
		loadMap(singleMap);
	}


	//-------------------------------
	// Lightbox
	//-------------------------------
	if($("a.lightbox").length) {
	$("a.lightbox").fancybox();
}
	//-------------------------------
	// jQuery Nice Select
	//-------------------------------
	if($("select").length) {
		$('select').niceSelect();
	}

	//-------------------------------
	// Custom Scrollbar
	//-------------------------------
	if($(".scrollbar-inner").length) {
		jQuery('.scrollbar-inner').scrollbar();
	}


	//-------------------------------
	// Toggle Events list/grid view
	//-------------------------------
	if($(".event-results").length) {
		$(".list-view").hide();
		$('#event-grid-view').on("click", function(){
			$(".grid-view").show();
			$(".list-view").hide();
		})
		$('#event-list-view').on("click", function(){
			$(".list-view").show();
			$(".grid-view").hide();
		})
	}


	//-------------------------------
	// Gallery Images Upload
	//-------------------------------
	$('#gallery_img_upload').change(function(event){
		var imageHTML = '';

		$(event.target.files).each(function(index){
			var tmppath = URL.createObjectURL(event.target.files[index]);
			imageHTML += '<div class="image-box no-hover position-relative"><img src="'+tmppath+'" alt="img"><span class="badge badge-primary ml-auto mt-3 pointer border-0 font-weight-normal remove-image position-absolute" data-targetimg="'+ index +'"><i class="fas fa-trash"></i></span></div>';
		});

		$('.create-gallery').html(imageHTML);
		event.preventDefault();

	});


	//-------------------------------
	// Toggle Event Filter
	//-------------------------------
	if($(".search-filter").length) {
		$('#toggle-filter').on("click", function(){
			$( ".search-filter" ).slideToggle("slow");
		});
	}

	//-------------------------------
	// Append/Remove Event Speakers
	//-------------------------------
	if($(".speakers-list").length) {
		$("#add_speaker").on("click", function(){
			$(".speakers-list table tbody").append('<tr><td contenteditable="true">Name</td><td><input class="form-control border" type="text" name="designation" placeholder="e.g Show Stopper"></td><td><div class="position-relative text-center change-speaker-avatar"><input type="file" name="change_image"><img src="img/user-avatar.jpg" class="img-fluid" alt="img"></div></td><td><span class="badge badge-primary ml-3 mt-3 pointer border-0 font-weight-normal position-absolute"><i class="fas fa-trash"></i></span></td></tr>');
		});
		$(".remove-speaker").on("click", function(){
			$(this).parents("tr").remove();
		})
	}


	//-------------------------------
	// Calendar
	//-------------------------------
	if($(".event-calendar").length) {
		$(".event-calendar .calendar:not(.month)").hide();
		$(".calendar-nav button.show-days").on("click", function(){
			$(this).addClass("btn-primary text-white").siblings("button").removeClass("btn-primary text-white");
			$(".event-calendar .calendar.day").show().siblings(".calendar").hide();
		})
		$(".calendar-nav button.show-week").on("click", function(){
			$(this).addClass("btn-primary text-white").siblings("button").removeClass("btn-primary text-white");
			$(".event-calendar .calendar.week").show().siblings(".calendar").hide();
		})
		$(".calendar-nav button.show-month").on("click", function(){
			$(this).addClass("btn-primary text-white").siblings("button").removeClass("btn-primary text-white");
			$(".event-calendar .calendar.month").show().siblings(".calendar").hide();
		})
	}

	//-------------------------------
	// Scrolldown
	//-------------------------------
	if($(".scrolldown").length) {
		$('.scrolldown').on('click', function(){
			$("html, body").animate({
				scrollTop: $('#et-popular-events').offset().top
			}, 1000);
		});
	}

	//-------------------------------
	// Fix Tabs
	//-------------------------------
	if($(".scroll-tabs").length) {
		$(window).bind('scroll', function() {
			var navHeight = $( window ).height() - 70;
			if ($(window).scrollTop() > navHeight) {
				$('.scroll-tabs').addClass('fixed shadow');
			}
			else {
				$('.scroll-tabs').removeClass('fixed shadow');
			}
		});
	}

	//-------------------------------
	// Generic Smooth Scroll on Anchor
	//-------------------------------
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();
		$(this).addClass("active").siblings().removeClass("active");
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top-75
		}, 500);
	});

	//-------------------------------
	// Switch Galleries
	//-------------------------------
	if($("#et-big-gallery").length){
		$('.big-gallery > div[class^="gallery-1"]').show();
		$(document).on('click', 'div[id^="gallery-"]', function (event) {
			event.preventDefault();
			var ID = $(this).attr("id");
			var gallery = $("div." + ID);
			$(gallery).show().siblings('div[class^="gallery-"]').hide();
		});
	}

	//-------------------------------
	// Switch Galleries
	//-------------------------------
	if($("#et-big-gallery-2").length){
		$('.big-gallery > div[class^="gallery-1"]').show();
		$(document).on('click', 'div[id^="gallery-"]', function (event) {
			event.preventDefault();
			var ID = $(this).attr("id");
			var gallery = $(".big-gallery > div").attr("class") == ID;
			console.log($(".big-gallery > div").attr("class") == ID);
			$(gallery).show();
		});
	}

	//-------------------------------
	// Range Slider
	//-------------------------------
	if($(".js-range-slider").length) {
		$(".js-range-slider").ionRangeSlider({
			skin: "big"
		});
	}

	//-------------------------------
	// Featured Events
	//-------------------------------
	if($('.featured-events .owl-carousel').length){
		$('.featured-events .owl-carousel').owlCarousel({
			loop:true,
			nav:true,
			dots:false,
			autoplay: false,
			autoplaySpeed: 1000,
			navSpeed: 1000,
			items:1
		})
	}


	//-------------------------------
	// Big gallery
	//-------------------------------
	if($('.big-gallery').length){
		$('.big-gallery .owl-carousel').owlCarousel({
			loop:true,
			nav:true,
			dots:false,
			autoplay: true,
			autoplaySpeed: 1000,
			navSpeed: 1000,
			items:1
		})
	}


	//-------------------------------
	// Testimonial
	//-------------------------------
	if($('#et-testimonial .owl-carousel').length){
		$('#et-testimonial .owl-carousel').owlCarousel({
			loop:true,
			nav:true,
			dots:false,
			autoplay: true,
			autoplaySpeed: 1000,
			navSpeed: 1000,
			items:2,
			responsive:{
				0 : {
					items:1
				},
				768 : {
					items:2
				}
			}
		})
	}

	//-------------------------------
	// Latest News
	//-------------------------------
	if($('#et-latest-news .owl-carousel').length){
		$('#et-latest-news .owl-carousel').owlCarousel({
			loop:true,
			nav:true,
			dots:false,
			margin:20,
			center: true,
			autoplay: false,
			autoplaySpeed: 1000,
			navSpeed: 1000,
			items:5,
			responsive:{
				0 : {
					items:1
				},
				// breakpoint from 480 up
				575 : {
					items:2
				},
				// breakpoint from 768 up
				768 : {
					items:3
				},
				// breakpoint from 1200 up
				1200 : {
					items:4
				}
			}
		})
	}

	//-------------------------------
	// Testimonial (About)
	//-------------------------------
	if($('#et-testimonial2 .owl-carousel').length){
		$('#et-testimonial2 .owl-carousel').owlCarousel({
			loop:true,
			nav:true,
			dots:false,
			autoplay: true,
			autoplaySpeed: 1000,
			navSpeed: 1000,
			items:2,
			responsive:{
				0 : {
					items:1
				},
				// breakpoint from 480 up
				575 : {
					items:1
				},
				// breakpoint from 768 up
				768 : {
					items:2
				},
				// breakpoint from 1200 up
				1200 : {
					items:2
				}
			}
		})
	}

	//-------------------------------
	// Upcoming Events
	//-------------------------------
	if($('#et-upcoming-events .owl-carousel').length){
		$('#et-upcoming-events .owl-carousel').owlCarousel({
			loop:true,
			nav:true,
			dots:false,
			autoplay: true,
			autoplaySpeed: 1000,
			navSpeed: 1000,
			items:5,
			center: true,
			responsive:{
				0 : {
					items:1
				},
				// breakpoint from 480 up
				575 : {
					items:2
				},
				// breakpoint from 768 up
				768 : {
					items:3
				},
				// breakpoint from 1200 up
				1200 : {
					items:5
				}
			}
		})
	}

	//-------------------------------
	// Related Events
	//-------------------------------
	if($('#et-related-events .owl-carousel').length){
		$('#et-related-events .owl-carousel').owlCarousel({
			loop:true,
			// nav:true,
			dots:false,
			autoplay: true,
			autoplaySpeed: 1000,
			navSpeed: 1000,
			items:5,
			margin: 20,
			center: true,
			responsive:{
				0 : {
					items:1
				},
				// breakpoint from 480 up
				575 : {
					items:2
				},
				// breakpoint from 768 up
				768 : {
					items:3
				},
				// breakpoint from 1200 up
				1200 : {
					items:5
				}
			}
		})
	}

	//-------------------------------
	// Content Slides
	//-------------------------------
	if($('.content-slides .owl-carousel').length){
		$('.content-slides .owl-carousel').owlCarousel({
			loop:true,
			dots:false,
			nav: true,
			autoplay: false,
			autoplaySpeed: 1000,
			navSpeed: 1000,
			items:1,
			center: true
		})
	}

	/*
	==============================================================
	Project Detail Slider
	==============================================================
	*/
	if($('#et-project_slider .owl-carousel').length){
		$("#et-project_slider .owl-carousel").owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			items:1
		});
	};

	//-------------------------------
	// Countdown
	//-------------------------------

	if($('.time-left').length){

		function makeTimer() {

			//		var endTime = new Date("29 July 2018 9:56:00 GMT+01:00");
			var endTime = new Date("29 July 2020 9:56:00 GMT+01:00");
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400);
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$(".days").html(days + "<span>Days</span>");
			$(".hours").html(hours + "<span>Hr</span>");
			$(".minutes").html(minutes + "<span>Min</span>");
			$(".seconds").html(seconds + "<span>Sec</span>");
		}
		setInterval(function() { makeTimer(); }, 1000);
	}

	//-------------------------------
	// Star Rating
	//-------------------------------

	if($('#stars').length){

		/* 1. Visualizing things on Hover - See next part for action on click */
		$('#stars li').on('mouseover', function(){
			var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

			// Now highlight all the stars that's not after the current hovered star
			$(this).parent().children('li.star').each(function(e){
				if (e < onStar) {
					$(this).addClass('hover');
				}
				else {
					$(this).removeClass('hover');
				}
			});

		}).on('mouseout', function(){
			$(this).parent().children('li.star').each(function(e){
				$(this).removeClass('hover');
			});
		});

		/* 2. Action to perform on click */
		$('#stars li').on('click', function(){
			var onStar = parseInt($(this).data('value'), 10); // The star currently selected
			var stars = $(this).parent().children('li.star');

			for (i = 0; i < stars.length; i++) {
				$(stars[i]).removeClass('selected');
			}

			for (i = 0; i < onStar; i++) {
				$(stars[i]).addClass('selected');
			}

			// JUST RESPONSE (Not needed)
			var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
			var msg = "";
			if (ratingValue > 1) {
				msg = "You rated " + ratingValue + " stars.";
			}
			else {
				msg = "You rated " + ratingValue + " stars.";
			}
			responseMessage(msg);

		});
		function responseMessage(msg) {
			$('.rate-result').fadeIn(200);
			$('.rate-result').text(msg);
		}
	}


	//-------------------------------
	// Event Gallery
	//-------------------------------

	if($('.gallery-mason').length){
		const divs = document.querySelectorAll('.gallery-mason .image-box');
		const body = document.body;
		const prev = document.querySelector('.gallery-mason .prev');
		const next = document.querySelector('.gallery-mason .next');


		Array.prototype.slice.call(divs).forEach(function (el) {
			el.addEventListener('click', function () {
				this.classList.toggle('show');
				body.classList.toggle('gallery-active');
				checkNext();
				checkPrev();
			});
		});

		prev.addEventListener('click', function() {
			const show = document.querySelector('.gallery-mason .image-box.show');
			const event = document.createEvent('HTMLEvents');
			event.initEvent('click', true, false);

			show.previousElementSibling.dispatchEvent(event);
			show.classList.remove('show');
			body.classList.toggle('gallery-active');
			checkNext();
		});

		next.addEventListener('click', function() {
			const show = document.querySelector('.gallery-mason .image-box.show');
			const event = document.createEvent('HTMLEvents');
			event.initEvent('click', true, false);

			show.nextElementSibling.dispatchEvent(event);
			show.classList.remove('show');
			body.classList.toggle('gallery-active');
			checkPrev();
		});

		// Remove Image
		$(".image-box .remove-image").on("click", function(){
			$(this).parent(".image-box").remove();
		})
	}
	//-------------------------------
	// Bootstrap DateTimePicker
	//-------------------------------
	if($(".form_datetime").length) {
		$(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii'});
	}

	//-------------------------------
	// Choose Package Plan
	//-------------------------------
	if($(".price-plans").length) {
		$(".price-plans .price-plan").on('click', function(){
			$(this).addClass("active").siblings().removeClass("active");
		})
	}

	//-------------------------------
	// Initiliaze Tooltip
	//-------------------------------
	if($('[data-toggle="tooltip"]').length) {
		$(function () {
			$('[data-toggle="tooltip"]').tooltip({
				// Pass options here
			})
		})
	}


	//-----------------------------------------
	// Variable content info for Add Event Form
	//-----------------------------------------

	if($("#et-add-event").length) {
		var infoBoxTop  =   $('.info-box').offset().top+50;
		$(".getcontent").each(function() {
			$(this).find(".form-control").focus(function() {
				console.log('focused');
				var infoBoxNewTop   =   $(this).offset().top-infoBoxTop;
				var title = $(this).attr("placeholder");
				var description = $(this).attr("title");

				$(".info-box").css('margin-top', infoBoxNewTop+'px');

				$(".info-box h5").text(title);
				$(".info-box p").text(description);
			});
		});
	}

});

//-------------------------------
// Google Maps
//-------------------------------
function loadMap(singleMap) {
	var docWidth    =   $(document).width();
	if(singleMap) {
		var mapZoom     =   13,
		mapCenter   =   [-33.9169667, 151.2345321]
		var lsitingLocations = [
			['Maroubra Beach', -33.9169667, 151.2345321, 1]
		];

		var listingContents =   [
			'<div class="listing-map-window"><img src="img/popular-event-1.jpg" class="mb-3 w-100" alt="img"><div class="pl-1"><h6>Annual Food Festival</h6><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><span class="badge badge-primary mr-3">Running</span><a class="w-100 text-primary" href="#">View Details <i class="fas fa-angle-double-right"></i></a></div></div>',
		]
	} else {

		var mapZoom     =   16;
		if($('.sidebar-map-fixed').length && docWidth > 980){
			var footerHeight    =   $('.et-copyright-bar').height(),
			windowHeight    =   $(window).height(),
			mapTop          =   $('.sidebar-map-fixed').offset().top,
			mapHeight       =   parseInt(windowHeight-(mapTop+footerHeight));


			$('.sidebar-map-fixed').css('height', mapHeight+'px');
			mapZoom     =   14;
		}
		if(jQuery('section.et-maps-banner-wrapper').length) {
			mapZoom	=	15;
		}


		if(docWidth > 319 && docWidth < 980) {
			mapZoom =   14
		}
		var mapCenter   =   [-33.91722, 151.23064];
		var lsitingLocations = [
			['Bondi Beach', -33.9148339, 151.2404048, 4],
			['new beach', -33.9169667, 151.2345321, 3],
			['new beach', -33.9158827, 151.2314457, 2],
			['new beach', -33.9175679, 151.2255712, 1],
		];

		var listingContents =   [
			'<div class="listing-map-window"><img src="img/popular-event-1.jpg" class="mb-3 w-100" alt="img"><div class="pl-1"><h6>Annual Food Festival</h6><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><span class="badge badge-primary mr-3">Running</span><a class="w-100 text-primary" href="#">View Details <i class="fas fa-angle-double-right"></i></a></div></div>',
		]
	}


	var icons = ['hotel', 'shopping', 'auto', 'hospital'];
	var map = new google.maps.Map(document.getElementById('loadmaps'), {
		zoom: mapZoom,
		center: new google.maps.LatLng(mapCenter[0], mapCenter[1]),
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});

	var infowindow = new google.maps.InfoWindow();

	var marker, i;

	for (i = 0; i < lsitingLocations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(lsitingLocations[i][1], lsitingLocations[i][2]),
			map: map,
			icon: 'img/'+icons[i]+'-marker.png'
		});
		if(docWidth > 767) {
			google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
					infowindow.setContent(listingContents[0]);
					infowindow.open(map, marker);
				}
			})(marker, i));
		}
	}
}
