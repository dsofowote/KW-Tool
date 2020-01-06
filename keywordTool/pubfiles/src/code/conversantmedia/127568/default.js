integration.meta = {
	'sectionID' : '127568',
	'siteName' : 'Lost At E Minor - Desktop - (AU)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1410]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '750247',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1150,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($(".site-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".site-header-placeholder");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -140
			});
		}
		$("main, .panel, #billboard-2, .site-footer, #scroll-menu, .comments").css({
			"max-width" : "1150px",
			"margin" : "0 auto"
		});
		$("main").css({
			"margin-top" : "25px"
		});
		$(".site-header-placeholder").css({
			"margin-bottom" : "0px"
		});
		$("#scroll-menu").css({
			"max-width" : "1150px",
			"margin" : "0 auto",
			"left" : "0px",
			"right" : "0px"
		});
		//Collapse billboard
		$("#takeover").css({
			"display" : "none"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/1005256/laem-billboard-1', [[970, 250], [970, 90], [990,\n66], [970, 66], [728, 90], [990, 250]]).setTargeting('passback', 'true').display().set(\"page_url\", \"lostateminor.com\");\n<\\script>";
};
