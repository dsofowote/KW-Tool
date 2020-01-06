integration.meta = {
	'sectionID' : '127974',
	'siteName' : 'Hardware Zone MY - (Creative Approval) - Desktop - ( MY )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1320]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '961594',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1060,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append('<style>#back_to_top.on{right: 23% !important;} .footer{width: 1060px; margin: 0 auto;}</style>');
	}
}); 