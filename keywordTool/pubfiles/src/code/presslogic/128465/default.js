integration.meta = {
    'sectionID' : '128465',
    'siteName' : 'Press Logic - (Creative Approval) - Desktop - ( HK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1345]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1015717',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1085,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = ((width - 1085)/2) + 20;
      var headHeight = $("#header-small").height();
      integration.base.setCfg({
          plr_ScrollAdjustment : headHeight
      });
      $(".top-header, .bottom-header, #footer").css({
        "margin" : "0 auto",
        "width" : "1085px"
      });
      $("#back-top").css({
          "right" : sideWidth
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
        $("#back-top").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $("#back-top").css({
            "margin-bottom" : "0"
        });
    }
}
