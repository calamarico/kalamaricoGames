$(document).ready(function() {
	document.onkeydown = onKeyPress;
});

var onKeyPress = function(event) {
	event.preventDefault();
	event = event || {};
	var keyCode = event.keyCode || window.event.keyCode;
	var temp = $('#selection');

	switch (keyCode) {
		case 37:
			animate($('#selection'), 'fadeOutLeft', 'fadeInRight');
			break;
		case 39:
			animate($('#selection'), 'fadeOutRight', 'fadeInLeft');
			break;
	}
};

var animate = function(element, start, end) {
	if (!animate.animating) {
		animate.animating = true;
		$(element).addClass('animated ' + start);
		var waitStart = window.setTimeout(function() {
			$(element).removeClass('animated ' + start);
			$(element).addClass('animated ' + end);
			var waitEnd = window.setTimeout(function() {
				$(element).removeClass('animated ' + end);
				animate.animating = false;
			}, 600);
		}, 600);
	}
};
animate.animating = false;
