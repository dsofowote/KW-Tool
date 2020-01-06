integration.meta = {
	"sectionID" : "124770",
	"siteName" : "Oriental Daily   ",
	"publisher" : "opg",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1260]
};

integration.params = {
	'mf_siteId' : '707853',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1000,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "adsCTN, adsSuperCTN",
	"plr_HideElementsByClass" : "",
	'plr_FastInit' : true
};

integration.on("adServed", function(e) {
	$("#bottomNavCTN, #footerCTN").css({
		"margin" : "0 auto",
		"width" : "1020px"
	});
	$("#adsSuperCTN").css({
		"margin-top" : "10px"
	});
	$(".ism-frame .ism-frame-inner > a").css({
		"background-color" : "transparent"
	});
});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {

		$(".InSkinContentContainer").css({
			'margin' : '0px'
		});
		$("head").append("<style>.InSkinContentContainer {margin: 0px !important;}</style>");
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://ad4.on.cc/web/www/delivery/ajs.php?zoneid=1079\"><\\script>";
};