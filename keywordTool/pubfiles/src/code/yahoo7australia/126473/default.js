integration.meta = {
	'sectionID': '126473',
	'siteName': 'Yahoo (Entertainment) - Desktop - (AU)',
	'platform': 'desktop'
};

integration.testParams = {
	'desktop_resolution': [1560]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice': 'desktop',
	'mf_siteId': '707062',
	'plr_PageAlignment': 'center',
	'plr_ContentW': 1300,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	'plr_URLKeywords': 2
};

integration.on("adCallResult", function (e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskin-present");
		var headHeight = $('[data-reactid="3"]').css("margin-top");
		$('#render-target-default').css({
			'margin-top': '20px',
			'position': 'relative'
		});

	}
});

// integration.on("layoutChange", function (e) {
// 	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
// 	//integration.custom.InSkinTopNav();
// 	$(document).scroll(function () {
// 		//integration.custom.InSkinTopNav();
// 	});
// });

// integration.custom.InSkinTopNav = function () {
// 	//????
// 	var height = $(document).scrollTop();
// 	if (height < integration.custom.PageSkinTopPanel) {
// 		var newheight = integration.custom.PageSkinTopPanel - height;
// 		$('#render-target-default').css({
// 			"margin-top": newheight
// 		});
// 	} else {
// 		$('#render-target-default').css({
// 			"margin-top": "0px"
// 		});
// 	}
// }

integration.on("adServed", function (e) {
	//var billboardHeight = ("#Billboard-ad").outerHeight();
	//Homepage - height of billboard to push side panel down by
	$("head").append('<style id="inskinCSS">.Col3{position:absolute !important;top:90px !important} .Col2{position:relative;}</style>');
	console.log("done?");
	var headHeight = $('[data-reactid="3"]').css("margin-top");
	$(".ism-frame").parent().css({
		"top": headHeight,
		"position": "relative"
	});
});