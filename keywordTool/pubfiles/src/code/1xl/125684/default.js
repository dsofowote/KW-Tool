integration.meta = {
   'sectionID' : '125684',
   'siteName' : 'Newsquest RON - (RON) - Tablet - ( UK )',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '681673',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true,
	'plr_PageScanExclude' : ' #redesign-header, .article-row-container-right, .taboola-block, #mostFullBlock '
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#main").css({
			"margin-top" : "0px"
		});
		$("#takeover").css({
				"max-width" : "960px",
				"margin" : "0 auto"
 			});
			if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#nqcontainer").css({
				"margin-left" : "0px"
			});
			$("#nqcontainer").css({
				"margin-left" : "0px"
			});
			$("#takeover").css({
				"margin" : "0"
 			});

		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/70228659/MF_NewsQuest/Interstitial', [[1,1]]).setClickUrl('%%CLICK_URL_UNESC%%').display();</script>";
};
