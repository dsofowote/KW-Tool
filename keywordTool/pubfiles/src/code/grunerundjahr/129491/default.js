integration.meta = {
    'sectionID' : '129491',
    'siteName' : 'Stern - Tablet - (DE)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId' : '1082484',
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
      $(".page").css({
        "width" : "960px",
        "margin" : "0 auto"
      });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
          $(".page").css({
            "margin-left" : "0px"
          });
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
