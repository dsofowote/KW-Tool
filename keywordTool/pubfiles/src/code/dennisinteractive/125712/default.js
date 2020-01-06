integration.meta = {
	'sectionID' : '125712',
	'siteName' : 'Den Of Geek',

	'platform' : 'desktop',
	'restrictions' : ''
};




integration.testParams = {
	'desktop_resolution' : [1480]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '707345',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1220,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	"plr_StartScrollOnAnchor" : true,
	"plr_ScrollAdjustment" : 52,
	'plr_URLKeywords' : 2
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#header-group").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header-group");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -52,
			});
		}
		$(".social-menu-span, #menu-group, #footer-group, #site-menus, #footer-wrapper, #block-dennis-core-dennis-core-footer, #dfp-ad-billboard_leaderboard_1, .featured-variable-results, #block-views-homepage-latest-block, #dfp-ad-billboard_leaderboard_2, #dfp-ad-billboard_leaderboard_3").css({
			"max-width" : "1200px",
			"margin" : "0 auto"
		});
		$("body").css({
			"overflow" : "visible"
		});
		$("#dfp-ad-billboard_leaderboard_1").css({
			"padding" : "0px"
		});
	}
});


/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\">\nvar ayads_impressioncount='%%CACHEBUSTER%%';\n<\\script><script type=\"text/javascript\" src=\"http://ads.ayads.co/ajs.php?zid=3522\"><\\script>";
};
