integration.meta = {
	"sectionID" : "124724",
	"siteName" : "Sudkurier",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706532',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 980,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_GetContentHeightVersion" : 2,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};
integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".skyscraper_container, #omsv_sky_DhtmlLayer, .superbanner").hide();
		$("#fullcontainer").css({
			"margin" : "0 auto",
			"padding-right" : "0"
		});
		$("head").append("<style>.ism-sm-fixed{left: 0px !important; position: fixed !important;}</style>");
		$("head").append("<style>.ism-sm-ab{position: absolute !important; left: -85px !important; margin-left: 0 !important;}</style>");
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.socialMediaPos();
	integration.custom.socialMediaWidth();
	$(document).on("scroll", function() {
		integration.custom.socialMediaPos();
	});
	$(window).on("resize", function() {
		integration.custom.socialMediaWidth();
	});
});

integration.custom.socialMediaPos = function() {
	var scrollTop = $(document).scrollTop();
	var article = $("#wrapper_12 > .container_12").offset();
	if (scrollTop >= article.top) {
		$("#article-share").addClass("ism-sm-fixed");
		$("#article-share").removeClass("ism-sm-ab");
	} else {
		$("#article-share").addClass("ism-sm-ab");
		$("#article-share").removeClass("ism-sm-fixed");
	}
	integration.custom.socialMediaWidth();
};

integration.custom.socialMediaWidth = function() {
	var width = $(window).width();
	var sideWidth = (width - 980) / 2;
	$(".ism-sm-fixed").css({
		"margin-left" : sideWidth + 45
	});
};
