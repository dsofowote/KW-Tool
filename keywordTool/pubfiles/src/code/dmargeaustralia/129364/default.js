integration.meta = {
    'sectionID' : '129364',
    'siteName' : 'D\'Marge Australia - (Creative Approval) - Desktop - ( AU )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1364]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1074562',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1104,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('#main').css({'z-index':'0'});
    }
});

integration.on("adServed", function(e) {
    var headHeight = $('header').outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight,
    });
});
