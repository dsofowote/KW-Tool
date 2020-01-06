integration.meta = {
    'sectionID' : '129091',
    'siteName' : 'Harian Metro - Desktop - ( MY )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1555]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1055020',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1295,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#footer").css({
          "width" : "1295px",
          "margin" : "0 auto"
      });
      $("head").append("<style> .region-top {display: none !important;}</style>");
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
        integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        integration.custom.InSkinBottomNav();
        $( document ).scroll(function() {
            integration.custom.InSkinBottomNav();
        });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 1917 || integration.custom.isSuper) {
        var sideWidth = (width - 1295)/2 + 5;
        $("head").append("<style>.ins-backtotop.show{right: " + sideWidth + "px !important; z-index: 4;}</style>");
        $("head").append("<style>.sp-fancybox-skin{left: " + sideWidth + "px !important;}</style>");
    } else {
        $("head").append("<style>.ins-backtotop.show{right: " + sideWidth + "px !important; z-index: 4;}</style>");
        $("head").append("<style>.sp-fancybox-skin{left: " + sideWidth + "px !important;}</style>");
    }
}

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
        $(".ins-backtotop.show, .sp-fancybox-skin").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $(".ins-backtotop.show, .sp-fancybox-skin").css({
            "margin-bottom" : "0"
        });
    }
}
