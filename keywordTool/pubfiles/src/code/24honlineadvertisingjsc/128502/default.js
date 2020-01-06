integration.meta = {
    'sectionID' : '128502',
    'siteName' : 'Eva - Desktop - ( US VN )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1290]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1018534',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1030,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $(".hdr_contnr_up").height();
      if ($(".after-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".after-header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
      $(".txtbanrvert > span").css({
         "display" :  "none"
      });
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    integration.custom.InSkinBottomNav();
    $(document).scroll(function() {
      integration.custom.InSkinBottomNav();
    });
});

integration.on("adServed", function(e) {
      var width = $(window).width();
      var sideWidth = (width - 1030)/2 + 10;
      $('.mini-player').css({
         "right" : sideWidth
      });
});

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
    $(".mini-player").css({
    "margin-bottom" : footermargin + "px"
});
	} else {
    $(".mini-player").css({
    "margin-bottom" : "0px"
    });
	}
}
