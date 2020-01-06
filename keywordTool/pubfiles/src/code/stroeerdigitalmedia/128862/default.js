integration.meta = {
    'sectionID' : '128862',
    'siteName' : 'Wir Eltern - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1038072',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('#billboard iframe').css({
          "margin" : "auto"
      });
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    $("#header").css({ "top": integration.custom.PageSkinTopPanel + "px" });
    integration.custom.InSkinBottomNav();
    $(document).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function() {
    var scrolltop = $(document).scrollTop();
    var headerTop = integration.custom.PageSkinTopPanel - scrolltop;
    if (headerTop > 0) {
        $("#header").css({
            "top": headerTop + "px"
        });
    } else {
        $("#header").css({
            "top": "0"
        });
    }
}
