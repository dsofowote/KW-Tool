integration.meta = {
	"sectionID": "124980",
	"siteName": "Kicker",
	"publisher": "interactivemedia",
	"platform": "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId': '707601',
	"plr_UseCreativeSettings": true,
	"plr_UseFullVersion": true,
	"plr_ContentType": "PAGESKINEXPRESS",
	"plr_ContentW": 1200,
	"plr_PageAlignment": "center",
	"plr_HideElementsByID": "",
	"plr_HideElementsByClass": "",
	"plr_FastInit": true
};

integration.on("adCallResult", function (e) {
	if (e.data.hasSkin) {

		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel();

		$("#kick__page-container").css({
			"width": "1200px",
			"margin": "0 auto",
			//"position": "relative"
		});
		$(".ovAdSky > .ovAdHead").hide();
		$("#ad-sb").hide();

		// format the site for PageSkin Edge
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("#kick__page-container").css({
				"margin-left": "0px"
			});
			integration.base.setCfg({
				plr_PageAlignment: "left"

			});
		}
	}
});