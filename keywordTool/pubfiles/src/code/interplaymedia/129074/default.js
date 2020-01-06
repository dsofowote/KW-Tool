integration.meta = {
    'sectionID' : '129074',
    'siteName' : 'Zero Us Sports - Desktop - ( AU )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1350]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1048324',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1090,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = (width - 1090)/2 + 5;
      $('.td-header-wrap, .td-sub-footer-container, .td-banner-wrap-full').css({
       "max-width" : "1090px",
       "width" : "1090px",
       "margin" : "0 auto"
      });
      $('#menu-zero-us-sports-1').css({
       "margin-left" : "450px"
      });
      $('.td-scroll-up').css({
       "right" : sideWidth
      });
      $('.td-subfooter-menu').css({
       "margin-right" : "50px"
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
        $(".td-scroll-up").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $(".td-scroll-up").css({
            "margin-bottom" : "0"
        });
    }
}
