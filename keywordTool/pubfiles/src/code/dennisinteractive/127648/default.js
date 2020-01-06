integration.meta = {
	'sectionID' : '127648',
	'siteName' : 'Auto Express - Desktop - (INT)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1242]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '773199',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 982,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
		integration.custom.isSuperwide = true;
    }
});  

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1325 || integration.custom.isSuperwide) {
		var sideWidth = (width - 984) / 2;
		$("head").append("<style>#feedbackify .fby-tab-r {right: " + sideWidth + "px !important;}</style>");
	} else {

		$("head").append("<style>#feedbackify .fby-tab-r {right: 0px !important;}</style>");
	}
}
