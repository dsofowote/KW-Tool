integration.meta = {
	'sectionID' : '124795',
	'siteName' : 'Cosmopolitan AU',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707778',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 1,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -59
			});
		}
		$(".header-wrapper, .page, .side-menu-wrapper").css({
			"overflow" : "visible"
		});
		$("head").append("<style>.header{top:0px !important;}</style>");
		$(".header-wrapper--expanded, .header-wrapper").css({
			"margin-bottom" : "0px",
		});
		$(".page--home .header, .page--section .header").css({
			"position" : "fixed"
		});
		$("head").append('<style>.ad--section-top-leaderboard{display: none !important;}</style>');
	}
});
integration.on('layoutChange', function(e) {
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
});
integration.custom.InSkinBottomNav = function() {
	var headerHeight = $(".header").outerHeight();
	$("#inskinanchor").css({
		"margin-top" : headerHeight
	});
};

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n\n   googletag.pubads().definePassback(\"/13534306/cosmopolitan\", [728, 90]).display();\n\n<\\script>";
};
