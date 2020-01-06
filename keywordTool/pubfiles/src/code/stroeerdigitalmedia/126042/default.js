integration.meta = {
	'sectionID' : '126042',
	'siteName' : 'Kino',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707402',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -76,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".main-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".main-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$("head").append("<style>.inner, #page-footer{max-width: 1000px !important; margin: 0 auto !important; position: relative !important} html{padding-top: 0 !important}#inskinanchor{margin-top: -10px;}</style>");

		$("footer").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});

		$("#hockeystick").css({
			"max-height" : "0px",
			"min-height" : "0px",
			"margin" : "-13px"
		});
	}
});
