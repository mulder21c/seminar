(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-55718543-5', 'auto');
ga('send', 'pageview');
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
		{ src: './framework/reveal/3.4.1/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },

		// Speaker notes
		{ src: './framework/reveal/3.4.1/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },
	]
});