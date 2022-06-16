
$(document).ready(function(){
	$('.text_recensione_gc_europe').hover(function(){
		$(this).parent('.recensione').addClass("recensione_gc_europe");
    }, function(){
    	$(this).parent('.recensione').removeClass("recensione_gc_europe");
	});

	$('.text_recensione_gc_europe2').hover(function(){
		$(this).parent('.recensione').addClass("recensione_gc_europe");
    }, function(){
    	$(this).parent('.recensione').removeClass("recensione_gc_europe");
	});
	$('.text_recensione_gc_europe3').hover(function(){
		$(this).parent('.recensione').addClass("recensione_gc_europe");
    }, function(){
    	$(this).parent('.recensione').removeClass("recensione_gc_europe");
	});

	$('.text_recensione_gc_caucasus').hover(function(){
		$(this).parent('.recensione').addClass("recensione_gc_caucasus");
    }, function(){
    	$(this).parent('.recensione').removeClass("recensione_gc_caucasus");
	});

	$('.text_recensione_gc_africa').hover(function(){
		$(this).parent('.recensione').addClass("recensione_gc_africa");
    }, function(){
    	$(this).parent('.recensione').removeClass("recensione_gc_africa");
	});

	$('.text_recensione_gc_latin_america').hover(function(){
		$(this).parent('.recensione').addClass("recensione_gc_latin_america");
    }, function(){
    	$(this).parent('.recensione').removeClass("recensione_gc_latin_america");
	});

	$('.text_recensione_gc_arab').hover(function(){
		$(this).parent('.recensione').addClass("recensione_gc_arab");
    }, function(){
    	$(this).parent('.recensione').removeClass("recensione_gc_arab");
	});

	$('.text_recensione_gc_south_east_europe').hover(function(){
		$(this).parent('.recensione').addClass("recensione_gc_south_east_europe");
    }, function(){
    	$(this).parent('.recensione').removeClass("recensione_gc_south_east_europe");
	});

	$('.text_recensione_gc_asia_pacific').hover(function(){
	  $(this).parent('.recensione').addClass("recensione_gc_asia_pacific");
	  }, function(){
	    $(this).parent('.recensione').removeClass("recensione_gc_asia_pacific");
	});

});



//apertura mega menu
$(function(){

	///////////////////////////////////////////////
	// Mouse over event for the Main menu items //
	///////////////////////////////////////////////
	$('.digimeg-main-nav>li').on('mouseover', function (){

		var navContentId = $(this).attr('id');

		// Get the subnav's ID from [data-subnav] attribute of the currently hovered menu item
		//var navContentId = $(this).data('subnav');
		// Stop (in case the sub nav was sliding up) and slidedown
		$('#'+navContentId+'-subnav').stop().slideDown({ queue : false});

		////////////////////////////////////////////////////////////////
		// show the little arrow on the currently hovered menu item //
		////////////////////////////////////////////////////////////////
		var $el = $(this);
		var mark = $el.find('.digimeg-active-mark');

		mark.css({
		   'left' : ($el.outerWidth()/2)-(mark.outerWidth()/2),
		   'top' : $el.outerHeight()
		}).show();
		////////////////////////////////////////////////////////////////

	});

	//////////////////////////////////////////////
	// Mouse out event for the Main menu items //
	//////////////////////////////////////////////
	$('.digimeg-main-nav>li').on('mouseout', function (){

		var navContentId = $(this).attr('id');

		// Find the subnav's id from the [data-subnav] attribute of the currently hovered item
		//var navContentId = $(this).data('subnav');
		// Stop ( in case the sub nav was sliding down ) and slide up
		$('#'+navContentId+'-subnav').stop().slideUp({ queue : false});

		////////////////////////////////////////////////////////////////////////////////
		// Hide the active mark from the Menu item on which the event was triggered //
		////////////////////////////////////////////////////////////////////////////////
		var $el = $(this);
		var mark = $el.find('.digimeg-active-mark');

		mark.css({
		   'left' : ($el.outerWidth()/2)-(mark.outerWidth()/2),
		   'top' : 0
		}).hide();
		//////////////////////////////////////////////////////////////////////////////////
	});


	// Events to make the subnav's stay when they are being hovered over

	/////////////////////////////////////////////////
	// When the mouse is hovering over the subnav //
	/////////////////////////////////////////////////
	$('.digimeg-sub-nav>li').on('mouseover', function () {

		// Stop ( in case the subnav was sliding up) and slide down
		$(this).stop().slideDown({ queue : false});

	});

	/////////////////////////////////////////////////
	// When the mouse has moved out of the subnav //
	/////////////////////////////////////////////////
	$('.digimeg-sub-nav>li').on('mouseout', function (){
		// Stop ( in case the sub nav was sliding down ) and slide up
		$(this).stop().slideUp({ queue : false});
	});

});


