integration.meta = {
    'sectionID' : '129416',
    'siteName' : 'OK - TABLET - (INT EX UK IE ASIA US AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1076883',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1180,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#div-gpt-ad-ad-mix-slot, .top-slot, #div-gpt-ad-top-slot").css({"display":"none"});
      $(".sharebar").css({"width":"1180px", "margin": "0 auto"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $("main, footer").css({"left": -(integration.custom.FrameSideRight)/2});
        }
    }
});

integration.on("adServed", function(e) {
      $(".ism-frame").parent().css({"top" : "-24px"});
			integration.base.setCfg({
        plr_ScrollAdjustment : -26
				})
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'> googletag.pubads().definePassback('/5293/tm-network/inskin_passback', [[320,50]]) .setClickUrl('%%CLICK_URL_UNESC%%') .display(); <\\script>";
};
