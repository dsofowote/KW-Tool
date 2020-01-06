integration.meta = {
	'sectionID' : '128307',
	'siteName' : ' Fantagazzetta - Desktop - (IT) ',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1001726',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1080,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_AnchorParent' : '#inskinanchor',
	'plr_PageHeightAdjustment' : -50,
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#topbar").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#topbar");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}

		$("footer").css({
			"max-width" : "1080px",
			"margin" : "0 auto"
		});
	}
});

integration.on('adServed', function(e) {
	var hh = $("#topbar").outerHeight();
	$(".ism-frame").parent().css({
		"top" : hh
	});
});
