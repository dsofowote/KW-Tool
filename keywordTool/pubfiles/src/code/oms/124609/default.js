integration.meta = {
	"sectionID" : "124609",
	"siteName" : "Abendzeitung M�nchen",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707266',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1006,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "[id^=google_ads_], rectangle",
	"plr_HideElementsByClass" : "",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 0
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".site").css({
			"margin" : "0 auto",
			"padding" : "0"
		});
		$('body').css('margin', '0px');
		$(".main-nav-wrapper.fixed").css({
			"width" : "1006px",
			"margin-left" : "-15px",
			"padding" : "0px 15px"
		});
	  /* Add a spacer pixel to the bottom of the content (for content using float positioning) */
	  integration._addPixel();

		$("head").append("<style>#superbanner, #omsv_sky_DhtmlLayer{display: none !important;</style>");
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
});
