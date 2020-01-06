integration.meta = {
    'sectionID' : '128908',
    'siteName' : 'Who What Wear - Tablet - ( AU )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1040972',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('.article-wrapper').css({
        'float' : 'none'
      });
      $("head").append("<style>.main-container, .top-slot-container, .container-fluid, .article-wrapper{width: 1020px; margin: 0 auto;}</style>");
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $('.container').css({
              'margin' : '0'
            });
            $("head").append("<style>.container, .container-fluid, .article-wrapper{margin: 0;}</style>");
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/1027487/whowhatwear', [-1, -1]).display();<\\script>";
};