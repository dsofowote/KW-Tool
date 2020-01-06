integration.meta = {
    'sectionID' : '129229',
    'siteName' : 'Sports News Ireland - Tablet - ( IE )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1066766',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1116,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".td-header-wrap, .td-footer-wrapper, .td-sub-footer-container").css({"max-width": "1116px", "margin": "0 auto"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
          $("#td-outer-wrap").css({"max-width": "1116px"});
          $(".td-menu-background").css({"display": "none"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function(){
  $(".td-header-menu-wrap.td-affix").css({"max-width": "1116px"});
}
