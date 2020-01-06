integration.meta = {
	"sectionID" : "124342",
	"siteName" : "Mac World",
	"publisher" : "idg",
	"platform" : "tablet"
};

/* As this integration has a passback we must use synchronous mode (Disabled at publisher's request)*/
//

integration.telemetry.setup({
	'keywords' : true,
	'url' : true,
	'ad-served' : true,
	'base-ready' : true,
	'ad-call-response' : true,
	'ad-call' : true,
	'failed-test' : true,
	'impression' : true,
	'custom' : true
});

integration.testParams = {};

integration.params = {
	
  'mf_siteId': '681783',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_Responsive" : true,
	"plr_Fluid" : false,
	"plr_PageWidthAdjustment" : 76,
	"plr_FastInit" : true,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : ""
};

integration.on("adServed", function(e) {
	$("body").css({
		"padding-top" : "68px"
	});
	$("#topLeaderBoardHolder").css({
		"margin-top" : "0px",
		"padding-top" : "10px"
	});
	$("#siteFooter").css({
		"width" : "1100px"
	})
});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* Your PageSkin Tablet Edge Specific code here */
			integration.base.setCfg({
				"plr_PageAlignment" : "left"
			});
			$("#wrapper, .marketPlace, .idgArticlesContainer").css({
				"margin-left" : "0px"
			})
		} else {
			/* Not edge */
			$("#siteFooter").css({
				"margin" : "0 auto"
			});
		}
	}
});

/* Passback Tag */
/*
window.ISMPassback = function() {
	return "<script type=\"text/javascript\" src=\"http://uk.ads.justpremium.com/adserve/js.php?zone=8745\"><\\script>";
}; */
