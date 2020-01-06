integration.meta = {
	'sectionID' : '128792',
	'siteName' : 'Football Fancast - Desktop - (Intl excl. UK) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1035073',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.billboard{display: none !important;}</style>");
		var width = $(window).width();
		var sideWidth = (width - 980) / 2;
		integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
		$(".full-width").css({
			"max-width" : "960px",
			"margin" : "0 auto"
		});
		$(".footer").css({
			"max-width" : "960px",
			"clear" : "both",
			"float" : "none",
			"margin" : "auto"
		});
		$(".sf_tab").css({
			"margin-left" : sideWidth
		});
		$("head").append("<style>.sf_unit.in {left:0 ; margin-left: 0 ;}</style>");
		$("head").append("<style>.sf_tab.in {left:0 ; margin-left:" + sideWidth + ";}</style>");
		$("head").append("<style>.wrapper.sf_in {left:0 ;}</style>");
		$('[src*="https://widgets.snack-projects.co.uk/tickers/5p0rtz/affiliateticker.html"]').wrap("<div class='frameWrapper'></div>");
		$("head").append("<style>.frameWrapper { z-index: 0!important; max-width:980px!important; position:fixed!important;}</style>");
	}
});

integration.on('adServed', function(e) {
	var headerHeight = ($(".header-inner").outerHeight());
	integration.base.setCfg({
		"plr_PageHeightAdjustment" : -headerHeight,
		"plr_GetContentHeightVersion" : 2
	})
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/6428571/InSkin-970x250', [[970, 250], [970, 90], [728, 90]]).display();\n<\\script>";
};

// IF you need below the navigation use next code:
// integration.on('adCallResult', function(e) {
//   if (e.data.hasSkin) {
//     integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
//     var headerHeight = $(".top-row").height() + $(".billboard").height();
//     var width = $(window).width();
//     var sideWidth = (width - 980)/2;
//     console.log(headerHeight);
//     $(".full-width").css({"max-width":"960px", "margin":"0 auto"});
//     $(".footer").css({"max-width":"960px", "clear": "both", "float": "none", "margin": "auto" });
//     $(".sf_tab").css({"margin-left":sideWidth});
//     $("head").append("<style>.sf_unit.in {left:0 ; margin-left: 0 ;}</style>");
//     $("head").append("<style>.sf_tab.in {left:0 ; margin-left:"+ sideWidth +";}</style>");
//     $("head").append("<style>.wrapper.sf_in {left:0 ;}</style>");
//     $("[src*='https://widgets.snack-projects.co.uk/tickers/5p0rtz/affiliateticker.html']").css({
//           "top" : - integration.custom.PageSkinBottomPanel - 40,
//           "max-width" : "980px",
//           "margin" : "0 auto",
//           "position" : "relative"
//     });
//     if ($(".header").length == 1) {
//           $("<div id='inskinanchor'></div>").insertAfter(".header"); /* use .main-content if no .google-ad-container*/
//                integration.base.setCfg({
//               'plr_AnchorParent' : "#inskinanchor",
//               'plr_ScrollAdjustment' : - headerHeight,
//               'plr_PageHeightAdjustment' : - headerHeight - 150
//          });
//       }
//   }
// });
