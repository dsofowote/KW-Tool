integration.meta = {
	'sectionID' : '129003',
	'siteName' : 'Racing &amp;amp; Sports - Desktop - ( AU )',
	'platform' : 'desktop'
};


integration.testParams = {
    'desktop_resolution' : [1480]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1045578',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1220,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('#header').outerHeight();
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -headerHeight,
				'plr_StartScrollOnAnchor' : true
			});
		}
		$('#footer').css({
			"width" : "1220px",
			"margin" : "0 auto"
		});
	}
});
