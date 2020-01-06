integration.meta = {
    'sectionID' : '128988',
    'siteName' : 'Racing - Tablet - ( AU )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1044414',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 990,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $("#masthead_0_divHubNav").css({
              "left" : "-20px"
            });
            $("#sb-site").css({
              "max-width" : "990px",
              "left" : "-5px"
            });
            $("#sticky-header").css({
              "max-width" : "990px"
            });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/305590751/racing', [1, 1]).display();\n<\\script>";
};