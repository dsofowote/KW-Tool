integration.meta = {
    'sectionID' : '130072',
    'siteName' : 'Unity - Tablet - (NL)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1102134',
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
        var headHeight = $('.affix-top').height() + $('.regio-selectie').outerHeight() + $('.affix').height();
        $('#div-gpt-ad-8077027-1, #HomeMetroBlock, #div-gpt-ad-8077027-4, .content, .gemist-slider, .contact-us , footer').css({'max-width':'1170px', 'margin':'0 auto'});
        if ($(".regio-selectie").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".regio-selectie");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -(headHeight + 40),
                plr_ScrollAdjustment : -(headHeight - 10),
            });
        }
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#div-gpt-ad-8077027-1, #HomeMetroBlock, #div-gpt-ad-8077027-4, .content, .gemist-slider, .contact-us , footer').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})
            $('.regio-selectie, .affix, .affix-top ').css({'margin-left':'-20px'});
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"//nl.ads.justpremium.com/adserve/js.php?zone=71620\"><\\script>\n";
};