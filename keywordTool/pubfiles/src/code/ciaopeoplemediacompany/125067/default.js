integration.meta = {
	"sectionID" : "125067",
	"siteName" : "FanPage",
	"publisher" : "ciaopeople",
	"platform" : "tablet"
};

integration.telemetry.setup({ 
	'keywords': true,
	'url': true,
	'ad-served': true,
	'base-ready': true,
	'ad-call-response': true,
	'ad-call': true,
	'failed-test': true,
	'impression': true,
	'custom': true
});

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707889',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 992,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "",
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('#footer').css({
			'width' : '950px'
		});
		$("body").css({
			"padding" : "0"
		});
		// format the site for PageSkin Edge
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$(".box-general").css({
				"margin-left" : "0px"
			});
			$(".footer .box-general").css({
				"max-width" : "960px"
			});
			$('.skin_web').css({
				'margin-left' : '10px'
			});
			$('#footer').css({
				'margin-left' : '0px'
			});
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
		}
	}
});
