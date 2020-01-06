integration.meta = {
	'sectionID' : '125635',
	'siteName' : 'Coach Mag - Desktop - (UK)',
	'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1490]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '681816',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1230,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	'plr_FastInit' : true,
	"plr_URLKeywords" : 1
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#header-group").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header-group");
			integration.base.setCfg({
				'plr_AnchorParent' : "#inskinanchor",
				'plr_PageHeightAdjustment' : -77
			});
		}
		$(".header-wrapper, #site-menus, #block-site-homepage-homepage-featured, #block-site-homepage-homepage-latest, #footer-wrapper, .region-footer > *").css({
			"max-width" : "1230px",
			"margin" : "0 auto"
		});
		$("#snap-content, html").css({
			"overflow" : "visible"
		});
		$("#header-group").css({
			"margin-bottom" : "0",
			"box-shadow" : "none"
		});
		$("#block-site-homepage-homepage-featured, #block-site-homepage-homepage-latest").css({
			"margin-left" : "-15px"
		});
		$("#page").css({
			"margin-top" : "10px"
		});
		$("#dfp-ad-billboard_leaderboard-wrapper").hide();
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
});

integration.on("layoutChange", function(e) {
	var homepage = $("body").attr("id");
	if (homepage === "pid-1-homepage") {
		$("#inskinanchor").css({
			"margin-top" : "50px"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script type=\"text/javascript\">\nvar ayads_impressioncount='%%CACHEBUSTER%%';\n<\\script><script type=\"text/javascript\" src=\"http://ads.ayads.co/ajs.php?zid=10209\"><\\script>";
};
