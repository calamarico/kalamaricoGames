// GAMES Namespace que contendra los juegos
var GAMES = {};
// Juego actual en ejecucion
var game = null;

function onLoad() {
	// Bind de eventos a los elementos DOM para el drag & drop
	document.getElementById('pong').ondragstart = startDrag;
	document.getElementById('gorilla').ondragstart = startDrag;
	document.getElementById('game-container').ondragover = onDragOver;
	document.getElementById('game-container').ondrop = dropGame;
};

var startDrag = function(event) {
	// Transportamos el id para despues saber que canvas cargar
	event.dataTransfer.setData('id', this.id);
};

var onDragOver = function(event) {
	// Devolvemos false para permitir soltar en el container el item
	event.dataTransfer.dropEffect = 'move';
	return false;
};

var dropGame = function(event) {
	if (!event.dataTransfer.getData('id')) {
		return;
	}

	if (game) {
		game.end();
		document.getElementById('Canvas')
			.getContext("2d")
			.clearRect(0, 0, 500, 300);
	}

	if (GAMES[event.dataTransfer.getData('id')]) {
		game = GAMES[event.dataTransfer.getData('id')];
		game.init(document.getElementById('Canvas'));
	}
};
