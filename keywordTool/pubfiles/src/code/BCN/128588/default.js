integration.meta = {
    'sectionID' : '128588',
    'siteName' : 'Freundin - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1024436',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1158,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".page-wrapper, #menu-main-navigation, .region-content .region-full-content, .region-feed-teasers .region-full-content, .item-media__header-image").css({
        "max-width" : "1158px",
        "margin" : "0 auto"
      });
      $("#google_ads_iframe_/40748507/sty_fre_desktop/lifestyle/empty/channel/special_1_0__container__").css({
        "height" : "0px"
      });
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinTopNav();
    $( document ).scroll(function() {
        integration.custom.InSkinTopNav();
    });
});

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if( height < integration.custom.PageSkinTopPanel ){
        var newheight = integration.custom.PageSkinTopPanel - height;
        $("#menu-main-navigation").css({
            "margin-top" : newheight
        });
    }else{
        $("#menu-main-navigation").css({
            "margin-top" : "0px"
        });
    }
}
