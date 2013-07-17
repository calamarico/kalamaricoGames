define(['./animation'], function(animation) {
	var showLoading = function() {
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
				$(element).children().first().remove();
			},
			param: $('#selection')
		});
	};

	return {
		showLoading: showLoading,
		loadContent: loadContent
	};
});
