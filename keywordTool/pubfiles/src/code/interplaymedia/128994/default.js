integration.meta = {
    'sectionID' : '128994',
    'siteName' : 'League Unlimited - Tablet - ( AU )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1044420',
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
      $(".content-wrapper, .header-1, .header-4, .header-2, footer, #loginBar").css({
        "width" : "1200px",
        "margin" : "0 auto"
      });
      $(".content-wrapper").css({
        "background-color": "transparent",
        "background-image": "none"
      });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $(".content-wrapper, .header-1, .header-4, .header-2, footer, #loginBar").css({
              "margin-left" : "0"
            });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
  return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n googletag.pubads().definePassback('/33310909/inskin.passback', [728, 90]).display();\n<\\script>";
};
