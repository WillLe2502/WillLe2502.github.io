$(window).on("load", function() {
	$(".loader").fadeOut(800);
});

$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed",{
		strings: ["Student", "Web Developer"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items:4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

	

    var skillTopOffset = $(".skillsSection").offset().top;

    $(window).scroll(function(){
    	if(window.pageYOffset > skillTopOffset - $(window).height() + 300){
    		$('.chart').easyPieChart({
		        easing: 'easeInOut', 
		        barColor: '#7ed6df',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent){
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });
    	}
    });

    $("#navigation li a").click(function(e){
    	e.preventDefault();

    	var targetElement = $(this).attr("href");
    	var targetPosition = $(targetElement).offset().top;

    	$("html, body").animate({scrollTop: targetPosition - 50}, "slow");
    });


    const nav = $("#navigation");
    const navtop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
    	var body = $("body");
    	if($(window).scrollTop() >= navtop){
    		body.css("padding-top", nav.outerHeight() + "px");
    		body.addClass("fixedNav");
    	}
    	else {
    		body.css("padding-top",0);
    		body.removeClass("fixedNav");
    	}
    }
});