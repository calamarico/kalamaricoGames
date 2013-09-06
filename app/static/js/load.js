define(['./animation'], function(animation) {
	var showLoading = function() {
		$('#screen').append('<div id="selection" class="selection">');
		$('#selection').append("<p>Loading...</p>");
	};

	var loadContent = function() {
		$.ajax({
			url: 'games.json',
			dataType: 'json',
			success: function() {
				killLoading();
			}
		});
	};

	var killLoading = function() {
		animation.setAnimation({
			element: $('#selection'),
			start: 'hinge',
			waitingStart: 2000,
			callback: function(element) {
				$(element).remove();
			},
			param: $('#selection')
		});
	};

	return {
		showLoading: showLoading,
		loadContent: loadContent
	};
});
