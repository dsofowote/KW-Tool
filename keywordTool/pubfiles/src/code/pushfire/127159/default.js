integration.meta = {
	'sectionID' : '127159',
	'siteName' : 'Tonspion - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706967',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 990,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -57
};

/*Code*/
integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".footer-wrapper").css({
			"max-width" : "990px",
			"margin" : "0 auto"
		});

		if ($("#navbar").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#navbar");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}

		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			$("head").append("<style>#at4-share{display:none !important}</style>");
		}
	}
});

integration.on('adServed', function(e) {
	var nav = $('#navbar').outerHeight();
	$("#inskinanchor").css({
		"margin-top" : nav
	});
});
