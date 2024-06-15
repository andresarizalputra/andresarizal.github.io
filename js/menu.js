( function( $ ) {
$( document ).ready(function() {
// Cache the elements we'll need
var menu = $('#cssmenu');
var menuList = menu.find('ul:first');
var listItems = menu.find('li').not('#responsive-tab');

// Create responsive trigger
menuList.prepend('<li id="responsive-tab"><a>Menu</a></li>');

// Toggle menu visibility
menu.on('click', '#responsive-tab', function(){
	listItems.slideToggle('fast');
	listItems.addClass('collapsed');
});
});
} )( jQuery );

$(document).ready(function () {  
	var top = $('#cssmenu').offset().top - parseFloat($('#cssmenu').css('marginTop').replace(/auto/, 100));
	$(window).scroll(function (event) {
	  // what the y position of the scroll is
	  var y = $(this).scrollTop();
  
	  // whether that's below the form
	  if (y >= top) {
		// if so, ad the fixed class
		$('#cssmenu').addClass('fixed');
	  } else {
		// otherwise remove it
		$('#cssmenu').removeClass('fixed');
	  }
	});
  });
