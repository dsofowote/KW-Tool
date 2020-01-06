integration.meta = {
    'sectionID' : '129227',
    'siteName' : 'Cincai News - Desktop - ( MY )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1400]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1066764',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1140,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    // 'plr_ScrollAdjustment' : 43,
    'plr_ForceFrameBottom' : 0

};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("header, footer, #navbar").css({"max-width": "1140px", "margin": "0 auto"});
      $(".trending-bar .prev-next").css({"max-width": "10%"});
    }
});
