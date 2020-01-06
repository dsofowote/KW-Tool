integration.meta = {
    'sectionID': '128676',
    'siteName': 'B.T. - Desktop - (DK)',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1280]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1029510',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1020,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_GetContentHeightVersion': 2,
    'plr_SideScroll': false,
    'plr_ForceFrameBottom': 0,
    'plr_FastInit': true
};

//CUSTOM INTEGRATION REQUESTED BY PUBLISHER - PLEASE DO NOT REMOVE - PLEASE TALK TO DAN OR RICH BEFORE EDITING
integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        if ($(".site-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".site-header");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                pl_PageHeightAdjustment: -133
            });
        }

        $(".topbanner-desktop").hide();
        $("#Leaderboard_1").css({"display":"none"});

        $(".site-header .main-navigation-mobile").css({
            "right": "60px"
        });
        $(".content-wrapper, footer.site-footer").css({
            "float": "none"
        });
        $(".sitemap__block.col-md-12").css({
            "right": "0px",
            "max-width": "1020px"
        });

    }
});

integration.on("layoutChange", function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	if ($(document).height() < 1440) {
	} else {
		var contentH = 1440 - integration.custom.FrameTop;
		integration.base.setCfg({
			'plr_ContentH' : contentH
		});
    }

    var stylesCSS = '<style id="inskinPL" type="text/css">';
    stylesCSS += '</style>';
    $('head').append(stylesCSS);

    // Sets skyscraper to sit below our skin at all times
    var newValue;
    var plFixed = true;
    var headHeight = $(".nav-mobile").outerHeight();

    $(document).scroll(function () {
          var scrollTop = $(document).scrollTop();
          var skyTop = 1300 - scrollTop;
          var headHeight = $(".site-header").outerHeight();
          var a = contentH + integration.custom.FrameTop + headHeight;
          if (scrollTop < a) {
              var documentHeight = $(window).outerHeight();
              var checkdis = a - scrollTop;
              console.log(checkdis)
              newValue = '#right_sticky, #left_sticky{top:' + checkdis + 'px !important;}';
              $("#inskinPL").html(newValue);
          } else {
              newValue = '#right_sticky, #left_sticky{}';
              $("#inskinPL").html(newValue);
          }
      });
});
