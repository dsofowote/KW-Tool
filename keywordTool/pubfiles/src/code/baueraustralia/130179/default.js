integration.meta = {
    'sectionID' : '130179',
    'siteName' : 'OFFLINE_Harpersbazaar - Desktop - ( AU )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1284]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1105489',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".header-wrapper, .header").css({
          "max-width": "1024px",
          "margin-left": "auto",
          "margin-right": "auto"
      });
      $(".header").css({
          "left": "0",
          "right": "0"
      });
      $(".header-wrapper").css({
          "overflow": "unset"
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
        $(".header").css({
            "position" : "relative"
        });
    }else{
        $(".header").css({
            "position" : "fixed"
        });
    }
}
