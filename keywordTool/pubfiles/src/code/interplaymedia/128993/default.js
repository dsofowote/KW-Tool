integration.meta = {
    'sectionID' : '128993',
    'siteName' : 'League Unlimited - Desktop - ( AU )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1044419',
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
      $(".header-1, .header-4, .header-2, footer, #loginBar").css({
        "width" : "1200px",
        "margin" : "0 auto"
      });
      $(".content-wrapper").css({
        "background-color": "transparent",
        "background-image": "none"
      });
    }
});

/* Passback Tag */
window.ISMPassback = function() {
  return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n googletag.pubads().definePassback('/33310909/inskin.passback', [728, 90]).display();\n<\\script>";
};