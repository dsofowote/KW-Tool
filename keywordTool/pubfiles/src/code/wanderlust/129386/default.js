integration.meta = {
  'sectionID': '129386',
  'siteName': 'Wanderlust.co.uk - Desktop - ( UK )',
  'platform': 'desktop'
};

integration.testParams = {
  'desktop_resolution': [1320]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
  'mf_siteId': '1075569',
  'plr_PageAlignment': 'center',
  'plr_ContentW': 1060,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {

        $(".umb-grid").css({
            "max-width" : "1020px",
            "margin" : "0 auto"
        });

        $(".siteContent, .row.siteFooter .container, .navbar .container-fluid, .dropdown-menu, .siteFooterLinks, .navSection, .siteFooterContainer, .fixedNavContainer").css({
            "max-width" : "1060px",
            "margin" : "0 auto"
        });

        $(".bodyContent").css({
            "background" : "none"
        });
    }
});


integration.on('adServed', function(){
    $(".ism-anchor").css({
        "z-index" : "10000"
    });
});
