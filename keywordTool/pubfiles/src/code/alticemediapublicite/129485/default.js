integration.meta = {
    'sectionID' : '129485',
    'siteName' : '01net - Tablet - (DE)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1080782',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1284,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.header-fixed').height();
        $('footer').css({'max-width':'1284px', 'margin':'0 auto'});
        $('.pubbanner').css({'display':'none'});
        if ($(".header-fixed").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".header-fixed");
            integration.base.setCfg({
                "plr_AnchorParent" : "#inskinanchor",
                "plr_PageHeightAdjustment" : -headHeight,
                "plr_ScrollAdjustment" : -headHeight
            });
        }
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.PageSkinFrameSide = e.data.plr_FrameSideRight;
            $('#wrap, footer').css({'margin-left': -(integration.custom.PageSkinFrameSide)/2});
            $('footer').css({'margin-left': '-6px'});
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://securite.01net.com/ac?out=js&nwid=13&siteid=7270&pgid=1004617&fmtid=95&tgt=origine%3Dinskin&visit=s&gdpr_consent=[sas_gdpr_consent]&tmstp=[timestamp]\"><\\script>\n";
};
