integration.meta = {
	'sectionID' : '128447',
	'siteName' : ' Pop Sugar - Desktop - (AU)  ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1330]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1014000',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1070,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_ForceFrameBottom': 0,
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var hHeight = $('header').height();
		var NonStickyHeaderHeight = $('#top-nav').height() + $('header').height();
		if ($("#top-nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#top-nav");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"

			});
		}
		if ($("#fixednav").css("position") === "sticky") {
			integration.base.setCfg({
				'plr_ScrollAdjustment' : hHeight,
				'plr_PageHeightAdjustment' : -hHeight
			});
		} else {
			integration.base.setCfg({
				'plr_ScrollAdjustment' : 0,
				'plr_PageHeightAdjustment' : -NonStickyHeaderHeight
			});
		}

		$('footer').css({
			"width" : "1070px",
			"margin" : "0 auto"
		});

		$("head").append("<style>body:not(.homepage_page):not(.channel_page) #fixednav{z-index: 9 !important;} .feature-section.ikb{max-width: 1070px !important;}</style>");

	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script async src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\"><\\script>\n<div id='gpt-passback'>\n<script>\n   window.googletag = window.googletag || {cmd: []};\n     googletag.cmd.push(function() {\n\n       googletag.defineOutOfPageSlot('/1027487/popsugar', 'gpt-passback')\n         .addService(googletag.pubads());\n       googletag.pubads().setTargeting('Passback', ['true']);\ngoogletag.pubads().set('page_url', 'popsugar.com.au');\n\n       googletag.enableServices();\n       googletag.display('gpt-passback');\n   });\n<\\script>\n</div>";
};