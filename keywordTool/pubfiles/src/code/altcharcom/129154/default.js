integration.meta = {
    'sectionID' : '129154',
    'siteName' : 'Altchar.com - Tablet - (INT)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1059776',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $(".navbar").outerHeight();
      if ($(".navbar").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".navbar");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                // plr_ForceFrameBottom: 0
            });
        }
        $("#container").css({"width": "1000px", "margin": "0 auto"});
        $("#inskinanchor").css({"margin-top" : headHeight});
        integration._addPixel();


        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
          $("#container").css({"margin-left": "0px"});
          integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
