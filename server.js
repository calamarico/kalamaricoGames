var router = require('./app/server/route'),
	manageSockets = require('./app/server/sockets'),
	connect = require('connect'),
	socketio = require('socket.io');

var SERVER_PORT = 3000;

var app = connect()
	.use(connect.favicon('app/static/favicon.ico'))
	.use(connect.logger())
	.use(connect.static('public'))
	.use(function(req, res) {
		router.route(req, res);
	})
	.listen(SERVER_PORT);

var io = socketio.listen(app);
io.sockets.on('connection', function(socket) {
	manageSockets.manage(socket);
});

if (app) {
	console.info('Start server on ' + SERVER_PORT);
}
