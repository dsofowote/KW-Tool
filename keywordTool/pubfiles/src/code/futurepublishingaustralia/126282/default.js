integration.meta = {
   'sectionID' : '126282',
   'siteName' : 'T3 - Desktop (AU  SEA)',
   'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '713123',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 970,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".primary-nav").css({
			"width" : "998px",
			"margin" : "0 auto"
		});
		$("#document-footer").css({
			"width" : "998px",
			"margin" : "0 auto"
		});
		$('head').append('<style> .ismMenuAdjust {margin-top: 100px} </style>');
	} 
});



integration.on("adServed", function(e) {
	$(".ism-frame").css({
		"z-index" : "3"
	});
});


integration.on('layoutChange', function(e){
	$( window ).resize(function() {
		winWidth = $(window).width(); 
		if(winWidth < 690){
			$('body > nav > div.wrapper > div').addClass('ismMenuAdjust');
		}else {
			$('body > nav > div.wrapper > div').removeClass('ismMenuAdjust');
		}
	});
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">    googletag.pubads().definePassback(\n    \"/8644/Passback_T3/InskinAu\", [1, 1]).display();\n<\\script>";
};
