integration.meta = {
	'sectionID' : '128450',
	'siteName' : ' My Domaine - Desktop - (AU)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1290]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1015034',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1030,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#main-container").css({
			"max-width" : "1000px",
			"margin" : "0 auto",
			'float' : 'none'
		});
		$(".top-slot-container, .sticky-container .article-list-wrapper, .full-bleed-container, .homepage-widget").css({
			"margin" : "0 auto",
			"width" : "1000px"
		});
		$(".article-wrapper").css({
			"padding-top" : "15px"
		});
		$("html").css({
			"overflow-x" : "hidden"
		});
		$("head").append("<style type='text/css'> .container-fluid {margin: 0 auto !important; width: 1000px !important;}</style>");

		integration._addPixel();
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/1027487/mydomaine', [-1, -1]).display();<\\script>";
};
