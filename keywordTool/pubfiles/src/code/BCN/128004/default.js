integration.meta = {
	'sectionID' : '128004',
	'siteName' : 'Bunte - Desktop - ( AT CH DE )',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '965574',
	'plr_PageAlignment' : 'left',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 0,
	"plr_PageHeightAdjustment" : -140,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		integration.custom.FrameSideLeft = e.data.plr_FrameSide;
		var headHeight = $("#header").height();
		var headHeight2 = $(".bi-main-header-container").height();
		$("head").append("<style>body{border: none !important;} .fe-cosmobar{padding: 15px 0 30px !important; width: 1210px; margin: 0;} footer, {width: 1210px; margin: 0;}</style>");
		$("head").append("<style>.fe-cosmobar .fe-container, main .fe-container, #footer .fe-container, .fe-headline-wrap{margin: 0 !important;} #header > .fe-container, .fe-nav-secondary > .fe-container{margin-left: " + integration.custom.FrameSideRight + "px !important;}</style>");
		$("head").append("<style>.bg-grey-dark .fe-container{margin-left: 0 !important;}</style>");
		$("head").append("<style>.bi-main-navigation-container.fixed, .bi-main-header-container.fixed{position:fixed;top:0px}</style>");
		$("head").append("<style>header, footer, .fe-container.fixed{width: 1200px !important;}</style>");
		$("head").append("<style>html:not([amp4ads]) body{margin-left: " + integration.custom.FrameSideLeft + "px !important;}</style>");
		$("head").append("<style>#top{margin-left: 85px;}</style>");
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_StartScrollOnAnchor" : true,
				"plr_PageHeightAdjustment" : -140,
				"plr_ScrollAdjustment" : 60
			});
		}

		$(".top-themes, footer.footer, main > .container-fluid, .top-themes > .container, .bg-grey-dark, #app, #moderatorBar, .navTabs").css({
			"max-width" : "1200px",
			"margin" : "0"
		});

		$("main").css({
			"margin-top" : headHeight
		});

		$("#app").css({
			"margin-top" : headHeight
		});

		$("main").css({
			"margin-left" : "0"
		});

	}
});

// integration.on('adServed', function(){
// 	var headHeight = $("#header").outerHeight();
// 	var headHeight2 = $(".bi-main-header-container").outerHeight();
//
// 	console.log(headHeight, headHeight2);
// 	if (headHeight != null){
// 		$(".ism-frame").parent().css({
// 			"top" : headHeight,
// 			"position" : "relative"
// 		});
// 	} else {
// 		$(".ism-frame").parent().css({
// 			"top" : headHeight2,
// 			"position" : "relative"
// 		});
// 	}
// });

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/40748507/stu_bun_desktop/inskin/fallback', [728, 90]).setTargeting('adkeyword', ['inskin_fallback']).display();<\\script>";
};
