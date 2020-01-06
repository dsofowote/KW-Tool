integration.meta = {
	'sectionID' : '128106',
	'siteName' : 'Ebay Kleinanzeigen - Desktop - ( AT CH DE )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1300]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '976716',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#site-header > .l-page-wrapper").css({
			"display" : "none"
		});
		$("head").append("<style>#site-header-top{display: block !important;}</style>");
		if ($("#site-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#site-header");
			var headHeight = $("#site-header").outerHeight();
			integration.base.setCfg({
			plr_AnchorParent : "#inskinanchor",
			plr_PageHeightAdjustment : -headHeight,
			plr_ScrollAdjustment : -headHeight
			});
		}
		$("#site-header").css({
			"margin-bottom" : "0"
		});
		$(".j-ebayk-campaign-banner.campaign-banner-box, #vip-atf-billboard").css({
			"display" : "none"
		});		
	}
});
