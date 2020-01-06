integration.meta = {
    'sectionID' : '130049',
    'siteName' : 'Home Beautiful  - Desktop - ( AU )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1532]
};

integration.flaggedTests = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1272,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.Navbar ').height();
        $('.PageWrap').css({'max-width':'1272px', 'margin':'0 auto'});
        if ($(".PageWrap").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore(".PageWrap");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : - headHeight,
                plr_ScrollAdjustment : headHeight
            });
        }

    }
});

integration.on("adServed", function(e) {
	var headHeight = $('.Navbar ').height();
      $(".ism-frame").parent().css({"top" : headHeight});
			integration.base.setCfg({
						plr_PageHeightAdjustment : -headHeight
				})
});
