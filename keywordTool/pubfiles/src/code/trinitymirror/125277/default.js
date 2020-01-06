integration.meta = {
	"sectionID" : "125277",
	"siteName" : "Mirror Publisher bookings",
	"publisher" : "mirror"
};

window.ISMPassback = function() {
	try {
		PageSkinFallback();

	} catch (e) {
	};
}

integration.testParams = {};

integration.params = {
	
	'mf_siteId' : '706764',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 972,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_URLKeywords" : 1
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$('#page').css({
				'margin-left' : '0px'
			});
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			})
		}
	}
});

integration.on("adServed", function() {
	$('.fb-recommendations-bar').css({
		'display' : 'none'
	});
	$('#page').css({
		'margin-top' : '0px'
	});
	$(".ism-frame").parent().css({
		"z-index" : "105"
	});
});
