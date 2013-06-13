exports.manage = function(socket, namespace) {
	switch (namespace) {
		case 'pong':
			socket.on('message', function(message) {
				console.log('Message received');
			});
			socket.on('disconnect', function() {
				console.log('Socket disconnected');
			});
			break;
	}
};
