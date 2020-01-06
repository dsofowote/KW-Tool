integration.meta = {
    'sectionID' : '129380',
    'siteName' : 'GV.com.sg - (Creative Approval) - Desktop - ( SG )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1550]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1075173',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1290,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".navbar, .ct-img, .footer-section, #mainSlideShow").css({"max-width": "1290px", "margin": "0 auto"});
    }
});
