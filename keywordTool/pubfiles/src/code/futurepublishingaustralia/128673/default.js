integration.meta = {
	'sectionID' : '128673',
	'siteName' : 'Tom\'s Guide - Desktop - (AU) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1400]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1029466',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1140,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('.widget-home-carousel .whc-carousel .whc-item').css({
			"min-height" : "270px"
		});
		$('.header, .page').css({
			"max-width" : "1140px",
			"margin" : "0 auto",
			"left" : 0,
			"right" : 0
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n    googletag.pubads().definePassback(\"/10518929/Passback_TomsGuide/Inskin\", [1, 1]).display();\n<\\script>";
};