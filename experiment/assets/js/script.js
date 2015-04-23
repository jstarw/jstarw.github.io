jQuery(function($) {
    var divs = $('.fade');
    var background = $('#bgvid');
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        divs.css({ 
            'margin-top' : -(st/3)+"px", 
            'opacity' : 1 - st/200
        }); 
        background.css({ 
			top: -st/3+"px"	
	    }); 
    });
});

$(document).ready(function () {
	var parallax = $('.parallax');
	$(window).on('scroll', function() {
		console.log($(this).scrollTop());
	});
});