integration.meta = {
    'sectionID' : '128495',
    'siteName' : 'ShoppingLifestyle  - Desktop - ( HK MY PH SG US )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1380]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1018316',
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
      var headerHeight = $(".header").height() + $(".subheader").height() + $(".highlights").height();
      var width = $(window).width();
      var sideWidth = (width - 1120)/2 + 10;
      var headingTop = e.data.plr_FrameTop + 50;
      $("table.mainnavbg, #content").css({
        "width" : "1120px",
        "margin" : "0 auto"
      });
      $(".channelname").css({
          "top" : headingTop
      });
      $(".AdtruePopupVideo").css({
          "right" : sideWidth
      });
      $("#AdtrueCollapseDiv, #AdtrueExitAll").css({
          "right" : sideWidth + 370
      });
      $("#AdtrueExitAll").css({
          "margin-left" : -sideWidth - 10
      });
    }
});

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
    $(".AdtruePopupVideo").css({
    "margin-bottom" : footermargin + "px"
});
	} else {
    $(".AdtruePopupVideo").css({
    "margin-bottom" : "0px"
    });
	}
}
