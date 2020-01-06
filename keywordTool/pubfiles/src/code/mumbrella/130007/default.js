integration.meta = {
    'sectionID' : '130007',
    'siteName' : 'Mumbrella - Tablet - (AU) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1099392',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1030,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("#main").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#main");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
            });
        }
        $('body').css({'display':'initial'});
        $('#primaryBillboard').css({'display':'none'});
        $('.footer-banner').css({'max-width':'1030px','margin':'0 auto'});
        $('.dropbox').css({'max-width':'1030px','margin':'0 auto', 'right':'0'});
        $('.white').css({'margin-top':'40px'});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.on("adServed", function(e) {
                $(".ism-frame").parent().css({"left" : "18px"});
            });

            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('.white').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});
            $('footer').css({'width':'80%'});
        }
    }
});

integration.on("adServed", function(e) {
	var headHeight = $('#main').height();
      $(".ism-frame").parent().css({"top" : headHeight});
			integration.base.setCfg({
                        plr_PageHeightAdjustment : -headHeight,
				})
});