integration.meta = {
	"sectionID" : "124298",
	"siteName" : "OK Magazine",
	"publisher" : "northernandshell",
	"platform" : "tablet"
};




integration.testParams = {};

integration.params = {
	'mf_siteId' : '681757',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 990,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_URLKeywords" : "",
	"plr_PageHeightAdjustment" : -50,
	"plr_FastInit" : true,
	"plr_URLKeywords" : 2,
	"plr_ConsentTimeout" : 3
};

integration.on("adServed", function(e) {
	$("body").css({
		"background-image" : "none"
	});

	$(".ism-frame").parent().css({
		"z-index" : "3",
		"top" : "47px"
	});

});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			$(".center-content").css({
				"margin-left" : "0px"
			});
			integration.base.setCfg({
				"plr_PageAlignment" : "left"
			});
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;

	$(".menu-icons").css({
		"display" : "none"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<!-- PassBack AdSlot 1 for Ad Unit 'ns-network/inskin_passback' ### Size: [[970,250]] --><script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/34722903/ns-network/inskin_passback', [[970,250]]).setClickUrl('%%CLICK_URL_UNESC%%').display();<\\script>";
};
