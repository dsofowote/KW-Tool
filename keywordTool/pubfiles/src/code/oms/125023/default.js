integration.meta = {
	"sectionID" : "125023",
	'siteName' : 'Sportbuzzer - Desktop - (DE)',
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706321',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1284,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id^=uAd_], [id^=ox_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
			if ($(".navbar").length == 1) {
				$("<div id='inskinanchor'></div>").insertAfter(".navbar");
				integration.base.setCfg({
					"plr_AnchorParent" : "#inskinanchor",
				});
			}
			$(".dcm-story-new__story-share-container").css({
				"margin-left" : "20px"
			});

			$("#teaser-scoreboard, .dcm-main, .royalSlider, .rsOverflow, .dcm-footer-new, .container, .dcm-secondary-nav, .dcm-section-wrapper--has-title").css({
				"max-width" : "1284px",
				"margin" : "0 auto"
			});
			$(".dcm-footer-new__bottom-line").css({
				"max-width" : "1254px",
			});
			$("body").css({
				"overflow" : "hidden"
			});
			$(".dcm-main").css({
				"z-index" : "0"
			});
			$(".dcm-site-header, body").css({
				"background-color" : "#f6f6f6"
			});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "40"
	});
});

integration.on("layoutChange", function(e) {
	var headHeight = $("#d3-main-navigation").outerHeight();
	integration.custom.FrameBottom = e.data.plr_FrameBottom;
	$("body").css({
		"padding-bottom" : integration.custom.FrameBottom
	});
	integration.base.setCfg({
		"plr_PageHeightAdjustment" : -headHeight
	});
});
