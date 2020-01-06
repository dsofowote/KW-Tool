integration.meta = {
	"sectionID" : "124912",
	"siteName" : "Halterner Zeitung",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706282',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1016,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var headHeight = $(".WcmsHeader").outerHeight();
		if ($(".WcmsHeader").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".WcmsHeader");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
            });
        }
		$(".WcmsPageLogo, .WcmsFooter ").css({
			"max-width" : "1036px",
			"margin" : "0 auto"
		});
	}
});
