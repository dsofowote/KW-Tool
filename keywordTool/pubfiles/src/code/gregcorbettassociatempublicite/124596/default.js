integration.meta = {
	"sectionID": "124596",
	"siteName": "Le Monde",
	"publisher": "mpublicite",
	"platform": "desktop"
};

integration.testParams = {
	"desktop_resolution": [0]
};

integration.params = {
	'mf_siteId': '706308',
	"plr_UseCreativeSettings": true,
	"plr_UseFullVersion": true,
	"plr_ContentType": "PAGESKINEXPRESS",
	"plr_ContentW": 1000,
	"plr_PageAlignment": "center",
	//"plr_FramePositionCSS" : "left: 50%; margin-left: -500px; position:absolute",
	"plr_HideElementsByID": "",
	"plr_HideElementsByClass": "advert-stock, bloc_part",
	'plr_BarneyThresholdClicks': 4,
	'plr_BarneyThresholdRate': 1,
	'plr_StartScrollOnAnchor': true
};

integration.on("adCallResult", function (e) {
	if (e.data.hasSkin) {
		$(".appel_ie9").hide();
		if ($("#en-continu").length >= 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#en-continu");
			integration.base.setCfg({
				'plr_AnchorParent': "#inskinanchor"
			});
		} else if ($(".Nav").length == 1) {
			/* homepage */
			integration.custom.topHeight = 216;
			$("<div id='inskinanchor'></div>").insertBefore("main");
			integration.base.setCfg({
				'plr_AnchorParent': "#inskinanchor"
			});
		} else {
			/* all other pages */
			integration.custom.topHeight = 69;
			$("<div id='inskinanchor'></div>").insertAfter("#header-page");
			integration.base.setCfg({
				'plr_AnchorParent': "#inskinanchor"
			});

			$(".site-gratuit #header-page").css({
				"margin-bottom": "0px"
			});
		}
		// var newsBanner = $("#en-continu");
		// if (newsBanner.length == 1){
		// 	$("nav").append(newsBanner);
		// 	$("head").append("<style>#inskinanchor{margin-top:" + newsBanner.outerHeight() + "px !important;}</style>");
		// } 
		integration.base.setCfg({
			"plr_PageHeightAdjustment": -integration.custom.topHeight - 47
		});
		$("#bandeau_bas").css({
			"width": "1000px",
			"left": "50%",
			"margin-left": "-500px",
			"z-index": "10000"
		});
		$("nav").css({
			"z-index": "100001"
		});
		$("#Header").css({
			"z-index": "100002"
		});
		$("head").append("<style>#dfp-banniere_haute{display:none !important;}</style>");
	}
});

integration.on("layoutChange", function (e) {
	$(window).scroll(function () {
		if ($("div.fixed-header-show").length == 0) {
			integration.base.setCfg({
				"plr_ScrollAdjustment": 0
			});
		} else {
			integration.base.setCfg({
				"plr_ScrollAdjustment": 45
			});
		}
	});

	$(".banniere").css({
		"height": 0,
		"display": "block"
	});
	$("#en_ce_moment").css({
		"margin-top": "13px"
	});
});

integration.on("adServed", function (e) {
	$(".ism-frame").parent().css({
		"z-index": "100000"
	});
	$(".fixed-header, #header-page").css({
		"z-index": "999999"
	});
});