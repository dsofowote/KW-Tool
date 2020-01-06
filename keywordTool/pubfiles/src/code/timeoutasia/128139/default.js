integration.meta = {
	'sectionID' : '128139',
	'siteName' : 'Timeout Asia - Tablet - ( HK SG )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '981037',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1150,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_SideScroll' : true

};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
		if ($("#main-container > #content").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#main-container > #content");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_ScrollAdjustment : -51,
				plr_PageHeightAdjustment : -113
			});
		}
		$("#content, footer").css({"margin": "0 auto", "max-width": "1150px"});


        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			$("#content, footer").css({"margin-left": "0"});
			$(".hybrid-navbar, .sticky-nav").css({"margin-left": "-20px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
