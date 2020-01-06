integration.meta = {
    'sectionID' : '124755',
    'siteName' : 'Dithmarscher Landeszeitung - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '706776',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
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
    if (width <1917 || integration.custom.isSuper) {
        var sideWidth = (width - 1170)/2;
        $("#scrollToTop").css({
            "right" : sideWidth,
            "bottom" : "100px"
        });
    } else {
      $("#scrollToTop").css({
            "right" : sideWidth,
            "bottom" : "100px"
        });
    }
}
