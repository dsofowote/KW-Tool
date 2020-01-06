integration.meta = {
    'sectionID' : '130090',
    'siteName' : 'Westlanders - Tablet - (NL)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1102630',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 960,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('#wrapper').css({'max-width':'960px', 'margin':'0 auto'});
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        $('#fingerprint').css({'right': integration.custom.FrameSideRight});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#wrapper').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"//nl.ads.justpremium.com/adserve/js.php?zone=58308\"><\\script>";
};
