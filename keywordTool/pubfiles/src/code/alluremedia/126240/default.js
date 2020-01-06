integration.meta = {
	'sectionID' : '126240',
	'siteName' : 'Kotaku - Desktop - (AU)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707125',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1170,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_ForceFrameBottom' : 0
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var hHeight = $(".site-header--fixed").height();
		if ($(".top-stories-container").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore(".top-stories-container");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -hHeight
			});
		}
		$('#inskinanchor').css({
			"top" : hHeight,
			"position" : "relative"
		});
		$("head").append('<style>.top-stories-container{margin-top:' + hHeight + 'px !important;}</style>');
		$("head").append("<style>header .site-header--fixed{top: 0 !important; left: 0 !important; right: 0 !important;}</style>");
		$(".top-stories-container").css({
			"padding" : "6px 0"
		});
		$(".top-stories-container, .leaderboard, .page-wrapper, header, .site-footer").css({
			"width" : "1170px",
			"margin" : "0 auto"
		});
		$('.site-footer').css({
			"float" : "none"
		});
		$("head").append("<style>header .site-header.header--fixed{z-index: 99 !important;} .leaderboard--fixed{left: 0; right: 0;}</style>");
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script async src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\"><\\script>\n<div id='gpt-passback'>\n<script>\n   window.googletag = window.googletag || {cmd: []};\n     googletag.cmd.push(function() {\n       googletag.defineOutOfPageSlot('/1027487/kotaku', 'gpt-passback')\n         .addService(googletag.pubads());\n       googletag.pubads().setTargeting('Passback', ['true']);\ngoogletag.pubads().set('page_url', 'kotaku.com.au');\n       googletag.enableServices();\n       googletag.display('gpt-passback');\n   });\n<\\script>\n</div>";
};
