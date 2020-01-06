integration.meta = {
    'sectionID' : '129554',
    'siteName' : 'An-Nahar - Desktop (MENA) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1380]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085997',
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
      var width = $(window).width();
      var sideWidth = (width - 1120)/2 + 10;
      $(".main").css({
        "max-width": "1120px",
        "margin": "0 auto",
        "left" : "0",
        "right" : "0"
      });
      $(".toTop").css({
          "right" : sideWidth
      });
      $("a.open-annahar-en").css({
          "left" : sideWidth
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
        $(".notifications-overlay .popup").css({
            "margin-top" : newheight
        });
        $("a.open-annahar-en").css({
            "margin-top" : newheight
        });
        $("header section.main").css({
          "position" : "relative"
        });
    }else{
        $("header section.main").css({
          "position" : "fixed",
          "top" : "0"
        });
        $(".notifications-overlay .popup").css({
            "margin-top" : "0px"
        });
        $("a.open-annahar-en").css({
            "margin-top" : "0px"
        });
    }
}
