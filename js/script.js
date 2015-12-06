$(document).ready(function() {

	// toggling the right side navbar
	$('#icon').click(function() {
		$('#nav-area').toggle(function() {
			$('#nav-area').addClass("display");
			$(this).animate({left: '100%'}, 1000);
		});
	});

});