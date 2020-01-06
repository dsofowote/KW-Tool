integration.meta = {
	"sectionID" : "124828",
	"siteName" : "Allgemeine Zeitung Coesfeld and Billerbecker Anzeiger and Gescherer Zeitung ",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706589',
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
		$("#top-position, #page, #footer-position, #footer").css({
			"width" : "1000px",
			"margin" : "0 auto"
		});
		$("#top-position").css({
			"min-width" : "1000px"
		});
		$(".f-nav").css({
			"left" : "auto"
		});
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < (integration.custom.PageSkinTopPanel + 136)) {
		/*136 is the number of pixels between the nav bar and the PageSkin*/
		var newheight = integration.custom.PageSkinTopPanel - height + 136;
		$("#topmenu-position").css({
			"top" : newheight + "px"
		});
	} else {
		$("#topmenu-position").css({
			"top" : "0px"
		});
	}
}