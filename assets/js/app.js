$(function() {
	let header = $("#header"),
	introH = $("#intro").innerHeight(),
	scrollOffset = $(window).scrollTop();
	/*Fixed header*/
	checkScroll(scrollOffset);
	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);
	});
	function checkScroll(scrollOffset) {
		if(scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}
});
 $('a[href^="#"]').click(function(){ 
    let anchor = $(this).attr('href');  
$('html, body').animate({           
    scrollTop:  $(anchor).offset().top  
    }, 600);                            
});

 /*Menu nav toggle*/

$("#nav_toggle").on("click", function(event) {
    event.preventDefault();
    $("#nav").toggleClass("active");
    $("#nav_toggle").toggleClass("active");
});

/*Collapse*/

$("[data-collapse]").on("click", function(event){
    event.preventDefault();
    let $this = $(this),
    blockId = $this.data('collapse');
    $(blockId).slideToggle();
});

