integration.meta = {
	"sectionID" : "124525",
	"siteName" : "The Lady",
	"publisher" : "lady",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1440]
};

integration.params = {

    'mf_siteId': '681699',
    'plr_ContentW': 1180,
	"plr_UseCreativeSettings" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : ""
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
		 if ($("body").length == 1) {
            $("body").prepend("<div id='inskinanchor'></div>");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
              //  plr_PageHeightAdjustment : /*Enter minus value of navigation height here.*/,
            });
        }
}
});
integration.on("layoutChange", function(e) {
	$(window).on("resize", function() {
		integration.custom.pageskinResize();
	});
	integration.custom.firstLoad = 0;
	integration.custom.pageskinResize();
});
integration.custom.pageskinResize = function() {
	var width = $(window).width();
	if (width < 1360) {
		integration.base.hideAd();
		$("#inskinanchor").hide();
		if (integration.custom.firstLoad === 0) {
			integration.telemetry.recordCustom("PageSkin unloaded");
		}
		integration.custom.firstLoad = 1;
	} else{
		integration.base.showAd();
		$("#inskinanchor").show();
	}
}
