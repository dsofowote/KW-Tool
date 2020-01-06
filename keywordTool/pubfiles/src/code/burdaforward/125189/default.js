integration.meta = {
	'sectionID' : '125189',
	'siteName' : 'Focus - Desktop - (INT)',
	'platform' : 'desktop'
};

integration.testParams = {
	"desktop_resolution" : [1326]
};

integration.params = {
	'mf_siteId' : '706388',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "centre",
	//'plr_FramePositionCSS' : 'margin: 0 auto;border-right: 160px solid transparent;',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1006,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	'plr_PageHeightAdjustment' : -111,
	'plr_FastInit' : true,
	'plr_ScrollAdjustment' : 45,
	'plr_ConsentString': "BOXVWosOXVWosAKABBENBxoAAAAiCAMgAUABYAFQALgAZABAADIAIgAR4AnACeAJYAhABgQ",
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		if ($("#main-navigation-v3").length == 1) {
			var headerHeight = $('.fol-stick').height();
			$("<div id='inskinanchor'></div>").insertAfter("#main-navigation-v3");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_StartScrollOnAnchor : true
			});
		}

		$('head').append('<style type="text/css">#top-banner {height: 0 !important;}</style>');
		$("#page-container, #breakingNewsContainer, #footerv2-frame, #footerv2-head, #special-header-v2").css({
			"width" : "1006px",
			"margin" : "0 auto"
		});
		$("#special-header-v2 .headframe .titlebg div.titlefrm").css({
			"left" : "10px"
		});
		document.getElementById('top-banner').style.removeProperty('height');
		$('head').append('<style type="text/css">#top-banner {height: 0 !important;}</style>');

	}
});

integration.on("adServed", function(e) {
	$('.ism-frame').parent().css({
		'z-index' : '9999'
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	integration.custom.socialButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
		integration.custom.socialButtons();
	});
});

integration.custom.socialButtons = function() {
	if ($("body.article").length == 1 && integration.custom.isSuper != true) {
		$('head').append('<style type="text/css">.fol-stick > #article-social{margin-left: -245px !important;}</style>');
	}
}
integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1350 || integration.custom.isSuper) {
		var sideWidth = (width - 984) / 2;
		$(".fol-service-center-menu").css({
			"left" : sideWidth - 11,
			"top" : "671px"
		});
	} else {
		$(".fol-service-center-menu").css({
			"left" : "0"
		});
	}
}
