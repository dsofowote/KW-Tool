integration.meta = {
    'sectionID' : '125024',
    'siteName' : 'Cicero - Tablet - (AT CH DE)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707477',
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
		$("#urban-sky-right").css({
			"display" : "none"
		});
		$("#page").css({
			"margin" : "0 auto"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* Your PageSkin Tablet Edge Specific code here */
			integration.base.setCfg({
				"plr_PageAlignment" : "left"
			});
			$("#page").css({
				"margin-left" : "0"
			});
		}
	}
});
