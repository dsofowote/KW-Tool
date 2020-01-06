integration.meta = {
	'sectionID' : '125925',
	'siteName' : '90min - Tablet - (INT)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '706702',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_PageHeightAdjustment" : -106
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.InSkinBottomNav();
		$('div.mobile-nav-main-wrapper').addClass('mobile-nav-main-wrapper__opened');
		integration.custom.FrameSide = e.data.plr_FrameSide;
		$("head").append("<style>.page-wrap{margin-top: 0 !important;}</style>");
		if ($("#site-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#site-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}

		$(".page-wrap, .site-footer").css({
			"position" : "relative",
			"float" : "none",
			"max-width" : "1000px",
			"margin-left" : "auto",
			"margin-right" : "auto"
		});
		$("#inskinanchor").css({
			"margin-top" : "106px"
		});
		$("head").append("<style>#site-header, .mobile-nav-main-wrapper{margin-top: 1px !important;}</style>");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>.mobile-nav-main-wrapper{margin-left: -20px !important;} .page-wrap, #site-footer{margin: 0 !important;}</style>");
			$("head").append("<style>body:not(.page--pages):not(.page--post) .grid-container{margin: 0 .5rem !important;} .site-footer__section{padding: 0 0 0 36px !important;}</style>");
			$("head").append("<style>#site-header.site-header .header-container{margin: 0 !important;}</style>");
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.InSkinBottomNav();
});

integration.custom.InSkinBottomNav = function() {
	var position = $(window).scrollTop();
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll > position && scroll > integration.custom.FrameTop) {
			//scrollDown
			$('div.mobile-nav-main-wrapper').removeClass('mobile-nav-main-wrapper__opened');
			$('div.mobile-nav-main-wrapper').addClass('mobile-nav-main-wrapper__closed');
			$('header').addClass('collapse');
		} else {
			//scrollUp
			$('div.mobile-nav-main-wrapper').removeClass('mobile-nav-main-wrapper__closed');
			$('div.mobile-nav-main-wrapper').addClass('mobile-nav-main-wrapper__opened');
			$('header').removeClass('collapse');
		}
		position = scroll;
	});
};

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "9"
	});
	$(".next-post-button").css({
		"z-index" : "8"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n googletag.pubads().definePassback('/175840252/90-min/Passback/1x1secondary', [[1,1]])\n.setTargeting('Passback', ['Inskin'])\n.setClickUrl('%%CLICK_URL_UNESC%%')\n.display();\n<\\script>";
};