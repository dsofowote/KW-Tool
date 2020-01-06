integration.meta = {
    'sectionID' : '128614',
    'siteName' : 'Tagmum - Desktop - (HK)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1470]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1026640',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1210,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = (width - 1210)/2 + 10;
      $("#header, #footer, .breadcrumb, .home-latest-video-slider-container").css({
          "width" : "1210px",
          "margin" : "0 auto"
      });
      $("#totop").css({
          "right" : sideWidth
      });
      $("body").css({
          "background-color" : "#f4f3ed"
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
        $("#totop").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $("#totop").css({
            "margin-bottom" : "0"
        });
    }
}
