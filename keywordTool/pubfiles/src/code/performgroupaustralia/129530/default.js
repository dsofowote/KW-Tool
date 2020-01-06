integration.meta = {
    'sectionID' : '129530',
    'siteName' : 'Supercars - (Creative Approval) - Tablet - ( AU )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085439',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 978,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("header, .adupperhead, .footer, .newslettersignup").css({
        "max-width" : "978px",
        "margin" : "0 auto"
      });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $("header, .adupperhead, .footer, .newslettersignup").css({
              "margin" : "0"
            });
            $(".page-inner").css({
              "max-width" : "978px"
            });
        }
    }
});
