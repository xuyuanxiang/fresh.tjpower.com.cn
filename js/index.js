$('.content-top-nav').slick({
	dots : true,
	slidesToShow : 4,
	slidesToScroll : 4,
	slide : 'a'
});

function active(id) {
	$('.icon').removeClass('active');
	$('#' + id + 'Ctrl').addClass('active')
	$('.content-item').addClass('inactive');
	$('#' + id).removeClass('inactive');
}