integration.meta = {
    'sectionID' : '130123',
    'siteName' : 'Money Digest  - (Hardcoding Inskin\'s tag ) - Desktop - ( SG )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1580]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1104458',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1320,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("head").append("<style> .site-header .site-banner{width:1320px !important; margin:0 auto !important;}</style>");
      $('#masthead, #site-banner, .site-header .site-banner, .container, div.site-head-ads, #site-hero').css({
        "max-width" : "1320px",
        "margin" : "0 auto"
      });

    }
});
