integration.meta = {
	"sectionID" : "124888",
	"siteName" : "Dresdner Neueste Nachrichten ",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707618',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 978,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel();
		$("#ismIMG").css({
			"height" : "1px"
		});

		$("#footer").css({
			"padding-left" : "0",
			"padding-right" : "0"
		});
		$("#content_holder").css({
			"position" : "relative",
			"margin-left" : "0"
		});
		$("#seite").css({
			"margin-left" : "0px"
		});
		integration.custom.FrameSide = e.data.plr_FrameSide;
		var navLeft = 0 - integration.custom.FrameSide;
		$(".pdb-navbar").css({
			"margin-left" : navLeft
		});
	}
});

integration.on('layoutChange', function(e) {
	var navHeight = $(".pdb-navbar").height();
	$(".ism-frame").parent().css({
		"margin-top" : navHeight,
		"z-index" : "1000"
	});
	integration.base.setCfg({
		plr_PageHeightAdjustment : -navHeight
	});
});
