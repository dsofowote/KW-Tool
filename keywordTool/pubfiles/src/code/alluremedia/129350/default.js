integration.meta = {
    'sectionID' : '129350',
    'siteName' : 'Pedestrian - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1073101',
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
    if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
      $(".container").css({"margin-left":"0px"});
      $(".footer").css({"margin-left":"0px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
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
