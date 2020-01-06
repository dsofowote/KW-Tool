integration.meta = {
    'sectionID' : '129404',
    'siteName' : 'Viu - (Creative Appr.) - Tablet - ( HK )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1076790',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1340,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
      $(".body, #top-download-banner-box, .nav-wrap").css({
        "margin" : "0"
      });
		}
		$(".v-foot-wrap").css({
			"max-width" : "1340px"
		});
	}
});

integration.on('adServed', function(e) {
	var navHeight = $(".v-topnav").height();
	$(".v-topnav").parent().css({
		"margin-top" : navHeight
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.FrameBottom = e.data.plr_FrameBottom;
	integration.custom.ismNavScroll();
	$(window).on("scroll", function() {
		integration.custom.ismNavScroll();
	});
});

integration.custom.ismNavScroll = function() {
	var scrollTop = $(document).scrollTop();
	var navTop = integration.custom.FrameTop - scrollTop;
	if (scrollTop > integration.custom.FrameTop) {
		navTop = 0;
	}
	$(".v-topnav").css({
		"top" : navTop
	});
	var wHeight = $(window).height();
	var dHeight = $(document).height();
	var navBottom = 0;
	if (scrollTop + wHeight > dHeight - integration.custom.FrameBottom) {
		navBottom = integration.custom.FrameBottom;
	}
	$(".v-foot-wrap").css({
		"bottom" : navBottom
	});
}
