integration.meta = {
    'sectionID' : '128620',
    'siteName' : 'SBS - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1610]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1027050',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1350,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".global-nav__header, .article__header, .main, .global-nav, .global-footer").css({
        "width" : "1350px !important",
        "margin" : "0 auto !imporant"
      });
      $("html").css({
        "background-color" : "white"
      });
    }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "6"
    });
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
        $(".global-nav__header").css({
            "margin-top" : newheight
        });
    }else{
        $(".global-nav__header").css({
            "margin-top" : "0px"
        });
    }
}
