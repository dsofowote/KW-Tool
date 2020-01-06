integration.meta = {
	"sectionID" : "124743",
	"siteName" : "The Lad Bible",
	"publisher" : "theladbible",
	"platform" : "tablet"
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '681765',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameTop = e.data.plr_FrameTop;
		integration.custom.FrameSide = e.data.plr_FrameSide;
		var headHeight = $(".header").outerHeight() + integration.custom.FrameTop;
		$("html").addClass("skin__opt--three");
		$('header, section, footer').css({
			"max-width" : "1024px",
			"margin" : "0 auto"
		});
		$('.nav__dropdown').css({
			"top" : headHeight
		});
		$('.article__body').css({
			"width" : "calc(100% - 340px - 5%)"
		});
		$("head").append("<style>.header__nav, .nav__dropdown{width: calc(100% - " + integration.custom.FrameSide*2 + "px) !important; margin: 0 auto;}</style>");

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('body').css({
				"overflow-x" : "visible"
			});
			$('header, section, footer').css({
				"margin" : "0"
			});
			$('.share-controls--sticky .share-controls').css({
				"right" : "9rem"
			});
			$("head").append("<style>.header__nav, .nav__dropdown, .header{width: calc(100% - 320px) !important;}</style>");
			integration.custom.isEdge = true;
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameBottom = e.data.plr_FrameBottom;
	integration.custom.FrameSide = e.data.plr_FrameSide;
	$("head").append("<style>body{overflow-y: hidden !important; padding-bottom: " + integration.custom.FrameBottom + "px;}</style>");
	if (integration.custom.isEdge) {
		$("head").append("<style>body{margin-left: 0 !important; padding-left: " + integration.custom.FrameSide + "px !important;}</style>");
		$("head").append("<style>.nav__dropdown{margin-left: " + integration.custom.FrameSide + "px !important;}</style>");
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src=\"http://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback('/8493129/Passback_TLB_Landscape_1',[[728, 90], [970, 250]]).setTargeting(\"passback\", \"Inskin-TLB-UK-Tablet-LL1\").display();\n<\\script>";
};
