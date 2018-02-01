(function() {

	$.ajaxSetup({
		async: false
	});

	var headlines = $('h1, h2, h3');

	var text;
	var url;

	function getGlitterGifUrl(theUrl) {
		var gifUrl;
		$.getJSON(theUrl, function(data) {
			gifUrl = data.url;
		});
		return gifUrl;
	}

	function randomColor() {
		return Math.floor(Math.random()*16777215).toString(16);
	}

	function randomFont() {
		var fonts = ["acidic", "action-jackson", "aerosol" ,"airstream", "akoom", "amped-for-evil", "arial", "army", "artiste", "bigdots", "blade-runner", "blazed", "bloody", "bluestone", "casper", "chlorinar", "chopin-script", "cloister-black", "college", "designer-block", "deutsche-zierschrif", "essays-1743", "flubber", "fm-university", "gartentika", "geo-sans-light", "give-you-glory","graffonti", "harry-potter", "husky-stash", "jeopardize", "lcd-font-family", "mister-belvedere", "mail-ray-stuff", "mias-scribblings", "morris-roman", "neuropol", "opensans", "opensans-light", "oswald", "optimus-princeps", "parmapetit", "porcelain", "pormask", "pulse", "raleway", "reskagraf", "rough-draft", "sinking-ship", "soul-mission", "spaceman", "starcraft", "streetsoul", "tangerine", "techno-overload", "tiza", "transformers", "ubuntu-title", "ufrayd", "zephyrean" ];
		return fonts[Math.floor(Math.random()*fonts.length)];
	}

	headlines.each( function() {
		text = $(this).text();
		url = 'http://www.webestools.com/page/images/titlesGlitters.php?title=' + text + '&color=' + randomColor() + '&font=' + randomFont() + '&size=30&background=ffffff';
		$(this).after( '<img src="' +  getGlitterGifUrl(url) + '">' );
		$(this).remove();

	});


})();