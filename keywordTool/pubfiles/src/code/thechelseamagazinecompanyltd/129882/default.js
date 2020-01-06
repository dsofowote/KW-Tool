integration.meta = {
    'sectionID' : '129882',
    'siteName' : 'Baby Magazine - Desktop - (UK)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1094965',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('.container-fluid, .bm-wrapper').css({'display':'none'});
        $('.bm-wrapper').css({'max-width':'1170px', 'margin':'0 auto'});
    }
});

integration.on("adServed", function(e) {
      $(".ism-frame").parent().css({"z-index" : "2"});

});

