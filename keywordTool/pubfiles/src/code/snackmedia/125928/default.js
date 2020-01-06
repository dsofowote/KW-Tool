integration.meta = {
	'sectionID': '125928',
	'siteName': 'NFL.com - Desktop - (UK)',
	'platform': 'desktop'
};

integration.testParams = {
	'desktop_resolution': [1245]
};

integration.flaggedTests = [];

function setWindow() {
 return currentWindow.top;
}

integration.params = {
	'mf_siteId': '681781',
	'plr_PageAlignment': 'center',
	'plr_ContentW': 985,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	'plr_PageHeightAdjustment': -112,
	'plr_StartScrollOnAnchor': true,
	'plr_FastInit': true,
	'plr_CheckOptOut': true,
  	'plr_ForceFrameBottom' : 0,
	'plr_ConsentString': "BOWPib9OWPib9AKABBENBxoAAAAiBzP0f62Op96z0v7FFmhGGgaMKfqbQgIMAEsvQATy5kgAfqE4wDBAycRDE0JCMERAKABABMgYoiEAkgiEghQAg5AKABgQ",
	'plr_PageScanExclude' : ' #hd, #col2, #content-35237387, #page-footer '
}

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		if ($("#main-content").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore("#main-content");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
								plr_ScrollAdjustment: 240,
            });
        }
		$("body").append("<style>.rmq-a944b75d, .rmq-4b621a01, .rmq-10cf9dfd{padding-top: 0px !important;}</style>");
		// $("body").append("<style>.rmq-e850e4f9{padding-top: 0px !important; margin-top: 152px !important;}</style>");
		if (integration.params.plr_CachedISAPResponse.PageSkinAd.settings.swFixedSides) {
			$("head").append("<style>.page-header-transition-manager-container > div:nth-of-type(1),.page-header-transition-manager-container > div:nth-of-type(2){position:fixed !important}</style>");
			integration.base.setCfg({
				"plr_AnchorFixedSides": true
			});
			var hh1 = $(".links-container").outerHeight();
			var hh2 = $(".page-header-wildcat-nav > div").outerHeight();
			var hh = hh1+hh2;
			// $(document).scroll(function () {
			// 	var scrollTop = $(document).scrollTop();
			// 	var a = $(".page-header-transition-manager-container > div:eq(1)").css("transform");
			// 	if (scrollTop < (hh1+hh2)){
			// 		integration.base.setCfg({
			// 			"plr_ScrollAdjustment": "0px"
			// 		});
			// 	}else if (a !== "matrix(1, 0, 0, 1, 0, -88)") {
			// 		integration.base.setCfg({
			// 			"plr_ScrollAdjustment": hh1 + hh2 + "px"
			// 		});
			// 	} else {
			// 		integration.base.setCfg({
			// 			"plr_ScrollAdjustment": hh1 + "px"
			// 		});
			// 	}
			// });
		}
	}
});

integration.on('adServed', function (e) {
	// var hh1 = $(".links-container").outerHeight();
	// var hh2 = $(".page-navigation").outerHeight();
	// var headerHeight = hh1 + hh2;
	//  $(".ism-frame").parent().css({
	// 		 "top" : "100px !important",
	// 		 "position" : "relative"
	//  });

	$("#hd").css({
		"margin-bottom": "0px"
	});

	$(".base.container, #page-footer").css({
		"max-width": "985px",
		"margin": "0 auto"
	});

	$("#page-footer ul.rsv-c0aa54bb li").css({
		"width": "5%"
	});
	$("body").append("<style>.rmq-e42d7359{max-width:985px; margin:0  !important;} .inskinLoaded .rmq-e850e4f9{padding-top: 0 !important;}</style>");

	$("#team-sites-header-bar").css({
		"max-width": "1000px",
		"margin": "0px auto"
	});

	// $('#page-top-ad').css({
	// 	'height': '0px',
	// 	'max-height': '0px'
	// });
});

integration.on("layoutChange", function (e) {

	$("body").addClass("inskinLoaded");
	$(".ism-frame").parent().addClass("inskinanchor");
	var totalHeight = 0;

	$(".page-header-transition-manager-container").children().each(function () {
		totalHeight = totalHeight + ($(this).outerHeight() - 16);
	});

	// var hh1 = $(".links-container").outerHeight();
	// var hh2 = $(".page-header-wildcat-nav > div").outerHeight();
	// var hh3 = $(".page-navigation").outerHeight();
	// var headerHeight = hh1 + hh2 + hh3;
	//
	var hh1 = $(".links-container").outerHeight();
	var hh2 = $(".page-navigation").outerHeight();
	var headerHeight = hh1 + hh2;

	$("head").append('<style>#inskinanchor{margin-top:' + headerHeight + 'px} #page-top-ad{display: none;}</style>');
	$("head").append('<style>.rsv-378dd4d0 > li{width: 5.2% !important;} .application-shell{position: relative;}</style>');
	$("head").append('<style>#content{width: 985px !important; margin: 0 auto;}</style>');
	$("head").append('<style>#wrap{width: 985px !important; margin: 0 auto;} .rsv-af50123d{margin: 0 !important;}</style>');
	$("head").append('<style>body{overflow: visible !important;} #content{margin-top: 150px !important;}.rmq-a944b75d{margin-top:-150px !important}</style>');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/6428571/NFL-Desktop1x1Passback', [1, 1]).display();\n<\\script>";
};