// aggiungo attributo data-subnav all' <li> del menu
/*$(function(){
	$(".prima_voce a").attr("data-subnav" , "Admissions-subnav");
	$(".seconda_voce a").attr("data-subnav" , "Education-subnav");
	$(".terza_voce a").attr("data-subnav" , "Research-subnav");
	$(".quarta_voce a").attr("data-subnav" , "News-subnav");
	$(".quinta_voce a").attr("data-subnav" , "About-subnav");
	$(".sesta_voce a").attr("data-subnav" , "Support-subnav");
});*/

// aggiungo attributo data-subnav all' <li> del menu
$(function(){
	$(".prima_voce").attr("id" , "Admissions");
	$(".seconda_voce").attr("id" , "Education");
	$(".terza_voce").attr("id" , "Research");
	$(".quarta_voce").attr("id" , "News");
	$(".quinta_voce").attr("id" , "About");
	$(".sesta_voce").attr("id" , "Support");
	$(".settima_voce").attr("id" , "Forum");
	$(".ottava_voce").attr("id" , "Latest");
});


//hover menu
$(function(){

	//hover submenu rimane accesa la voce prodotti
	$('#Admissions-subnav').on('mouseover', function () {
		$('#header nav .menu li.prima_voce a').addClass("hover_menu");
		$('#header nav .menu li.prima_voce').addClass("hover_menu_bordo");
	});
	$('#Admissions-subnav').on('mouseout', function (){
		$('#header nav .menu li.prima_voce a').removeClass("hover_menu");
		$('#header nav .menu li.prima_voce').removeClass("hover_menu_bordo");
	});

	//hover submenu rimane accesa la voce prodotti
	$('#Education-subnav').on('mouseover', function () {
		$('#header nav .menu li.seconda_voce a').addClass("hover_menu");
		$('#header nav .menu li.seconda_voce').addClass("hover_menu_bordo");
	});
	$('#Education-subnav').on('mouseout', function (){
		$('#header nav .menu li.seconda_voce a').removeClass("hover_menu");
		$('#header nav .menu li.seconda_voce').removeClass("hover_menu_bordo");
	});

	//hover submenu rimane accesa la voce prodotti
	$('#Research-subnav').on('mouseover', function () {
		$('#header nav .menu li.terza_voce a').addClass("hover_menu");
		$('#header nav .menu li.terza_voce').addClass("hover_menu_bordo");
	});
	$('#Research-subnav').on('mouseout', function (){
		$('#header nav .menu li.terza_voce a').removeClass("hover_menu");
		$('#header nav .menu li.terza_voce').removeClass("hover_menu_bordo");
	});

	//hover submenu rimane accesa la voce prodotti
	$('#News-subnav').on('mouseover', function () {
		$('#header nav .menu li.quarta_voce a').addClass("hover_menu");
		$('#header nav .menu li.quarta_voce').addClass("hover_menu_bordo");
	});
	$('#News-subnav').on('mouseout', function (){
		$('#header nav .menu li.quarta_voce a').removeClass("hover_menu");
		$('#header nav .menu li.quarta_voce').removeClass("hover_menu_bordo");
	});

	//hover submenu rimane accesa la voce prodotti
	$('#About-subnav').on('mouseover', function () {
		$('#header nav .menu li.quinta_voce a').addClass("hover_menu");
		$('#header nav .menu li.quinta_voce').addClass("hover_menu_bordo");
	});
	$('#About-subnav').on('mouseout', function (){
		$('#header nav .menu li.quinta_voce a').removeClass("hover_menu");
		$('#header nav .menu li.quinta_voce').removeClass("hover_menu_bordo");
	});

	//hover submenu rimane accesa la voce prodotti
	$('#Support-subnav').on('mouseover', function () {
		$('#header nav .menu li.sesta_voce a').addClass("hover_menu");
		$('#header nav .menu li.sesta_voce').addClass("hover_menu_bordo");
	});
	$('#Support-subnav').on('mouseout', function (){
		$('#header nav .menu li.sesta_voce a').removeClass("hover_menu");
		$('#header nav .menu li.sesta_voce').removeClass("hover_menu_bordo");
	});
	$('#Forum-subnav').on('mouseover', function () {
		$('#header nav .menu li.settima_voce a').addClass("hover_menu");
		$('#header nav .menu li.settima_voce').addClass("hover_menu_bordo");
	});
	$('#Forum-subnav').on('mouseout', function (){
		$('#header nav .menu li.settima_voce a').removeClass("hover_menu");
		$('#header nav .menu li.settima_voce').removeClass("hover_menu_bordo");
	});
	$('#Latest-subnav').on('mouseover', function () {
		$('#header nav .menu li.ottava_voce a').addClass("hover_menu");
		$('#header nav .menu li.ottava_voce').addClass("hover_menu_bordo");
	});
	$('#Latest-subnav').on('mouseout', function (){
		$('#header nav .menu li.ottava_voce a').removeClass("hover_menu");
		$('#header nav .menu li.ottava_voce').removeClass("hover_menu_bordo");
	});



});




