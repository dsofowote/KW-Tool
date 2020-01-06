integration.meta = {
	"sectionID" : "125028",
	"siteName" : "Cycling News",
	"publisher" : "immediatemedia",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '681794',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentW" : 1000,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_FrameTop" : 90,
	"plr_FrameSide" : 130,
	"plr_FrameBottom" : 90,
	"plr_PageAlignment" : "center",
	"plr_URLKeywords" : 1
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('ad-inskin-active');
		$("head").append("<style>tr:nth-of-type(odd){background : none;}</style>")
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$('#background_layer').css({
				'width' : '1000px'
			});
			$('head').append('<style>body {margin-left: 20px !important;}</style>');
			$('#page-canvas, .global-header').css({
				'margin-left' : '0px',
				'max-width' : '1000px'
			});
			$("body").css({
				"width" : "inherit"
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});

integration.on("adServed", function(e) {
	$('[id^=InSkinFrameLeft_myTabletSkin]').css({
		'z-index' : '3'
	});
	$('[id^=InSkinFrameRight_myTabletSkin]').css({
		'z-index' : '3'
	});
	$('.ism-frame').parent().css({
		'z-index' : '10000'
	});
});
