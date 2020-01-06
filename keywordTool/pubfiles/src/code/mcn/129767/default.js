integration.meta = {
    'sectionID' : '129767',
    'siteName' : 'Swellnet - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1087630',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1230,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        $('.global-footer').css({'max-width':'1230px', 'margin':'0 auto'});
        $('.global-sponsor').css({'display':'none'});
        $('.btn-back-top').css({'right': integration.custom.FrameSideRight});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('.main-body, .global-header-body, footer').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})

        }
    }
});

integration.on("adServed", function(e) {
	var headHeight = $('.global-header').height();
      $(".ism-frame").parent().css({"top" : headHeight, "z-index":"1000"});
			integration.base.setCfg({
						plr_PageHeightAdjustment : -headHeight
				})
});