// freccia che porta alla sezione main
$(function(){
	$('.freccia_scroll').on("click", function() {
		 $('html, body').animate({
		     scrollTop: ($('#lancio-wide').offset().top - 190)
		 }, 1200, 'easeOutExpo');
		 return false;
	});
});


//menu stiky
var shrinkHeader = 460;
$(window).scroll(function() {
var scroll = getCurrentScroll();
	if ( scroll <= shrinkHeader ) {
		$('#headerwrapper').removeClass('shrink');
		$('#headerwrapper nav .menu li').removeClass('shrink');
		$('#headerwrapper nav .menu li a').removeClass('shrink');
		$('.digimeg-sub-nav').removeClass('shrink');
		$('.logo_global_campus').removeClass('shrink');
		$('.logo_eiuc').removeClass('shrink');
	}
	else {
		$('#headerwrapper').addClass('shrink');
		$('#headerwrapper nav .menu li').addClass('shrink');
		$('#headerwrapper nav .menu li a').addClass('shrink');
		$('.digimeg-sub-nav').addClass('shrink');
		$('.logo_global_campus').addClass('shrink');
		$('.logo_eiuc').addClass('shrink');
	}
});

function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
}



$(function(){
	$(".text_recensione_gc_europe").on("click", function(){
		$(".quote_europe").removeClass("z_index");
		$(".quote_europe").animate( {opacity:'1'}, 100);
	});
	$(".chiudi").on("click", function(){
		$(".quote_europe").animate( {opacity:'0'}, 100, function(){
			$(this).addClass("z_index");
		});
	});
	$(".text_recensione_gc_europe2").on("click", function(){
		$(".quote_europe2").removeClass("z_index");
		$(".quote_europe2").animate( {opacity:'1'}, 100);
	});
	$(".chiudi").on("click", function(){
		$(".quote_europe2").animate( {opacity:'0'}, 100, function(){
			$(this).addClass("z_index");
		});
	});
	$(".text_recensione_gc_europe3").on("click", function(){
		$(".quote_europe3").removeClass("z_index");
		$(".quote_europe3").animate( {opacity:'1'}, 100);
	});
	$(".chiudi").on("click", function(){
		$(".quote_europe3").animate( {opacity:'0'}, 100, function(){
			$(this).addClass("z_index");
		});
	});

	$(".text_recensione_gc_arab").on("click", function(){
		$(".quote_arab").removeClass("z_index");
		$(".quote_arab").animate( {opacity:'1'}, 100);
	});
	$(".chiudi").on("click", function(){
		$(".quote_arab").animate( {opacity:'0'}, 100, function(){
			$(this).addClass("z_index");
		});
	});

	$(".text_recensione_gc_south_east_europe").on("click", function(){
		$(".quote_south_east_europe").removeClass("z_index");
		$(".quote_south_east_europe").animate( {opacity:'1'}, 100);
	});
	$(".chiudi").on("click", function(){
		$(".quote_south_east_europe").animate( {opacity:'0'}, 100, function(){
			$(this).addClass("z_index");
		});
	});

	$(".text_recensione_gc_latin_america").on("click", function(){
		$(".quote_america").removeClass("z_index");
		$(".quote_america").animate( {opacity:'1'}, 100);
	});
	$(".chiudi").on("click", function(){
		$(".quote_america").animate( {opacity:'0'}, 100, function(){
			$(this).addClass("z_index");
		});
	});

	$(".text_recensione_gc_caucasus").on("click", function(){
		$(".quote_caucasus").removeClass("z_index");
		$(".quote_caucasus").animate( {opacity:'1'}, 100);
	});
	$(".chiudi").on("click", function(){
		$(".quote_caucasus").animate( {opacity:'0'}, 100, function(){
			$(this).addClass("z_index");
		});
	});

	$(".text_recensione_gc_asia_pacific").on("click", function(){
	  $(".quote_asia_pacific").removeClass("z_index");
	  $(".quote_asia_pacific").animate( {opacity:'1'}, 100);
	});
	$(".chiudi").on("click", function(){
	  $(".quote_asia_pacific").animate( {opacity:'0'}, 100, function(){
	    $(this).addClass("z_index");
	  });
	});

	$(".text_recensione_gc_africa").on("click", function(){
		$(".quote_africa").removeClass("z_index");
		$(".quote_africa").animate( {opacity:'1'}, 100);
	});
	$(".chiudi").on("click", function(){
		$(".quote_africa").animate( {opacity:'0'}, 100, function(){
			$(this).addClass("z_index");
		});
	});



});




