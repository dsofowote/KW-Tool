integration.meta = {
    'sectionID' : '129061',
    'siteName' : 'The Financial Express - Desktop - ( IN )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1346]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1047220',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1100,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var navHeight = $('.market-seat').height();
      var headHeight = $('.mainnav').height() + navHeight;
      $('.adsbox990x90').css({'display':'none'});
      $('.fefullrow, .footerbg').css({'max-width':'1100px', 'margin': '0 auto'});
      if ($("body > header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("body > header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                plr_ScrollAdjustment : -navHeight
            });
        };
    }
});
