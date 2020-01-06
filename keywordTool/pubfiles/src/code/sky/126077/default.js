integration.meta = {
   'sectionID' : '126077',
   'siteName' : 'Sky News - Tablet - Non UK',
   
   'platform' : 'tablet',
   'restrictions' : ''
};




integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".ad--leaderboard").hide();
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".viewport, #cookie-notice").css({
				"max-width" : "1024px"
			});
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n  googletag.pubads().definePassback(\n   \"/20346936/skynews\", [728, 90])\n  .setClickUrl(\"%%CLICK_URL_UNESC%%\")\n  .display();\n<\\script>"; 
};

