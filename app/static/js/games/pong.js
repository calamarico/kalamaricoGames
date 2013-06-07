/**
 * PONG! by Kalamarico
 */
GAMES.pong = (function() {
	var endGame = true,
		x = 0,
		y = 0,
		dx = 3,
		dy = 3,
		HumanBarX = 494,
		HumanBarY = 10,
		HumanDY = 3,
		barY = 0,
		ctx = null,
		interval = null;

	var init = function(container) {
		ctx = container.getContext("2d");
		document.onkeydown = onkeydown;
		interval = setInterval(draw, 10);
	};

	var end = function() {
		document.onkeydown = null;
		clearInterval(interval);
	};

	var draw = function() {
		ctx.clearRect(0, 0, 500, 300);
		if (!endGame) {
			drawBall();
			drawBars();
			checkCollision();
		} else {
			drawEndGameText();
		}
	};

	var drawEndGameText = function() {
		ctx.font = '30px sans-serif';
		ctx.textBaseline = 'top';
		ctx.fillText('Start game', 180, 120);

		ctx.font = '15px sans-serif';
		ctx.textBaseline = 'top';
		ctx.fillText('Press enter to start', 195, 160);
	};

	var onkeydown = function(event) {
		event.preventDefault();
		var keyCode;
		if (event == null) {
			keyCode = window.event.keyCode;
		} else {
			keyCode = event.keyCode;
		}
		switch (keyCode) {
			case 13:
				if (endGame) {
					endGame = false;
					x = 30;
					y = 30;
					dx = 3;
					dy = 3;
				}
				break;
			case 38:
				HumanBarY -= HumanDY;

				if (HumanBarY < 0) {
					HumanBarY = 0;
				}

				break;
			case 40:
				HumanBarY += HumanDY;

				if (HumanBarY > 300) {
					HumanBarY = 300;
				}

				break;
			default:
				break;
		}
	};

	var drawBall = function() {
		ctx.beginPath();
		ctx.arc(x, y, 5, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();

		if (y >= 300 || y <= 0) {
			dy = -dy;
		}

		x += dx;
		y += dy;
	};

	var drawBars = function() {
		if (y > 260) {
			barY = 260;
		} else {
			barY = y;
		}

		ctx.beginPath();

		ctx.fillRect(5, barY, 10, 40);
		ctx.fillRect(490, HumanBarY, 10, 40);
		ctx.closePath();
	};

	var checkCollision = function() {
		ctx.font = '30px sans-serif';
		ctx.textBaseline = 'top';
		ctx.fillText('X:' + x, 180, 120);

		if (x < 5) {
			console.log('x ya es menor que 5:' + x + ' y:' + y + ' barY:' + barY);
		}

		if (x > 500 || x < 0) {
			endGame = true;
		} else if ((x < 5 && y <= (barY + 40) && y >= barY) ||
			(x > 490 && y < (HumanBarY + 40) && y > HumanBarY)) {
			dx = -dx;
		}
	};

	return {
		// Todos los modulos de juego deben tener estos dos metodos
		init: init,
		end: end
	};
}());
