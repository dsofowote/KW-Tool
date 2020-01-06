integration.meta = {
   'sectionID' : '127101',
   'siteName' : 'Yahoo (SSL, CREATIVE APPROVAL) - Desktop - (INT)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '706985',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1000,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {		
		if ($("#page").length == 1) {
			$("#page").prepend("<div id='inskinanchor'></div>");
			/* Detects the height adjustment needed on the page as there are different sized headers*/
			var offset = $("#page").offset().top;
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -offset
			})
			
		}
	}
});