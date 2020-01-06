integration.meta = {
   'sectionID' : '127118',
   'siteName' : 'Netmums - Smartphone- (UK) ',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708128',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("body > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -90,
				"plr_StartScrollOnAnchor" : true,
				"plr_ScrollAdjustment" : 80
			});
		}
	}
});