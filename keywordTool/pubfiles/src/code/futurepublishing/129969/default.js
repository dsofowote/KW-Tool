integration.meta = {
    'sectionID' : '129969',
    'siteName' : 'Space - Tablet - (UK)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1098941',
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
        $('#document-footer, .primary-nav').css({'max-width':'1000px','margin':'0 auto'});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
           $('.primary-nav, #main, #document-footer').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})

        }
    }
});

integration.on('adServed', function(e) {
    $(".ism-frame").parent().css({"z-index":"10000"});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">googletag.pubads().definePassback(\"/10518929/Passback_Space/Inskin\", [728, 90]).display();<\\script>";
};
