integration.meta = {
	"sectionID" : "124642",
	"siteName" : "Idowa",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706450',
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
		var width = $(window).width();
		var sideWidth = (width - 1000)/2 + 985;
		$("#superbanner").parent().attr("id", "ism-sbanner");
		$("head").append("<style>#ism-sbanner #superbanner{display: none !important;}</style>");
		$("head").append("<style>#ism-sbanner div.body div.site{padding: 0px !important; margin: 0 auto !important} .site.ressort{padding:0px !important}</style>");

		$(".site.ressort").css({
			"margin" : "0 auto",
		});
		$(".site").css({
			"margin" : "0 auto",
			"padding-left" : "0px"
		});
		$(".article-social-bar").css({
				"left" : sideWidth
		});
	}
});
