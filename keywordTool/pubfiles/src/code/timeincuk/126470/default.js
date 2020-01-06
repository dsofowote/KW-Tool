integration.meta = {
	'sectionID' : '126470',
	'siteName' : 'WhatsonTV (Competitions) - Tablet - (UK)',
	'platform' : 'tablet'
};




integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {


	'mf_siteId' : '707011',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 982,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
			if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
				$(".container").css({
					"margin-left" : "0px"
				});
				integration.base.setCfg({
					plr_PageAlignment : "left"
				})
			}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return inskinPassback();
};
