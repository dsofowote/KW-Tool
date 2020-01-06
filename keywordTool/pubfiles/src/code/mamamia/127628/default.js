integration.meta = {
    'sectionID' : '127628',
    'siteName' : 'MamaMia - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '768233',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
		'plr_ForceFrameBottom': 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
			$(".full-width").css({"max-width" : "1000px", "margin" : "auto", "left" : "unset", "right" : "unset"});
			$(".leaderboard-main-ad").css({"top" : "290px"});
      $("#__nuxt").css({"margin-top" : "30px"});
      $("#leaderboard_pos1").css({"display" : "none"});
			window.unloadPageskin = function() {
									try {
											integration.destroy();
									} catch (e) {
									}
							};
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("#__layout").css({"max-width": "1000px", "margin-left": "-150px"});
						$(".leaderboard-main-ad").css({"top" : "150px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

integration.on("adServed", function(e) {
	var headHeight = $(".nav-full").outerHeight();
	$(".ism-frame").parent().css({"z-index" : "999999", "top": headHeight});
	integration.base.setCfg({
		plr_PageHeightAdjustment : -headHeight,
	});
});
