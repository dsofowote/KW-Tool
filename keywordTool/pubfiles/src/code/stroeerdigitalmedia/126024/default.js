integration.meta = {
	'sectionID' : '126024',
	'siteName' : 'Auto Motor Und Sport',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707272',
	'plr_PageAlignment' : 'custom',
	'plr_FramePositionCSS' : 'margin: 0 auto; border-right: transparent solid 160px;',
	'plr_ContentW' : 1140,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_StartScrollOnAnchor' : true

};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("body > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -127
			});
		}
		// $(".v-A_-header-sticky, .v-A_-subnav.v-A_-subnav-sticky").css({
		// 		"left" : "50%"
		// });
		$("#div-gpt-ad-banner").hide();
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "22"
	});
});
