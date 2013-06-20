var Utils = (function() {
	var getRequestAnimationFrame = function() {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				window.setTimeout(callback, 1 / 60 * 1000);
			};
	};
	return {
		getRequestAnimationFrame: getRequestAnimationFrame
	};
}());


