integration.meta = {
	'sectionID' : '126882',
	'siteName' : 'Men\'s Health - (CREATIVE APPROVAL) - Desktop - (SG)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1320]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708024',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1060,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("iframe.sphmmn_bar").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("iframe.sphmmn_bar");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -38,
								plr_StartScrollOnAnchor : true
            });
        }

		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$("#footer").css({
			"position" : "relative",
			"width" : "1060px",
			"margin" : "0 auto"
		});
	}
});

integration.on("layoutChange", function(e) {
	$('.ism-frame').parent().css({
		"z-index" : "9999"
	});
	$('.navbar-default').css({
		"z-index" : "99999"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 2050 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 984) / 2;
		/* content width divided by 2 */
		$("head").append('<style>#ts-back-to-top{right: ' + (sideWidth - 30) + 'px !important;}</style>');
		$(".simple-ad-widget-area").css({
			"right" : sideWidth + 30
		});
	} else {
		$(".simple-ad-widget-area").css({
			"right" : "100px"
		});
	}
}
