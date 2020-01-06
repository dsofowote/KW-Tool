integration.meta = {
	'sectionID' : '128215',
	'siteName' : 'Desktop - 20MinutosListas - (ES)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '991990',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".numero-elemento").css({
			"left" : "0px"
		});
		
		$(".listas_banner").hide();
		
		var headHeight = $("#ui-header-down").height();
		if ($("#header-20m").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#header-20m");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_ScrollAdjustment : headHeight - 8,
                plr_PageHeightAdjustment : -headHeight
            });
        }
	}
});