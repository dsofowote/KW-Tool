integration.meta = {
    'sectionID' : '130208',
    'siteName' : 'ITavisen - Desktop - (AU)',
    'platform' : 'desktop'
};

function setWindow() {
    return currentWindow.top;
  };

integration.testParams = {
    'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1107677',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.header').height();
        $('#page-footer, #vi-stories-main-container').css({'max-width':'980px','margin':'0 auto'})
        $('.ads-area, .banner').css({'display':'none'});
        $('body').css({'overflow-x':'visible'});
        integration.base.setCfg({
            plr_PageHeightAdjustment : -headHeight,
            plr_ScrollAdjustment : headHeight
        });
    }
});
