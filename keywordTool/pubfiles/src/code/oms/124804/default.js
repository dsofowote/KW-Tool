integration.meta = {
	"sectionID" : "124804",
	"siteName" : "WestfalenBlatt",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1320]
};

integration.params = {
	'mf_siteId' : '726471',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#page, #footer-position").css({
			"max-width" : "1000px"
		});
		$("#footer-position").css({
			"min-width" : "1000px"
		});
		$("#top-position").css({
			"min-height" : "0px",
			"height" : "0px"
		});
		$("#topmenu-position").css({
			"position" : "fixed",
			"top" : "0",
			"z-index" : "100",
			"left" : "50%",
			"margin-left" : "-480px"
		});
		try {
			jQuery(window).trigger("resize");
		} catch (e) {
		}
	}
});

integration.on("adServed", function(e) {
	try {
		jQuery(window).trigger("resize");
	} catch (e) {
	}
	$(".ism-frame").parent().css({
		"z-index" : "200"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
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
	if (height < (integration.custom.PageSkinTopPanel + 131)) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$("#topmenu-position").css({
			"margin-top" : newheight + 131,
			"left" : "50%",
			"margin-left" : "-480px"
		});
	} else {
		$("#topmenu-position").css({
			"margin-top" : "0px",
			"left" : "50%",
			"margin-left" : "-480px"
		});
	}
}