GAMES.gorilla = function(container) {
	var ctx = container.getContext("2d");

	var init = function() {
		ctx.font = "bold 22px sans-serif";
		ctx.fillText("Juego no disponible",50,50);
	};
	
	var end = function() {
		return;
	};

	return {
		init: init,
		end: end
	};
}