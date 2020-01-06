integration.meta = {
    'sectionID' : '128777',
    'siteName' : 'Philstar - Desktop - ( PH )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1284]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1034602',
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
      var width = $(window).width();
      var sideWidth = (width - 1024)/2;
      $("#backtotop").css({
          "right" : sideWidth
      });
    }
});

integration.on("adServed", function(e) {
    var headHeight = $("#header").outerHeight() + $(".header_subnav").outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
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
        $("#backtotop").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $("#backtotop").css({
            "margin-bottom" : "0"
        });
    }
}
