integration.meta = {
    'sectionID' : '129349',
    'siteName' : 'Pedestrian - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1254]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1073100',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 994,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".footer").css({"width":"994px", "margin": "0 auto"});
      $('head').append('<style>.page-break-newsletter-signup-wrapper{width:994px !important;margin:0 auto !important;padding:34px !important}</style>');
    }
});

integration.on("adServed", function(e) {
   var headerHeight = $(".navbar-default").outerHeight();
       $(".ism-anchor").css({"top" :headerHeight });
       $("html").css({"overflow-x":"visible"});
       integration.base.setCfg({
           plr_PageHeightAdjustment : -headerHeight
         })
});
