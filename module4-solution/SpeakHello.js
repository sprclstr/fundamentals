(function (window) {

	var speakWord = "Hello";

	var helloSpeaker = {};
	helloSpeaker.speak = function (name) {
		helloSpeaker.name = name;
		console.log(speakWord + " " + helloSpeaker.name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);