integration.meta = {
    'sectionID' : '130071',
    'siteName' : 'Unity - Desktop - (NL)',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1102133',
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
        var headHeight = $('.affix-top').height() + $('.regio-selectie').height() + $('.affix').height();
        $('#div-gpt-ad-8077027-1, #HomeMetroBlock, #div-gpt-ad-8077027-4, .content, .gemist-slider, .contact-us , footer').css({'max-width':'1170px', 'margin':'0 auto'});
        if ($(".regio-selectie").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".regio-selectie");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                plr_ScrollAdjustment : -headHeight,
            });
        }
    }

});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"//nl.ads.justpremium.com/adserve/js.php?zone=71620\"><\\script>\n";
};


