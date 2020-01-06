integration.meta = {
	'sectionID' : '126238',
	'siteName' : 'Gizmodo - Desktop - (AU)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707140',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1170,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_ForceFrameBottom': 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration._addPixel();
		var headerHeight = $(".site-header--fixed").height();
		if ($(".top-stories-container").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore(".top-stories-container");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -headerHeight
			});
		}

		$(".leaderboard, .page-wrapper, .site-footer").css({
			"max-width" : "1170px",
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
