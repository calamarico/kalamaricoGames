exports.manage = function(socket, namespace) {
	switch (namespace) {
		case 'pong':
			socket.on('subscribe', function(data) {
				console.log('ha pasado por el subscribe');
				socket.join(data.room);
				console.log(data);
			});
			socket.on('message', function(message) {
				console.log('Message received');
			});
			socket.on('disconnect', function() {
				console.log('Socket disconnected');
			});
			break;
	}
};