$(function(){
	if ($(window).width() <= 640){

		$(".text_recensione_gc_europe").on("click", function(){
			$(".quote_europe").addClass("z_index");
			$(".quote_europe").animate( {opacity:'0'}, 100);
		});
		$(".chiudi").on("click", function(){
			$(".quote_europe").animate( {opacity:'0'}, 100, function(){
				$(this).addClass("z_index");
			});
		});

		$(".text_recensione_gc_europe").on("click", function(){
			$(".quote_europe_mobile").removeClass("z_index");
			$(".quote_europe_mobile").animate( {opacity:'1'}, 100);
		});
		$(".chiudi_quote_europe_mobile").on("click", function(){
			$(".quote_europe_mobile").animate( {opacity:'0'}, 100, function(){
				$(this).addClass("z_index");
			});
		});

		$(".text_recensione_gc_europe2").on("click", function(){
			$(".quote_europe2").addClass("z_index");
			$(".quote_europe2").animate( {opacity:'0'}, 100);
		});
		$(".chiudi").on("click", function(){
			$(".quote_europe2").animate( {opacity:'0'}, 100, function(){
				$(this).addClass("z_index");
			});
		});

		$(".text_recensione_gc_europe2").on("click", function(){
			$(".quote_europe2_mobile").removeClass("z_index");
			$(".quote_europe2_mobile").animate( {opacity:'1'}, 100);
		});
		$(".chiudi_quote_europe2_mobile").on("click", function(){
			$(".quote_europe2_mobile").animate( {opacity:'0'}, 100, function(){
				$(this).addClass("z_index");
			});
		});

		$(".text_recensione_gc_europe3").on("click", function(){
	$(".quote_europe3").addClass("z_index");
	$(".quote_europe3").animate( {opacity:'0'}, 100);
});
$(".chiudi").on("click", function(){
	$(".quote_europe3").animate( {opacity:'0'}, 100, function(){
		$(this).addClass("z_index");
	});
});

$(".text_recensione_gc_europe3").on("click", function(){
	$(".quote_europe3_mobile").removeClass("z_index");
	$(".quote_europe3_mobile").animate( {opacity:'1'}, 100);
});
$(".chiudi_quote_europe3_mobile").on("click", function(){
	$(".quote_europe3_mobile").animate( {opacity:'0'}, 100, function(){
		$(this).addClass("z_index");
	});
});


		$(".text_recensione_gc_arab").on("click", function(){
			$(".quote_arab").addClass("z_index");
			$(".quote_arab").animate( {opacity:'0'}, 100);
		});
		$(".chiudi").on("click", function(){
			$(".quote_arab").animate( {opacity:'0'}, 100, function(){
				$(this).addClass("z_index");
			});
		});

		$(".text_recensione_gc_arab").on("click", function(){
			$(".quote_arab_mobile").removeClass("z_index");
			$(".quote_arab_mobile").animate( {opacity:'1'}, 100);
		});
		$(".chiudi_quote_arab_mobile").on("click", function(){
			$(".quote_arab_mobile").animate( {opacity:'0'}, 100, function(){
				$(this).addClass("z_index");
			});
		});
		
		$(".text_recensione_gc_asia_pacific").on("click", function(){
		  $(".quote_asia_pacific").addClass("z_index");
		  $(".quote_asia_pacific").animate( {opacity:'0'}, 100);
		});
		$(".chiudi").on("click", function(){
		  $(".quote_asia_pacific").animate( {opacity:'0'}, 100, function(){
		    $(this).addClass("z_index");
		  });
		});

		$(".text_recensione_gc_asia_pacific").on("click", function(){
		  $(".quote_asia_pacific_mobile").removeClass("z_index");
		  $(".quote_asia_pacific_mobile").animate( {opacity:'1'}, 100);
		});
		$(".chiudi_quote_asia_pacific_mobile").on("click", function(){
		  $(".quote_asia_pacific_mobile").animate( {opacity:'0'}, 100, function(){
		    $(this).addClass("z_index");
		  });
		});

		$(".text_recensione_gc_south_east_europe").on("click", function(){
			$(".quote_south_east_europe").addClass("z_index");
			$(".quote_south_east_europe").animate( {opacity:'0'}, 100);
		});
		$(".chiudi").on("click", function(){
			$(".quote_south_east_europe").animate( {opacity:'0'}, 100, function(){
				$(this).addClass("z_index");
			});
		});

		$(".text_recensione_gc_south_east_europe").on("click", function(){
			$(".quote_south_east_europe_mobile").removeClass("z_index");
			$(".quote_south_east_europe_mobile").animate( {opacity:'1'}, 100);
		});
		$(".chiudi_quote_south_east_europe_mobile").on("click", function(){
			$(".quote_south_east_europe_mobile").animate( {opacity:'0'}, 100, function(){
				$(this).addClass("z_index");
			});
		});



		$(".text_recensione_gc_latin_america").on("click", function(){
			$(".quote_america").addClass("z_index");
			$(".quote_america").animate( {opacity:'0'}, 100);
		});
		$(".chiudi").on("click", function(){
			$(".quote_america").animate( {opacity:'0'}, 100, function(){
				$(this).addClass("z_index");
			});
		});

		$(".text_recensione_gc_latin_america").on("click", function(){
			$(".quote_america_mobile").removeClass("z_index");
			$(".quote_america_mobile").animate( {opacity:'1'}, 100);
		});
		$(".chiudi_quote_america_mobile").on("click", function(){
			$(".quote_america_mobile").animate( {opacity:'0'}, 100, function(){
				$(this).addClass("z_index");
			});
		});




		$(".text_recensione_gc_caucasus").on("click", function(){
			$(".quote_caucasus").addClass("z_index");
			$(".quote_caucasus").animate( {opacity:'0'}, 100);
		});
		$(".chiudi").on("click", function(){
			$(".quote_caucasus").animate( {opacity:'0'}, 100, function(){
				$(this).addClass("z_index");
			});
		});

		$(".text_recensione_gc_caucasus").on("click", function(){
			$(".quote_caucasus_mobile").removeClass("z_index");
			$(".quote_caucasus_mobile").animate( {opacity:'1'}, 100);
		});
		$(".chiudi_quote_caucasus_mobile").on("click", function(){
			$(".quote_caucasus_mobile").animate( {opacity:'0'}, 100, function(){
				$(this).addClass("z_index");
			});
		});




		$(".text_recensione_gc_africa").on("click", function(){
			$(".quote_africa").addClass("z_index");
			$(".quote_africa").animate( {opacity:'0'}, 100);
		});
		$(".chiudi").on("click", function(){
			$(".quote_africa").animate( {opacity:'0'}, 100, function(){
				$(this).addClass("z_index");
			});
		});

		$(".text_recensione_gc_africa").on("click", function(){
			$(".quote_africa_mobile").removeClass("z_index");
			$(".quote_africa_mobile").animate( {opacity:'1'}, 100);
		});
		$(".chiudi_quote_africa_mobile").on("click", function(){
			$(".quote_africa_mobile").animate( {opacity:'0'}, 100, function(){
				$(this).addClass("z_index");
			});
		});



	}
});












