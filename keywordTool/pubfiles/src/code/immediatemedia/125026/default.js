integration.meta = {
	"sectionID" : "125026",
	"siteName" : "Bikeradar",
	"publisher" : "immediatemedia",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '681712',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentW" : 1000,
	"plr_PageAlignment" : "center",
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_URLKeywords" : 1,
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('ad-inskin-active');
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				"plr_PageAlignment" : "left",
				"plr_ScrollAdjustment" : 40
			});
			$('#page-canvas, .global-header').css({
				'width' : '1000px',
				'margin-left' : '0px'
			});
			$('body').css({
				'width' : 'auto',
				'position' : "static"
			});
			integration.custom.edgeSpecific = true
			$("head").append("<style>.bottom-navbar-wrap.fixedNav{left:0px}</style>");
		}
	}
});

integration.on("layoutChange", function(e) {
	if (integration.custom.edgeSpecific) {
		$('head').append('<style>.fixed .global-header{ left: ' + e.data.plr_FrameSide + 'px }</style>');
	}
});

integration.on("adServed", function(e) {
	$('.ism-frame').parent().css({
		'z-index' : '10000'
	});

	if(integration.custom.edgeSpecific){
		$('.ism-frame').parent().css({
			'z-index' : '99'
		});
	}
});
