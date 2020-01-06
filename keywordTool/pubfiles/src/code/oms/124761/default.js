integration.meta = {
  "sectionID": "124761",
  "siteName": "inSuedth�ringen",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706322',
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1000,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
  "plr_HideElementsByClass": ""
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = (width - 1000)/2 + 20;
      integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
      $(".mm-page, .mm-fixed-top, .mm-fixed-bottom, #cookiehinweis-wrapper").css({
        "max-width" : "1000px",
        "margin" : "0 auto"
      });
      $(".desktopTop.stickyNavigation").css({
        "margin-left" : "-9px !important"
      });
      $("div.gotop").css({
          "left" : sideWidth
      });
      $("#superbanner").css({
          "display" : "none"
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
        $("div.gotop").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $("div.gotop").css({
            "margin-bottom" : "0"
        });
    }
}
