integration.meta = {
    'sectionID' : '124898',
    'siteName' : 'Westfaelische Nachrichen - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707361',
	 'plr_PageAlignment' : 'center',
	 'plr_ContentW': 980,
	 'plr_ContentType': 'PAGESKINEXPRESS',
	 'plr_UseFullVersion': true,
	 'plr_UseCreativeSettings': true,
	 'plr_HideElementsByID' : '',
	 'plr_HideElementsByClass' : '',
   'plr_FastInit': true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		// var headHeight = $('#top-position').height();
		// var navHeight = $('.avNavigation').height();
		// if ($(".avNavig000tion ").length == 1) {
		// 			$("<div id='inskinanchor'></div>").insertAfter(".avNavigation ");
		// 			integration.base.setCfg({
		// 					plr_AnchorParent : "#inskinanchor",
		// 					plr_PageHeightAdjustment : -headHeight,
		// 					plr_ScrollAdjustment: -navHeight,
		// 			});
		// 	}
		$(".avFooter").css({
			"width" : "980px",
			"margin" : "0 auto",
			"padding-left" : "20px"
		});
		$("#page-content").css({
			"margin" : "0 auto"
		});
		$("#sdgAdServerContainer-banner , #top ").css({
			"display" : "none",
		});
	}
});

integration.on("adServed", function(e) {
	var navHeight = $('.avNavigation').height();
	$(".ism-frame").parent().css({
		"top" : navHeight
	});
	integration.base.setCfg({
						plr_PageHeightAdjustment : -navHeight,
				});
});