$(function(){
	$(".puntina_colorata_europe").on("click", function(){
		$(".pop_up_mappa_europe").removeClass("z_index");
		$(".pop_up_mappa_europe").animate( {opacity:'1'}, 100);
	});
	$(".pop_up_mappa_europe .chiudi").on("click", function(){
		$(".pop_up_mappa_europe").animate( {opacity:'0'}, 100, function(){
			$(this).addClass("z_index");
		});
	});

	$(".puntina_colorata_south_east_europe").on("click", function(){
		$(".pop_up_mappa_south_east_europe").removeClass("z_index");
		$(".pop_up_mappa_south_east_europe").animate( {opacity:'1'}, 100);
	});
	$(".pop_up_mappa_south_east_europe .chiudi").on("click", function(){
		$(".pop_up_mappa_south_east_europe").animate( {opacity:'0'}, 100, function(){
			$(this).addClass("z_index");
		});
	});

	$(".puntina_colorata_caucasus").on("click", function(){
		$(".pop_up_mappa_caucasus").removeClass("z_index");
		$(".pop_up_mappa_caucasus").animate( {opacity:'1'}, 100);
	});
	$(".pop_up_mappa_caucasus .chiudi").on("click", function(){
		$(".pop_up_mappa_caucasus").animate( {opacity:'0'}, 100, function(){
			$(this).addClass("z_index");
		});
	});

	$(".puntina_colorata_africa").on("click", function(){
		$(".pop_up_mappa_africa").removeClass("z_index");
		$(".pop_up_mappa_africa").animate( {opacity:'1'}, 100);
	});
	$(".pop_up_mappa_africa .chiudi").on("click", function(){
		$(".pop_up_mappa_africa").animate( {opacity:'0'}, 100, function(){
			$(this).addClass("z_index");
		});
	});

	$(".puntina_colorata_asia").on("click", function(){
		$(".pop_up_mappa_asia").removeClass("z_index");
		$(".pop_up_mappa_asia").animate( {opacity:'1'}, 100);
	});
	$(".pop_up_mappa_asia .chiudi").on("click", function(){
		$(".pop_up_mappa_asia").animate( {opacity:'0'}, 100, function(){
			$(this).addClass("z_index");
		});
	});

	$(".puntina_colorata_america").on("click", function(){
		$(".pop_up_mappa_america").removeClass("z_index");
		$(".pop_up_mappa_america").animate( {opacity:'1'}, 100);
	});
	$(".pop_up_mappa_america .chiudi").on("click", function(){
		$(".pop_up_mappa_america").animate( {opacity:'0'}, 100, function(){
			$(this).addClass("z_index");
		});
	});

	$(".puntina_colorata_arab").on("click", function(){
		$(".pop_up_mappa_arab").removeClass("z_index");
		$(".pop_up_mappa_arab").animate( {opacity:'1'}, 100);
	});
	$(".pop_up_mappa_arab .chiudi").on("click", function(){
		$(".pop_up_mappa_arab").animate( {opacity:'0'}, 100, function(){
			$(this).addClass("z_index");
		});
	});


});


