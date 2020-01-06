integration.meta = {
    'sectionID' : '129826',
    'siteName' : 'Top Ten Reviews - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1089518',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 970,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.primary-nav').height();
        $('.slot-lightbox1').css({'display':'none'});
        $('#document-footer').css({'max-width':'970px', 'margin':'0 auto'});
        if ($(".primary-nav").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".primary-nav");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight ,
                plr_ScrollAdjustment: -headHeight

            });
        }
    }
});
