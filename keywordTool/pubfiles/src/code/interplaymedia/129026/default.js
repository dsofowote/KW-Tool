integration.meta = {
    'sectionID' : '129026',
    'siteName' : 'Fan Footy - Desktop - ( AU )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1045587',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('#site, #wrapper, #nav-main-wrapper, #main-wrapper, #footer-wrapper, .score-wrapper, #content-outer, #leader-wrapper, #copyright, #footer-nav').css({
        "float" : "none"
      });
      $('#nav-main-wrapper, #footer-wrapper').css({
        "width" : "980px",
        "margin" : "0 auto",
        "left" : "0",
        "right" : "0"
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
        $("#nav-main-wrapper").css({
            "margin-top" : newheight
        });
    }else{
        $("#nav-main-wrapper").css({
            "margin-top" : "0px"
        });
    }
}