$(function(){

	$( ".icon_e_title_accordion_parent" ).on("click", function() {
		$(this).find(".verticale").toggleClass('rotated');

		$(this).toggleClass('open_accordion');
		if ( $(this).hasClass('open_accordion') ){
			$(this).find(".title_accordion").text('Read Less');
		} else {
			$(this).find(".title_accordion").text('Read More');
		}

		//doppie accordion --> nasconde altre accordion
		$(this).parent (".accordion").parent (".description_page_programme").find ('.other_accordion').slideToggle( "slow", function() {
			// Animation complete.

		});
		$(this).parent (".accordion").parent (".description_page_programme_no_border").find ('.other_accordion').slideToggle( "slow", function() {
			// Animation complete.
		});
	});

	/*$('.text_accordion').hide ();*/
	/*$('.text_accordion:not(:first)').hide ();*/
	/*$( ".verticale:first" ).toggleClass('rotated');*/
	$( ".icon_e_title_accordion" ).on("click", function() {
		$(this).find(".verticale").toggleClass('rotated');

		$(this).toggleClass('open_accordion');
		if ( $(this).hasClass('open_accordion') ){
			$(this).find(".more_less").text('Read Less');
		} else {
			$(this).find(".more_less").text('Read More');
		}

		$(this).parent (".accordion").find ('.text_accordion , .list_accordion').slideToggle( "slow", function() {
			// Animation complete.
		});
		$(this).parent (".accordion").parent (".description_page_programme").find ('.text_read_more').slideToggle( "slow", function() {
			// Animation complete.
		});
		$(this).parent (".accordion").parent (".description_page_programme_no_border").find ('.text_read_more').slideToggle( "slow", function() {
			// Animation complete.
		});



		// accordion button
		$(this).parent (".titolo_e_button_accordion").parent (".accordion").find ('.list_accordion').slideToggle( "slow", function() {
			// Animation complete.
		});

		$.cookie('accordion_visible1', $('#list_accordion1').is(':visible').toString());

		$.cookie('accordion_visible2', $('#list_accordion2').is(':visible').toString());

		$.cookie('accordion_visible3', $('#list_accordion3').is(':visible').toString());

		$.cookie('accordion_visible4', $('#list_accordion4').is(':visible').toString());

		return false;
	});

	$(function() {
	    if($.cookie('accordion_visible1') == 'true') {
	        $('#list_accordion1').show();
			$('#list_accordion1').parent(".accordion").find(".titolo_e_button_accordion").find(".icon_e_title_accordion").find(".verticale").toggleClass('rotated');
	    } else {
	        $('#list_accordion1').hide();
	    }



	    if($.cookie('accordion_visible2') == 'true') {
	        $('#list_accordion2').show();
			$('#list_accordion2').parent(".accordion").find(".titolo_e_button_accordion").find(".icon_e_title_accordion").find(".verticale").toggleClass('rotated');
	    } else {
	        $('#list_accordion2').hide();
	    }



	    if($.cookie('accordion_visible3') == 'true') {
	        $('#list_accordion3').show();
			$('#list_accordion3').parent(".accordion").find(".titolo_e_button_accordion").find(".icon_e_title_accordion").find(".verticale").toggleClass('rotated');
	    } else {
	        $('#list_accordion3').hide();
	    }


	    if($.cookie('accordion_visible4') == 'true') {
	        $('#list_accordion4').show();
			$('#list_accordion4').parent(".accordion").find(".titolo_e_button_accordion").find(".icon_e_title_accordion").find(".verticale").toggleClass('rotated');
	    } else {
	        $('#list_accordion4').hide();
	    }

		$.removeCookie('accordion_visible1');
		$.removeCookie('accordion_visible2');
		$.removeCookie('accordion_visible3');
		$.removeCookie('accordion_visible4');

	});

});


