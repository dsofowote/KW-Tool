integration.meta = {
	'sectionID' : '126660',
	'siteName' : 'Au Feminin - Desktop - (FR)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708035',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1040,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_FastInit': true,
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>body{overflow-x: visible !important;}</style>");
		var headerHeight = $('#header').height();
		if ($("body > #header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > #header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight,
				plr_StartScrollOnAnchor : true
			});
		}
		$('.sas_FormatID_117').css({
			"margin-top" : "10px"
		});
		$('footer').css({
			"width" : "1040px",
			"margin" : "0 auto"
		});
	}
});
