integration.meta = {
   'sectionID' : '127906',
   'siteName' : 'InSing - (Publisher Booking) - Tablet - ( SG )',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '919965',
   'plr_PageAlignment' : 'center',
   'plr_Responsive' : true,
   'plr_PageWidthAdjustment' : -34,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			$("#layout").css({
				"margin-left" : "0px"
			});
			$("body > .container, #footer").css({
				"margin-left" : "0px"
			});
			$("head").append("<style>#footer {margin-left: 0px !important;}</style>");

			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "8"
	});
});