//secondo menu mobile
$(function(){
	$(".accordion_submenu").on("click", function() {
		$(".freccia_giu_accordion").toggleClass('rotated_180');
		$(this).parent (".container_accordion_submenu").find ('.level_1').slideToggle( 	function() {
			// Animation complete.
		});
	});
});


//spalla mobile
$(function(){
	$(".accordion_submenu_spalla").on("click", function() {
		$(".accordion_submenu_spalla .freccia_giu_accordion").toggleClass('rotated_180');
		$(this).find('#nav-icon3').toggleClass('open');
		 $(this).parent (".container_accordion_submenu").find ('.level_1').slideToggle( function() {
			// Animation complete.
		});
	});
});



//slick slider
$(function(){
	var numeroGallery = $(".slider_container").length;

	for(i=0; i<=numeroGallery; i++){
	var number = ".regularN"+i;
	var slider = ".sliderN"+i;


		$(number).slick({
		    dots: true,
		    infinite: true,
		    slidesToShow: 1,
		    slidesToScroll: 1,
			arrows:true,
			appendArrows: slider + " .arrows_number_nav",
			prevArrow: '<div class="arrow_sx_slider"><img src="files/eiuc/freccia_sx.svg"></div>',
			nextArrow: '<div class="arrow_dx_slider"><img src="files/eiuc/freccia_sx.svg"></div>',
			//variableWidth:true,
			appendDots: slider + " .first_number",

			responsive: [
			    {
			      breakpoint: 770,
			      settings: {
			        prevArrow: '<div class="arrow_sx_slider"><img src="files/eiuc/freccia_sx_gray.svg"></div>',
					nextArrow: '<div class="arrow_dx_slider"><img src="files/eiuc/freccia_sx_gray.svg"></div>',
			      }
			    }
			  ]

		});


		$(slider + " .second_number").html($(slider + " .slider_recensioni").length - 2 );

	}

	/*$('.data_news').text(number);*/
});



// apertura ricerca

$(function(){
	$('.search').click(function() {
		$(".ricercablu").addClass("display_flex");
		$(".rettangolo_ricerca").addClass("height_vh");
	    var left = $('.search').position().left;
		var positioLeft = left + 18;
		$('.triangolo_blu_cerca').css("left", + positioLeft );
		$(".triangolo_blu_cerca").fadeIn( 200, function(){
			$(this).addClass("z_index_200  opacity1");

		});
		$("#ctrl_keywords_8").get(0).focus();
		$(".rettangolo_ricerca").fadeIn( 200, function(){
			$(this).addClass("z_index_200 opacity09");

		});
	});

	$('.chiudi_cerca').click(function() {
		$(".ricercablu").removeClass("display_flex");
		$(".rettangolo_ricerca").fadeOut( 200, function(){
			$(this).removeClass("height_vh");

		});
		$(".triangolo_blu_cerca").fadeOut( 200, function(){
			$(this).removeClass("z_index_200  opacity1");

		});
		$(".rettangolo_ricerca").fadeOut( 200, function(){
			$(this).removeClass("z_index_200 opacity09");

		});
	});
});



$(function(){
	$('.text_news .more.freccia_dx a').html('<img src="files/eiuc/freccia-dx.svg" alt="freccia destra">');

	$('.testo_evento .more.freccia_dx a').html('<img src="files/eiuc/freccia-dx.svg" alt="freccia destra">');
});

$(function(){
	$('.space').html("");
});


$(function(){
	$( ".mod_faqpage article h3" ).on("click", function() {
		$(this).parent (".even").find ('.ce_text p, .ce_text div, .ce_text ul, .ce_text table').slideToggle( "slow", function() {
			// Animation complete.
		});
		$(this).parent (".odd").find ('.ce_text p, .ce_text div, .ce_text ul, .ce_text table').slideToggle( "slow", function() {
			// Animation complete.
		});
	});
});

$(function(){
	$(".galleria-container.notouch.galleria-theme-classic").attr("style" , "");
});


$(function(){
	$(".cat_europe .cat_evento").addClass("gc_europe");
	$(".cat_south_east_europe .cat_evento").addClass("gc_south_east_europe");
	$(".cat_caucasus .cat_evento").addClass("gc_caucasus");
	$(".cat_africa .cat_evento").addClass("gc_africa");
	$(".cat_asia .cat_evento").addClass("gc_asia_pacific");
	$(".cat_america .cat_evento").addClass("gc_latin_america");
	$(".cat_arab .cat_evento").addClass("gc_arab");

	$(".cat_evento .testo_evento p:first-of-type").addClass("cat_titolo");
});


//form donations
$(function(){
	$("input.euro_donations").attr("type" , "number");
	$("input.euro_1000_donations").attr("min" , "1000");
	$("input.euro_1600_donations").attr("min" , "1600");
	$("input.euro_2000_donations").attr("min" , "2000");
	$("input.euro_8000_donations").attr("min" , "8000");
});


