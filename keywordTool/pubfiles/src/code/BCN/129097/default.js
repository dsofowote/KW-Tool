integration.meta = {
    'sectionID' : '129097',
    'siteName' : ' Das Kochrezept - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1580]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1055025',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1260,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".site-layout__ad").css({"display": "none"});
      $(".site-layout").css({"max-width": "1260px", "margin": "auto"});
      $(".site-layout__footer").css({"max-width": "1260px", "margin": "auto"});
			$("head").append("<style>.frontpage__row, .layout-row__content {margin-left: auto !important; margin-right: auto !important;}</style>");
			$("head").append("<style>.swiper__items {margin-left: -20px !important; margin-right: 30px !important;}</style>");
			$("head").append("<style>.site-layout__background {right: auto !important;}</style>");

    }
});
