integration.meta = {
	"sectionID" : "124355",
	"siteName" : "UKTV Good Food",
	"publisher" : "uktv",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1260]
};
integration.params = {
	
  'mf_siteId': '681838',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_UseFullVersion" : true,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_HideElementsByClass" : "google-ads, top-advert, mpu"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#site-footer").css({
			"max-width" : "1000px",
			"margin" : "0 auto",
			"position" : "fixed"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinBotPanel = e.data.plr_FrameBottom;
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	var bottomFrame = integration.custom.PageSkinBotPanel;
	if (winheight + scrolltop < docheight - bottomFrame) {
		$("#site-footer").css({
			"position" : "fixed",
			/* for IE */
			"left" : "none",
			"right" : "none",
			"width" : "1000px"
		});
	} else {
		$("#site-footer").css({
			"position" : "relative",
			"margin-top" : "-43px"
		});
	}
}