integration.meta = {
	"sectionID" : "124340",
	"siteName" : "PC Advisor",
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
	
  'mf_siteId': '681793',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1100,
	"plr_PageAlignment" : "center",
	"plr_FastInit" : true,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#wrapper").css({
			"padding-top" : "0px"
		});
		$("#topNav, #subHeader").css({
			"position" : "relative",
			"top" : "0px"
		});
		$("#topNav, #subHeader").css({
			"max-width" : "1100px",
			"left" : "0",
			"right" : "0",
			"margin-right" : "auto",
			"margin-left" : "auto"
		});
		$("#siteFooter").css({
			"max-width" : "1100px",
			"margin" : "0 auto"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("#wrapper").css({
				"margin-left" : "0px"
			});
			integration.base.setCfg({
				plr_PageAlignment : "left"
			})
		}
	}
});

/* Passback Tag */
/*
window.ISMPassback = function() {
	return "<script type=\"text/javascript\" src=\"http://uk.ads.justpremium.com/adserve/js.php?zone=3525\"><\\script>";
};*/
