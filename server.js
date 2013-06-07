var connect = require('connect'),
	router = require('./app/server/route');

var SERVER_PORT = 3000;

var app = connect()
	.use(connect.favicon('app/static/favicon.ico'))
	.use(connect.logger())
	.use(connect.static('public'))
	.use(function(req, res) {
		router.route(req, res);
	})
	.listen(SERVER_PORT);

if (app) {
	console.info('Start server on ' + SERVER_PORT);
}
