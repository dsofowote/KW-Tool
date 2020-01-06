integration.meta = {
    'sectionID' : '130102',
    'siteName' : 'PowerUnlimited - Desktop - (NL) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1102705',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('footer').css({'max-width':'1000px', 'margin':'0 auto'});
    }
});

integration.on("adServed", function(e) {
	var headHeight = $('nav').height();
      $(".ism-frame").parent().css({"top" : headHeight});
      integration.base.setCfg({
            plr_PageHeightAdjustment : -headHeight,
            plr_ScrollAdjustment: -headHeight
        })
});
