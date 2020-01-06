integration.meta = {
   'sectionID' : '127638',
   'siteName' : 'Game FAQs - Desktop - (UK)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1420]
};

integration.flaggedTests = [];

integration.params = {
	
   'mf_siteId' : '769513',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1160,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_StartScrollOnAnchor' : true,
   "plr_FastInit": true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($(".masthead").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".masthead");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -80
			});
		}
		$("#footer").css({
			"width" : "1160px",
			"margin" : "0 auto",
			"left" : "0px",
			"right" : "0px"
		});
	}
});