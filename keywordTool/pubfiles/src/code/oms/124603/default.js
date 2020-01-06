integration.meta = {
    'sectionID' : '124603',
    'siteName' : 'Stuttgarter Nachrichten Online - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707772',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1020,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".brickgroup, .m-wrapper").css({
					"margin" : "0 auto"
				});
		$(".mod-header").css({
					"padding-left" : "0"
				});
		$(".Billboard_OMS").css({
					"display" : "none"
				});
		$("#footer").css({
					"margin" : "0 auto",
					"max-width": "1020px",
					"padding-left":"0px"
				});
			}
});


	integration.on("adServed", function(e) {
		var headHeight = $('.mod-header').height();
		$(".ism-frame").parent().css({
			"top" : headHeight
		});
		integration.base.setCfg({
							plr_PageHeightAdjustment : -headHeight,
					});
	});
