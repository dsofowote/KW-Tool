integration.meta = {
    'sectionID' : '130158',
    'siteName' : 'SKY SPORTS - (NEW LAYOUT) - DESKTOP - (UK)  ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1284]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('.top-nav, .site-nav, #skycomGlobalNav, .site-header, .sdc-site-match-header, .sdc-site-localnav--football[class], .sdc-site-layout-sticky-region__target, .sdc-site-match-header+.sdc-site-localnav').css({
        'max-width' : '1024px',
        'margin' : '0 auto'
      });
      $('.site-header__col1:before').css({
        'display' : 'none'
      });
      $("head").append("<style>.site-header__col1:before{display: none !important;}</style>");
    }
});
