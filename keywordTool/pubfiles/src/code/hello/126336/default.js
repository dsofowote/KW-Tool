integration.meta = {
	'sectionID': '126336',
	'siteName': 'Hello - Smartphone - (UK)',
	'platform': 'smartphone'
};

integration.testParams = {
	'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '706822',
	'plr_FluidAnchor': true,
	'plr_Fluid': true,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	/*'plr_StartScrollOnAnchor' : true,
	 'plr_ScrollAdjustment' : 60,*/
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	"plr_Responsive": true,
	"plr_ShowCloseButton": true,
	'plr_FastInit': true,
	'plr_PageHeightAdjustment': -114
};
integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		var stylesCSS = '<style type="text/css">';
		if (e.data.format == "Pagelead Video" || e.data.format == "Pagelead Video") {
			var hh1 = $("#topBar").outerHeight();
			var hh2 = $("#secondaryBar").outerHeight();
			var headHeight = hh1 + hh2;
			integration.base.setCfg({
				'plr_PageHeightAdjustment': 0
			});
			if ($(".news-content").length >= 1) {
				if ($("body.scrollUp").length >= 1) {
					integration.custom.pl_initState = 0;
				} else if ($("body.scrollDown").length >= 1) {
					integration.custom.pl_initState = -headHeight + 20;
				} else {
					integration.custom.pl_initState = 30;
				}
			} else {
				if ($("body.scrollUp").length >= 1) {
					integration.custom.pl_initState = 0;
				} else if ($("body.scrollDown").length >= 1) {
					integration.custom.pl_initState = -headHeight;
				} else {
					integration.custom.pl_initState = 0;
				}
			}

			stylesCSS += '.pageskinServed {padding-top:105px !important;}';
			stylesCSS += '.ism-anchor .ism-frame .ism-open{margin-top:0px !important;}';
			stylesCSS += '.ism-anchor {margin-top:7px;}';
			stylesCSS += '.pageskinServed .col-md-2.copyright{left:0px !important;}';
			integration.custom.headHeight = $(".page-header-wildcat-nav > div").outerHeight();
			integration.custom.pl_behaviour = "class";
			integration.custom.pl_class = "body.scrollUp";
			if ($(".news-content").length >= 1) {
				integration.custom.pl_scrollState1 = 20;
				integration.custom.pl_scrollState2 = -headHeight + 20;
				integration.custom.pl_closeState1 = 20;
				integration.custom.pl_closeState2 = -headHeight + 20;
			} else {
				integration.custom.pl_scrollState1 = 0;
				integration.custom.pl_scrollState2 = -headHeight;
				integration.custom.pl_closeState1 = 0;
				integration.custom.pl_closeState2 = -headHeight;
			}
		} else {
			stylesCSS += '.pageskinServed body{overflow-x:visible;}';
			stylesCSS += '.pageskinServed #inskinanchor, .pageskinServed main.container{margin-top: 8px;}';
			stylesCSS += '#div-hola-slot-megabanner{display: none !important;}';
			stylesCSS += '.pageskinServed html{overflow-x:hidden}';
			stylesCSS += '@media screen and (max-width: 320px) {.pageskinServed footer#mainfooter .back-top{right: 20% !important;}}';
			stylesCSS += '.pageskinServed footer#mainfooter .back-top{right: 24% !important;}';
			stylesCSS += '.pageskinServed .AR_1.ob-widget{min-width: 0 !important}';
			stylesCSS += '.pageskinServed #top-banner{height:0}';
		}
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
		$("body").addClass("pageskinServed");

	}
});
integration.on('adClose', function (e) {
	$("body").removeClass("pageskinServed");
});

integration.on('layoutChange', function (e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
	integration.custom.laychange();
	$(window).on('resize', function () {
		integration.custom.laychange();
	});
	$("head").append("<style>.pageskinServed .ob-widget-section{width: calc(100% - " + integration.custom.FrameSideRight + "px);}</style>");
	$("head").append("<style>.pageskinServed .row.new.related{margin-right:0px;}</style>");
	$("head").append("<style>.pageskinServed div[id*='google_ads_iframe']{margin-left: -8px !important;}</style>");
	integration.custom.InSkinBottomNav();
	$(document).scroll(function () {
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.InSkinBottomNav = function () {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = integration.custom.PageSkinBottomPanel;
		$("head").append("<style>.pageskinServed .news-share{margin-bottom: " + footermargin + "px;}</style>");
	} else {
		$("head").append("<style>.pageskinServed .news-share{margin-bottom: 0px;}</style>");
	}
}

integration.custom.laychange = function () {
	var wwidth = $(window).width();
	var cont = wwidth - integration.custom.FrameSideRight;
	$("head").append("<style>.pageskinServed #all{max-width: " + cont + "px;}</style>");
	$("head").append("<style>.pageskinServed .news-share{max-width: " + cont + "px;}</style>");
	$("head").append("<style>.pageskinServed #secondaryBar{max-width: " + wwidth + "px;}</style>");
}

integration.on('pagelead:layoutChange', function (e) {
	var hh1 = $("#topBar").outerHeight();
	var hh2 = $("#secondaryBar").outerHeight();
	var headHeight = hh1 + hh2;
	var formatHeight = $(".ism-anchor").outerHeight();

	$(document).on('scroll', function () {
		var scrollTop = $(document).scrollTop();
		if (scrollTop > formatHeight) {
			integration.custom.pl_behaviour = "class";
		} else {
			integration.custom.pl_behaviour = "n/a";
			integration.custom.headHeight = 20;
			integration.custom.indicatorPos = 20;
			integration.custom.closePos = 20;
		}
	});

	if ($(".news-content").length >= 1) {
		integration.custom.pl_indState1 = 20;
		integration.custom.pl_indState2 = -headHeight + 20;
		integration.custom.pl_closeState1 = 20;
		integration.custom.pl_closeState2 = -headHeight + 20;

		if ($("body.scrollUp").length >= 1) {
			integration.custom.headHeight = 20;
			integration.custom.indicatorPos = 20;
			integration.custom.closePos = 20;
		} else {
			integration.custom.headHeight = -headHeight + 20;;
			integration.custom.indicatorPos = -headHeight + 20;;
			integration.custom.closePos = -headHeight + 20;;
		}
	} else {
		integration.custom.pl_indState1 = 0;
		integration.custom.pl_indState2 = -headHeight;
		integration.custom.pl_closeState1 = 0;
		integration.custom.pl_closeState2 = -headHeight;

		if ($("body.scrollUp").length >= 1) {
			integration.custom.headHeight = 0;
			integration.custom.indicatorPos = 0;
			integration.custom.closePos = 0;
		} else {
			integration.custom.headHeight = -headHeight;
			integration.custom.indicatorPos = -headHeight;
			integration.custom.closePos = -headHeight;
		}
	}
});

/* Passback Tag */
window.ISMPassback = function () {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/87824813/Hellomagazine/passback/inskin', [[320, 50], [320, 100]]).display();\n<\\script>";
};