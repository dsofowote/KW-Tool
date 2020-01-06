integration.meta = {
    'sectionID' : '129766',
    'siteName' : 'Swellnet - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1490]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1087629',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1230,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('.global-footer').css({'max-width':'1230px', 'margin':'0 auto'});
        $('.global-sponsor').css({'display':'none'});

    }
});

integration.on("adServed", function(e) {
	var headHeight = $('.global-header').height();
      $(".ism-frame").parent().css({"top" : headHeight});
			integration.base.setCfg({
						plr_PageHeightAdjustment : -headHeight
				})
});
