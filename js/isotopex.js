// init Isotope
var $grid = $('.workzxliz').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-item'
  }
});
// filter items on button click
$('.workzx').on( 'click', 'a', function() {
	$(".item.active").removeClass("active");
	$(this).addClass("active");
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});

$('.special.cards .image').dimmer({
  on: 'hover'
});

$('#showprofils').click(function(){
  $('.ui.modal').modal('show');
});
