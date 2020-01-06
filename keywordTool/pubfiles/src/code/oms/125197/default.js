integration.meta = {
	'sectionID' : '125197',
	'siteName' : 'Hurriyet - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706383',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 960,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : "",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 0,
	//'plr_PageHeightAdjustment' : -100,
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var headHeight = $("#sticky-header-control").outerHeight();
		var width = $(window).width();
		var sideWidth = (width - 960)/2;
		if ($("#sticky-header-control").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#sticky-header-control");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight
			});
		}
		$(".footer.clearfix, .h16-breaking-news-wrapper").css({
			"margin" : "0 auto",
			"max-width" : "960px"
		});
		$("#sticky-header-control").css({
			"margin-bottom" : "0px"
		});
		$("head").append('<style>.insider-opt-in-notification{right: ' + sideWidth + 'px !important;} </style>');

		$(".hurBox.AvrAllBox.clr").css({
			"clear" : "both"
		});
		$("body").css({
			"overflow-x" : "visible"
		});
		$("head").append("<style> .subMenu.js-toggle {max-width : 960px; margin-left : -480px; left : 50%; } .InSkinNav.fixed-top.socialMenu {position: static; box-shadow: 0px;}</style>");
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
	$(window).resize(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel + 80) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$(".socialMenu").addClass("InSkinNav");
		$(".socialMenu.fixed-top").css({
			"max-width" : "960px",
			"margin-left" : "0",
			"left" : "0%"
		});
	} else {
		var width = $(window).width();
		$(".socialMenu").removeClass("InSkinNav");
		if (width > 960) {
			$(".socialMenu.fixed-top").css({
				"max-width" : "960px",
				"margin-left" : "-480px",
				"left" : "50%"
			});
		} else {
			$(".socialMenu.fixed-top").css({
				"max-width" : "960px",
				"margin-left" : "0",
				"left" : "0"
			});
		}
	}
};
