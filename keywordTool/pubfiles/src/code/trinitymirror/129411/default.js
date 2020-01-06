integration.meta = {
    'sectionID' : '129411',
    'siteName' : 'OK - Desktop - (US)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1436]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1076878',
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
      $("#div-gpt-ad-top-slot, .top-slot").css({"display":"none"});
      $(".sharebar").css({"width":"1180px", "margin": "0 auto"});

    }
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
        integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        integration.custom.InSkinBottomNav();
        $( document ).scroll(function() {
            integration.custom.InSkinBottomNav();
        });
});



integration.custom.floatingButtons = function() {
    var width = $(window).width();

    if (width >1436 || integration.custom.isSuper) {
        var sideWidth = (width - 1180)/2 -30;

        $("body").append("<style> .float-and-park{right: " + sideWidth + "px !important}</style>");
        $("body").append("<style> .float-and-park{bottom: 70px !important}</style>");
    } else {
      $("body").append("<style> .float-and-park{right: " + sideWidth + "px !important}</style>");
      $("body").append("<style> .float-and-park{bottom: 70px!important}</style>");
    }
};

integration.on("adServed", function(e) {
      $(".ism-frame").parent().css({"top" : "-24px"});
			integration.base.setCfg({
        plr_ScrollAdjustment : -26
				})
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/5293/tm-network/inskin_passback', [[970,250]])\n  .setClickUrl('%%CLICK_URL_UNESC%%')\n  .display();\n <\\script>";
};
