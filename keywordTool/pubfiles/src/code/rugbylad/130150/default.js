integration.meta = {
    'sectionID' : '130150',
    'siteName' : 'RugbyLAD - Desktop - (UK IE)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1380]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1104916',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1120,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
        integration.custom.isSuper = true;
      }
      $("#footer").css({
        "margin" : "0 auto",
        "max-width" : "1120px"
      });
      $("#at4-share").css({
        "z-index" : "5"
      });
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 1505 || integration.custom.isSuper) {
        var sideWidth = (width - 1120)/2;
        $("#at4-share").css({
            "right" : sideWidth
        });
    } else {
        $("#at4-share").css({
            "right" : "10px"
        });
    }
}

integration.on("adServed", function(e) {
    var headHeight = $(".nav-wrap").outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight,
        "z-index" : "6"
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
});
