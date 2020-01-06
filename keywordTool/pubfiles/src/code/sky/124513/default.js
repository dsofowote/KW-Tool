integration.meta = {
	'sectionID' : '124513',
	'siteName' : 'Sky News - Tablet',
	'platform' : 'tablet',
	'restrictions' : ''
};




integration.testParams = {
};

integration.channelHome = [
   '/',
   '/uk',
   '/brexit',
   '/trump',
   '/world',
   '/business',
   '/politics',
   '/entertainment',
   '/strangenews',
   '/weather',
   '/technology',
   '/us'
];

integration.flaggedTests = [];

integration.params = {
   'mf_siteId': '681674',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1010,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageScanExclude' : ' #nav-wrap, .sdc-news-footer, .sdc-site-trending, .ob-widget-section '
	// 'plr_PageScanExclude' : '.site-secondary, .sdc-site-outbrain, script'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".ad--leaderboard").hide();
		$(".sdc-site-header").css({
			"max-width" : "1010px",
			"margin" : "0 auto"
		});
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

/* Passback Tag
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n  googletag.pubads().definePassback(\n   \"/20346936/skynews\", [728, 90])\n  .setClickUrl(\"%%CLICK_URL_UNESC%%\")\n  .display();\n<\\script>";
};
*/

/* Passback Tag */
window.ISMPassback = function() {
    return "<script language=\"JavaScript\" type=\"text/javascript\">\nrp_account   = '7908';\nrp_site      = '18314';\nrp_zonesize  = '218712-2';\nrp_adtype    = 'js';\nrp_smartfile = '[SMART FILE URL]';\n<\\script>\n<script type=\"text/javascript\" src=\"https://ads.rubiconproject.com/ad/7908.js\"><\\script>";
};
