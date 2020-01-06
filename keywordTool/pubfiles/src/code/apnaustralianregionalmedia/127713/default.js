integration.meta = {
	'sectionID' : '127713',
	'siteName' : 'News Regional Media Network - (CREATIVE APPROVALS) - Desktop - ( AU )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '854389',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -190,
	'plr_ScrollAdjustment' : 50,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".top").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".top");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}

		$(".navbar, .navbar-inner, footer.sitefooter").css({
			"width" : "1000px",
			"margin" : "0 auto"
		});
		$('.hat-search').css({
			"margin" : "3px 5px"
		});
	}
});