$(function () {

   	$('#bottone_pay').click(function() {
        var url = "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=H5RK457TRN6SJ&item_name=";
        url += $('#item_name_general').val() + "&item_number=";
		url += $('#item_number_general').val() + "&amount=";
		url += $('#ctrl_5012').val();
        url += "&currency_code=EUR";

		var controlloMinimo = $('#ctrl_5012').val();

		if ( controlloMinimo < 0 ) {
        	return;
		} else{
			//window.location = url;
			window.open(url);
		}
    });

	$('#bottone_pay_scholarships').click(function() {
        var url = "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=H5RK457TRN6SJ&item_name=";
        url += $('#item_name_scholarships').val() + "&item_number=";
		url += $('#item_number_scholarships').val() + "&amount=";
		url += $('#ctrl_5067').val();
        url += "&currency_code=EUR";

		var controlloMinimo = $('#ctrl_5067').val();

		if ( controlloMinimo < 1600 ) {
        	return;
		} else{
			window.open(url);
		}
    });

	$('#bottone_pay_internships').click(function() {
        var url = "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=H5RK457TRN6SJ&item_name=";
        url += $('#item_name_internships').val() + "&item_number=";
		url += $('#item_number_internships').val() + "&amount=";
		url += $('#ctrl_5910').val();
        url += "&currency_code=EUR";

		var controlloMinimo = $('#ctrl_5910').val();

		if ( controlloMinimo < 1000 ) {
        	return;
		} else{
			window.open(url);
		}
    });

	$('#bottone_pay_fellowships').click(function() {
        var url = "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=H5RK457TRN6SJ&item_name=";
        url += $('#item_name_fellowships').val() + "&item_number=";
		url += $('#item_number_fellowships').val() + "&amount=";
		url += $('#ctrl_5135').val();
        url += "&currency_code=EUR";

		var controlloMinimo = $('#ctrl_5135').val();

		if ( controlloMinimo < 2000 ) {
        	return;
		} else{
			window.open(url);
		}
    });

	$('#bottone_pay_Professorships').click(function() {
        var url = "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=H5RK457TRN6SJ&item_name=";
        url += $('#item_name_professorships').val() + "&item_number=";
		url += $('#item_number_professorships').val() + "&amount=";
		url += $('#ctrl_5169').val();
        url += "&currency_code=EUR";

		var controlloMinimo = $('#ctrl_5169').val();

		if ( controlloMinimo < 8000 ) {
        	return;
		} else{
			window.open(url);
		}
    });

	$('#bottone_pay_dual').click(function() {
        var url = "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=H5RK457TRN6SJ&item_name=";
        url += $('#item_name_dual').val() + "&item_number=";
		url += $('#item_number_dual').val() + "&amount=";
		url += "110";
        url += "&currency_code=EUR";

		window.open(url);

    });

	$('#bottone_pay_institutional').click(function() {
        var url = "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=H5RK457TRN6SJ&item_name=";
        url += $('#item_name_institutional').val() + "&item_number=";
		url += $('#item_number_institutional').val() + "&amount=";
		url += "500";
        url += "&currency_code=EUR";

		window.open(url);

    });

	$('#bottone_pay_corporate').click(function() {
        var url = "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=H5RK457TRN6SJ&item_name=";
        url += $('#item_name_corporate').val() + "&item_number=";
		url += $('#item_number_corporate').val() + "&amount=";
		url += "1100";
        url += "&currency_code=EUR";

		window.open(url);

    });

});

$(function(){
	$("#ctrl_5012").keyup(function(){
	   $("#euro_general_donation").text($(this).val());
	});

	$("#ctrl_5067").keyup(function(){
	   $("#euro_scholarship_donation").text($(this).val());
	});

	$("#ctrl_5910").keyup(function(){
	   $("#euro_Internship_donation").text($(this).val());
	});

	$("#ctrl_5135").keyup(function(){
	   $("#euro_Fellowship_donation").text($(this).val());
	});

	$("#ctrl_5169").keyup(function(){
	   $("#euro_Professorship_donation").text($(this).val());
	});

	$("#ctrl_5222").keyup(function(){
	   $("#euro_Legacy_donation").text($(this).val());
	});

});


$(function(){
	$("#cookiebar button").addClass("button button--aylen no_margin_bottom");
});

//menu mobile
new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ), {
	type : 'cover'
} );


/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD (Register as an anonymous module)
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {},
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			cookies = document.cookie ? document.cookie.split('; ') : [],
			i = 0,
			l = cookies.length;

		for (; i < l; i++) {
			var parts = cookies[i].split('='),
				name = decode(parts.shift()),
				cookie = parts.join('=');

			if (key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
