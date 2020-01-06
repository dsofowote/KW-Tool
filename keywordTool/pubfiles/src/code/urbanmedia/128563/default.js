integration.meta = {
    'sectionID' : '128563',
    'siteName' : 'Hallo Eltern - Desktop - DE',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1480]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1023468',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1220,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = ((width - 1220)/2) + 10;
      $(".cleverpush-bell").css({
          "left" : sideWidth
      });
      $("#colophon").css({
        "margin" : "0 auto",
        "width" : "1220px"
      });
      $("body").css({
          "background-color" : "#fff"
      });
      $(".slot-leaderboard").css({
          "margin-top" : "20px"
      });
      $(".cookie-consent").css({
          "z-index" : "4"
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
        $(".cleverpush-bell").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $(".cleverpush-bell").css({
            "margin-bottom" : "0"
        });
    }
}
