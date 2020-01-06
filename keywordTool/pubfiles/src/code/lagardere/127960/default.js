integration.meta = {
	'sectionID' : '127960',
	'siteName' : 'Europe1Sports.fr    - Desktop - ( FR )',
	'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1258]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '956647',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 998,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true,
	"plr_StartScrollOnAnchor" : true,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#nav");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -100
			});
		}

		$("#banner-full, #ad-megaban2").css({
			"min-height" : "0px",
			"height" : "0px",
			"margin" : "0px"
		});

		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
	}
});
integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinBottomNav();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 2170 || integration.custom.isSuper) {
		var sideWidth = (width - 998) / 2;
		$("head").append("<style>.wbtz-embed-main-sticky {right:" + sideWidth + "px !important;}</style>");
	} else {
		$("head").append("<style>.wbtz-embed-main-sticky{right:0px !important;}</style>");
	}
}
integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight;
		$("head").append("<style>.wbtz-embed-main-sticky {margin-bottom : " + footermargin + "px !important;}</style>");
	} else {
		$("head").append("<style>.wbtz-embed-main-sticky {margin-bottom : 0px !important;}</style>");
	}
}

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\" src=\"https://ads.ayads.co/ajs.php?zid=13367\"><\\script>";
};