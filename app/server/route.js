var	fs = require('fs'),
	path = require('path'),
	utils = require('./utils');

var mimeTypes = {
	'.html': 'text/html',
	'.js': 'text/javascript',
	'.css': 'text/css',
	'.ttf': 'application/x-font-woff'
};

var STATIC_FOLDER = '/app/static';

var route = function(req, res) {
	var pathFile = process.cwd();
	console.info('Receive request:' + req.url);

	pathFile += (req.url === '/') ?
		STATIC_FOLDER + '/index.html' :
		STATIC_FOLDER + req.url;

	fs.readFile(pathFile, function(err, data) {
		if (err) {
			console.error("File not found: " + pathFile);
			res.writeHead(404);
			res.end();
			return;
		}
		fileSender({
			'req': req,
			'res': res,
			'data': data,
			'pathFile': pathFile
		});
	});
};

var fileSender = function(data) {
	if (path.extname(data.pathFile) !== '' &&
		typeof utils.mimeTypes[path.extname(data.pathFile)] !== 'undefined') {
		data.res.writeHead(200, {
			'Content-Type': utils.mimeTypes[path.extname(data.pathFile)]
		});
		data.res.write(data.data);
		data.res.end();
	}
	else {
		data.res.writeHead(415);
		data.res.end();
	}

};

exports.route = route;
