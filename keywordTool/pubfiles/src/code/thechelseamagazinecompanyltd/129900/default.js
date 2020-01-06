integration.meta = {
    'sectionID' : '129900',
    'siteName' : 'Racecar Engineering - Desktop - (UK)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1424]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1094999',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1164,
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
    if (width < 1530 || integration.custom.isSuper) {
        var sideWidth = (width - 1080)/2;
        $(".td-scroll-up").css({
            "right" : sideWidth + 5
        });
    } else {
        $(".td-scroll-up").css({
            "right" : "5px"
        });
    }
}
