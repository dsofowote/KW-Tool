integration.meta = {
    'sectionID' : '129644',
    'siteName' : 'Cycling News - Desktop - ( NZ )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086254',
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
        $('.global-banner ').css({'display':'none'});
        $('body ').css({'background-image':'none'});

    }
});

integration.on("adServed", function(e) {
    var headHeight = $(".bottom-navbar-wrap").height();
        integration.base.setCfg({
        plr_ScrollAdjustment: headHeight,
        });
     });
