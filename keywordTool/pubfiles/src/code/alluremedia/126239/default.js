integration.meta = {
	'sectionID' : '126239',
	'siteName' : 'Gizmodo - Tablet - (AU)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707107',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>.top-stories-container, .leaderboard, .page-wrapper, .site-footer{margin: 0 !important;}</style>");
		}
		integration._addPixel();
		var headerHeight = $(".site-header--fixed").height();
		if ($(".top-stories-container").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore(".top-stories-container");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_StartScrollOnAnchor' : true
			});
		}

		$(".top-stories-container, .leaderboard, .page-wrapper, .site-footer").css({
			"max-width" : "1024px",
			"margin" : "0 auto",
			"left" : 0,
			"right" : 0
		});

		$(".site-footer").css({
			"float" : "none"
		});

		$("#inskinanchor").css({
			"padding-top" : headerHeight
		});

		$("head").append("<style>.site-header--fixed{z-index: 9 !important;} .top-stories-container{padding: 15px 6px !important;} header{border: none;}</style>");
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script async src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\"><\\script>\n<div id='gpt-passback'>\n<script>\n   window.googletag = window.googletag || {cmd: []};\n     googletag.cmd.push(function() {\n       googletag.defineOutOfPageSlot('/1027487/gizmodo', 'gpt-passback')\n         .addService(googletag.pubads());\n       googletag.pubads().setTargeting('Passback', ['true']);\ngoogletag.pubads().set('page_url', 'gizmodo.com.au');\n       googletag.enableServices();\n       googletag.display('gpt-passback');\n   });\n<\\script>\n</div>";
};