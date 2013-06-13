exports.manage = function(socket) {
	socket.on('message', function(message) {
		console.log('Message received');
	});
	socket.on('disconnect', function() {
		console.log('Socket disconnected');
	});
	
};