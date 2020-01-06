integration.meta = {
	'sectionID' : '124739',
	'siteName' : 'Berlin Online - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707812',
	'plr_PageAlignment' : 'left',
	'plr_ContentW' : 988,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".skyscrapper_ad").hide();
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideLeft = e.data.plr_FrameSide;
	$("head").append("<style> .social-share {margin-left : " +integration.custom.FrameSideLeft + "px; max-width: 988px;} </style>");
}); 