integration.meta = {
   'sectionID' : '126308',
   'siteName' : 'OK - Tablet - (AU)',

   'platform' : 'tablet',
   'restrictions' : ''
};




integration.testParams = {};

integration.params = {
	'mf_siteId' : '707803',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 990,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_FrameTop" : 100,
	"plr_FrameSide" : 100,
	"plr_FrameBottom" : 100,
	"plr_PageAlignment" : "center",
	"plr_URLKeywords" : ""
};

integration.on("adServed", function(e) {
	$("body").css({
		"background-image" : "none"
	});
	$(".ism-frame").parent().css({
		"z-index" : "3"
	});
});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				"plr_PageAlignment" : "left"
			});
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<!-- PassBack AdSlot 1 for Ad Unit 'ns-network/inskin_passback' ### Size: [[970,250]] --><script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/34722903/ns-network/inskin_passback', [[970,250]]).setClickUrl('%%CLICK_URL_UNESC%%').display();<\\script>";
};
