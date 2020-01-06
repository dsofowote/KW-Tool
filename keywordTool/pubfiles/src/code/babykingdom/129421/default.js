integration.meta = {
    'sectionID' : '129421',
    'siteName' : 'Baby Kingdom - Tablet - (SG)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1077013',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('.ad-placeholder').css({'display':'none'});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $(".container").css({"left": -(integration.custom.FrameSideRight)/2});
        }
    }
});

integration.on("adServed", function(e) {
  var headHeight = $('#header').height();
      $(".ism-anchor").css({"top" : headHeight});
			integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
				})
});
