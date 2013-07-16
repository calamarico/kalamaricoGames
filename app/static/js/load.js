define(function() {
	var showLoading = function() {
		$('#selection').append("<p>Loading...</p>");

	};

	return {
		showLoading: showLoading
	};
});
