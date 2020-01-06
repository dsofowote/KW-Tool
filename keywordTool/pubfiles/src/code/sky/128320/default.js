integration.meta = {
	'sectionID' : '128320',
	'siteName' : 'Sky Sports - Tablet - (UK) ',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.channelHome = ['/football', '/f1', '/boxing', '/football/news', '/rugby-league'];

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1002894',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1010,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	"plr_URLKeywords" : 1,
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("advert--site-takeover");
		$('body').css({
			'width' : '1010px',
			'margin' : '0 auto'
		});
		$('.advert--banner-wrap').hide();

		$('body').css({
			'overflow' : 'visible'
		});

		// format the site for PageSkin Edge
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {

			$('.site-header, .advert--banner-wrap, .site-footer, .site-wrapper, .breaking-news-banner__inner').css({
				'margin-left' : '0px'
			});
			integration.base.setCfg({
				plr_PageAlignment : 'left'

			});
			$('body').css({
				'margin' : '0'
			});

		}

	}
});
/*
 window.ISMPassback = function() {
 return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n  googletag.pubads().definePassback(\n   \"/20346936/skysports\", [728, 90])\n  .setClickUrl(\"%%CLICK_URL_UNESC%%\")\n  .display();\n<\\script>";
 };*/

window.ISMPassback = function() {
	return "<!--  Begin Rubicon Project Tag -->\n<!--  Site: Sky UK Sky Sports - RTB Only   Zone: iPad More+   Size: Leaderboard  -->\n<script language=\"JavaScript\" type=\"text/javascript\">\nrp_account   = '7908';\nrp_site      = '18326';\nrp_zonesize  = '143966-2';\nrp_adtype    = 'js';\nrp_smartfile = '[SMART FILE URL]';\n<\\script>\n<script type=\"text/javascript\" src=\"https://ads.rubiconproject.com/ad/7908.js\"><\\script>\n<!--  End Rubicon Project Tag -->";
};
