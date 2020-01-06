integration.meta = {
	"sectionID": "124488",
	"siteName": "The Official Charts Company",
	"publisher": "officialcharts",
	"platform": "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId': '681687',
	"plr_ContentType": "PAGESKINEXPRESS",
	"plr_PageAlignment": "center",
	"plr_UseCreativeSettings": true,
	"plr_ContentW": 1100,
	"plr_UseFullVersion": true,
	"plr_HideElementsByID": "",
	"plr_FastInit": true,
	'plr_CheckOptOut': true,
	'plr_ConsentString': "BOWgA1yOWgA1yAKABBENBxoAAAAiCALgAUABYAFQALgAZABAAEQAI8ATgBPAEsAQgAwI",
	'plr_PageScanExclude' : ' .site-header, .site-footer, #conversation '
};

integration.on("adCallResult", function (e) {
	if (e.data.hasSkin) {
		$('body').addClass('pageskin-on');
		$(".adspace-top").hide();
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment: "left"
			});
			$("#container").css({
				"margin-left": "0px"
			});
		}
	}
});

integration.on("adServed", function (e) {
	$("body").addClass("pageskin-on");
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://ads.ayads.co/ajs.php?zid=22680\"><\\script>";
};
