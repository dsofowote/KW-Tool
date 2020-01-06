integration.meta = {
	'sectionID' : '126952',
	'siteName' : 'Navbharat Times- Desktop - (MENA) ',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707193',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	//'plr_ScrollAdjustment' : 50,
	'plr_URLKeywords' : 1
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSide = e.data.plr_FrameSide;
		treatments = function(treat) {
			return treat == "Superwide";
		}
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$(".globalnav").css({
			"margin-left" : "10px"
		});
		$("#fixedMenu, .topnav").css({
			"max-width" : "1000px"
		});
		$(".stickyposition").css({
			"left" : "0",
			"z-index" : "90000"
		});
		$("#widget-two").css({
			"left" : "-4px"
		});
		$("#socialsharing").css({
			"left" : integration.custom.FrameSide
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameBottom = e.data.plr_FrameBottom;
	var wwidth = $(window).width();
	var sides = (wwidth - 1000) / 2;
	var widget = 0 - integration.custom.FrameSideRight;

	if (integration.custom.isSuper) {
		$("#social_share_left").css({
			"display" : "none"
		});
		var rowcss = "<style>#loginsave{right:"
		rowcss += sides;
		rowcss += "px !important;}</style>"
		$("head").append(rowcss);
	} else {
		$("#social_share_left").css({
			"margin-left" : widget
		});
		$("head").append("<style>#loginsave{right:0px !important}</style>");
	}
	integration.custom.ismResize();
	$(window).on("scroll resize", function() {
		integration.custom.ismResize();
	});

	$(".ism-frame").parent().css({
		"z-index" : "1031"
	});
});

integration.custom.ismResize = function() {
	var streamingRight = ($(window).width() - 1000) / 2;
	var gaanaRight = integration.custom.FrameSideRight + $("#streaming_box").width();
	var gaanaBottom = 0;
	var position = $(document).scrollTop() + $(window).height();
	var limit = $(document).height() - integration.custom.FrameBottom;
	if (position > limit) {
		gaanaBottom = integration.custom.FrameBottom;
	}
	$("#gaanaplayer").css({
		"right" : gaanaRight,
		"bottom" : gaanaBottom
	});
	$("#streaming_box").css({
		"right" : streamingRight,
		"bottom" : gaanaBottom,
		"top" : "unset"
	});
	var tabContainerLeft = streamingRight;
	$("#outerTabContainer").css({
		"max-width" : "1000px",
		"left" : tabContainerLeft
	});
};
