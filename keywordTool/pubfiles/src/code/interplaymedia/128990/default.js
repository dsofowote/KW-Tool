integration.meta = {
	'sectionID' : '128990',
	'siteName' : 'Show &amp; Tell - Desktop - AU',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1490]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1044416',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1230,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var	navHeight = $(".header-top").outerHeight();
		var headerHeight = $(".header-fixed").outerHeight();
		if ($(".header-fixed").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore(".header-fixed");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_StartScrollOnAnchor : true,
				plr_ScrollAdjustment : headerHeight,
				plr_PageHeightAdjustment : -navHeight 
			});
		}
		$('.navbar').css({
			"margin-bottom" : 0
		});
		$('.section, .footer').css({
			"width" : "1230px",
			"margin" : "0 auto"
		});
	}
});
