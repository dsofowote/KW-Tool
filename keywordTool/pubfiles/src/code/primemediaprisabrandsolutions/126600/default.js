integration.meta = {
	'sectionID' : '126600',
	'siteName' : 'Moda - Desktop - (ES) - (Fixed Sides)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707057',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 49
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#principal").css({
			"margin-top" : "10px"
		});
	}
});
