integration.meta = {
    'sectionID' : '129413',
    'siteName' : 'OK - Desktop - (ASIA)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1500]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1076880',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1240,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : -33

};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".section-page").css({"margin": "113px auto auto auto", "max-width":"1240px"});
      $(".article-page").css({"margin": "113px auto auto auto", "max-width":"1240px"});
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return " <script src='https://www.googletagservices.com/tag/js/gpt.js'> googletag.pubads().definePassback('/5293/tm-network/inskin_passback', [[970,250]]) .setClickUrl('%%CLICK_URL_UNESC%%') .display(); <\\script>";
};
