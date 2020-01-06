integration.meta = {
	'sectionID' : '126008',
	'siteName' : 'TFL - Tablet - (UK)',
	'platform' : 'tablet'
};




integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '706695',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1140,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_CheckOptOut': true,
	'plr_ConsentString': "BOXVVKIOXVVKIAKABBENBxoAAAAiCAJAAWABUAC4AGQAZABEgCcAJ4BCADAg"
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#container").css({
				"max-width" : "1140px",
				"margin-left" : "0",
				"overflow" : "visible"
			});
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/76889402/inskin_passback', [728, 90]).display();\n<\\script>";
}; 