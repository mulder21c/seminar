
Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,
	touch: true,
	transition: 'slide',
	keyboard: {
		40 : function(){
			Reveal.next();
		},
		38 : function(){
			Reveal.prev();
		}
	},
	dependencies: [
		// Zoom in and out with Alt+click
		{ src: '//resource.publisher.name/framework/reveal/3.4.1/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },

		// Speaker notes
		{ src: '//resource.publisher.name/framework/reveal/3.4.1/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },
	]
});