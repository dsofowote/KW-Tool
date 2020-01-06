integration.meta = {
    'sectionID' : '129123',
    'siteName' : 'Free Malaysia Today - Desktop - (MY)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1376]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1056779',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1116,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('.td-header-wrap, .td-footer-wrapper, .td-header-menu-wrap, .td-sub-footer-container').css({'max-width':'1116px', 'margin':'0 auto'});
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
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if (width < 1917 || integration.custom.isSuper) {
        var sideWidth = (width - 1116)/2;
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight;
        $(".onesignal-bell-launcher-button").css({
            "left" : sideWidth,
            "bottom": '80px'
        });
        $(".td-scroll-up").css({
            "right" : sideWidth,
            "bottom": '100px'
        });
        $(".td-more-articles-box").css({
            "right" : sideWidth,
            "bottom": '150px'
        });

    } else {
      $(".onesignal-bell-launcher-button").css({
          "left" : sideWidth,
          "bottom": '80px'
      });
      $(".td-scroll-up").css({
          "right" : sideWidth,
          "bottom": '100px'
      });
      $(".td-more-articles-box").css({
          "right" : sideWidth,
          "bottom": '150px'
      });

    }
}
