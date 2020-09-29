(function (window) {

	var speakWord = "Good Bye";

	var byeSpeaker = {};
	byeSpeaker.speak = function(name) {
	  byeSpeaker.name = name;	
	  console.log(speakWord + " " + byeSpeaker.name);
	}

	window.byeSpeaker = byeSpeaker;

})(window);