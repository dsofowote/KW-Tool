integration.meta = {
	'sectionID' : '128489',
	'siteName' : 'Kotaku - Desktop - (INT)  ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1017795',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1170,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var hHeight = $("header").height();
		if ($(".top-stories-container").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore(".page-wrapper");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -hHeight
			});
		}
		$('#inskinanchor').css({
			//"margin-top" : hHeight
		});
		$("head").append("<style>header .site-header--fixed{top: 0 !important; left: 0 !important; right: 0 !important;}</style>");
		$(".top-stories-container, .leaderboard, .page-wrapper, header, .site-footer").css({
			"width" : "1170px",
			"margin" : "0 auto"
		});
		$('.site-footer').css({
			"float" : "none"
		});
		$(".container-fluid.leaderboard").parent().css({
			"height" : "0px",
			"min-height" : "0px"
		});
		$(".leaderboard").css({
			"left" : "0px",
			"right" : "0px"
		});
		$(".site-header").css({
			"z-index" : "10000000"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/1027487/kotaku', [-1, -1]).display();<\\script>";
};

