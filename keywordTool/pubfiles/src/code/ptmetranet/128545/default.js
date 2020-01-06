integration.meta = {
    'sectionID' : '128545',
    'siteName' : 'Uzone ID Travel - Desktop - ( ID )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1520]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1021766',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1260,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = ((width - 1260)/2) + 10;
      $(".owl-carousel").css({
        "margin" : "0 auto",
        "width" : "1260px"
      });
      $(".fly-to-top").css({
          "right" : sideWidth
      });
      $(".navbar").css({
        "max-height" : "44px",
        "min-height" : "44px"
      });
      $("body").css({
        "margin-top" : "44px"
      });
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
        $(".fly-to-top").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $(".fly-to-top").css({
            "margin-bottom" : "0"
        });
    }
}
