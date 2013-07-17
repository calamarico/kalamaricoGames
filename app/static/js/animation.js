define(function() {
	var isAnimate = false,
		waitingStart = 600,
		waitingEnd = 600;

	var setAnimation = function(o) {
		if (isAnimate) {
			return;
		}

		var callback = function(f) {
			o.element = null;
			if (typeof f !== 'undefined') {
				f(o.param || undefined);
			}
		};

		o.waitingStart = o.waitingStart || waitingStart;
		o.waitingEnd = o.waitingEnd || waitingEnd;

		isAnimate = true;
		$(o.element).addClass('animated ' + o.start);
		var waitStart = window.setTimeout(function() {
			$(o.element).removeClass('animated ' + o.start);
			if (typeof o.end !== 'undefined') {
				$(o.element).addClass('animated ' + o.end);
				var waitEnd = window.setTimeout(function() {
					$(o.element).removeClass('animated ' + o.end);
					isAnimate = false;
					callback(o.callback);
				}, o.waitingEnd);
			} else {
				isAnimate = false;
					callback(o.callback);
			}
		}, o.waitingStart);
	};

	return {
		setAnimation: setAnimation
	};
});
