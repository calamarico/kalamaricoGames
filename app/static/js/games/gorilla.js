GAMES.gorilla = (function() {
	var ctx = null;

	var init = function(container) {
		ctx = container.getContext("2d");
		ctx.font = "bold 22px sans-serif";
		ctx.fillText("Juego no disponible", 50, 50);
	};

	var end = function() {
		return;
	};

	return {
		init: init,
		end: end
	};
}());
