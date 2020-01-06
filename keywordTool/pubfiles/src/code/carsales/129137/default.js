integration.meta = {
    'sectionID' : '129137',
    'siteName' : 'Carsales - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1400]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1058404',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1140,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".top-panel__inner-container, .component--hero-image, .component--ad-panel, .component--helpful-links, .primary-footer").css({
        "width" : "1140px",
        "margin" : "0 auto"
      });
      $("#page-header").css({
        "max-width" : "1140px"
      });
      $(".footer-widgets, footer .footer-info-area .csn-site-nav-header").css({
        "padding-left" : "20px"
      });
    }
});
