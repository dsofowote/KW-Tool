integration.meta = {
    'sectionID' : '128725',
    'siteName' : ' SEN - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1032890',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $(".site-nav-bar").outerHeight();
        if ($(".site-header").length == 1) {
                    $("<div id='inskinanchor'></div>").insertAfter(".site-header");
                    integration.base.setCfg({
                        plr_AnchorParent : "#inskinanchor",
                        plr_PageHeightAdjustment : -headHeight + -15
                    });
		}
    $('.site-footer').css({
      'max-width' : '1200px',
      'margin' : '0 auto'
    });
    $('.site-nav-bar').css({
      'z-index' : '10'
    });

    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n googletag.pubads().definePassback('/14690844/sen1116', [728, 90]).display();\n<\\script>";
};
