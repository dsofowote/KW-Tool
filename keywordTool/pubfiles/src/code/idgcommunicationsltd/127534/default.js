integration.meta = {
	'sectionID' : '127534',
	'siteName' : 'PC Advisor - Desktop - (US)',
	'platform' : 'desktop'
};

integration.testParams = {
	"desktop_resolution" : [1360]
};
integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '735000',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on("adServed", function(e) {

	$("#wrapper").css({
		"padding-top" : "40px"
	});
	$("#subHeader").css({
		"position" : "relative",
		"top" : "0px"
	});
	$("#topNav, #subHeader").css({
		"max-width" : "1100px",
		"left" : "0",
		"right" : "0",
		"margin-right" : "auto",
		"margin-left" : "auto"
	});
	$("#siteFooter").css({
		"max-width" : "1100px",
		"margin" : "0 auto"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameBottom = e.data.plr_FrameBottom;

	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});

	var wwidth = $(window).width();
	var videoRightMargin = (wwidth - 1100) / 2;

	/*
	$("#cnx-autoplay-container").css({
		"right" : videoRightMargin + 20,
		"bottom" : integration.custom.FrameBottom + 5
	});

	$(".connatix").css({
		"position" : "absolute"
	});
	*/

	var headerHeight = $("#topNav").outerHeight() + 5;

	integration.base.setCfg({
		plr_PageHeightAdjustment : -headerHeight
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$("#topNav, .beSticky").css({
			"top" : newheight
		});
	} else {
		$("#topNav, .beSticky").css({
			"margin-top" : "0px",
			"top" : "0px"
		});
	}
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/6046\"><\\script>";
};
