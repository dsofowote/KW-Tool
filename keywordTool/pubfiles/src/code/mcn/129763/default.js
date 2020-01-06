integration.meta = {
    'sectionID' : '129763',
    'siteName' : 'Sports TG - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1087794',
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
        $('#topadheader').css({'display':'none'});
        $('body').css({'display':'initial'});
        if ($(".stick-around").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".stick-around");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor"
            });
        }

        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#globalnav, #header-wrap, #nav-wrap, #site-wrap').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})

        }
    }
});

integration.on("adServed", function(e) {
	var headHeight = $('.stick-around').height();
      $(".ism-frame").parent().css({"top" : headHeight});
			integration.base.setCfg({
						plr_PageHeightAdjustment : -headHeight
				})
});
