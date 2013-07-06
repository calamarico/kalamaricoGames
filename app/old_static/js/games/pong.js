/**
 * PONG! by Kalamarico
 */
GAMES.pong = (function() {
	var endGame = true,
		x = 0,
		y = 0,
		dx = 6,
		dy = 6,
		HumanBarX = 494,
		HumanBarY = 10,
		HumanDY = 5,
		barY = 0,
		ctx = null,
		interval = null,
		resolution = {
			width: 600,
			height: 400
		},
		requestAnimationFrame = Utils.getRequestAnimationFrame();

	var init = function(container) {
		//resize canvas
		// document.getElementById('Canvas')
		// 	.classList.add('pong-game');
		var socket = io.connect('/pong');
		ctx = container.getContext("2d");
		document.onkeydown = onkeydown;
		requestAnimationFrame(gameLoop);
		//interval = setInterval(draw, 10);
		socket.emit("subscribe", {"datos":"nose"});
	};

	var end = function() {
		document.onkeydown = null;
		clearInterval(interval);
	};

	var gameLoop = function() {
		ctx.clearRect(0, 0, resolution.width, resolution.height);
		if (!endGame) {
			drawBall();
			drawBars();
			checkCollision();
		} else {
			drawEndGameText();
		}
		requestAnimationFrame(gameLoop);
	};

	var draw = function() {
		ctx.clearRect(0, 0, resolution.width, resolution.height);
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
		ctx.fillText('Start game', 230, 170);

		ctx.font = '15px sans-serif';
		ctx.textBaseline = 'top';
		ctx.fillText('Press enter to start', 245, 210);
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

				if (HumanBarY > 400) {
					HumanBarY = 400;
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

		if (y >= 400 || y <= 0) {
			dy = -dy;
		}

		x += dx;
		y += dy;
	};

	var drawBars = function() {
		if (y > 460) {
			barY = 460;
		} else {
			barY = y;
		}

		ctx.beginPath();

		ctx.fillRect(5, barY, 10, 40);
		ctx.fillRect(590, HumanBarY, 10, 40);
		ctx.closePath();
	};

	var checkCollision = function() {
		ctx.font = '30px sans-serif';
		ctx.textBaseline = 'top';

		if (x > 600 || x < 0) {
			endGame = true;
		} else if ((x < 5 && y <= (barY + 40) && y >= barY) ||
			(x > 590 && y < (HumanBarY + 40) && y > HumanBarY)) {
			dx = -dx;
		}
	};

	return {
		// Todos los modulos de juego deben tener estos dos metodos
		init: init,
		end: end
	};
}());
