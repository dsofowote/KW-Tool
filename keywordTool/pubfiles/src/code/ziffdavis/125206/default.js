integration.meta = {
	'sectionID' : '125206',
	'siteName' : 'PCMag - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1340]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '681725',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1080,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		integration.custom.floatingButtons();
		var hHeight = $('header').height();
		if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -hHeight - 15
			});
		}
		$("head").append("<style>#adkit_billboard{display: none !important;}</style>");
		$('#inskinanchor').css({
			"margin-top" : hHeight,
			"position" : "relative"
		});
		$('footer').css({
			"margin" : "0 auto",
			"width" : "1080px"
		});
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	var marginLeft = $('div.wrapper').css('margin-left');
	if (width < 1590 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		$("#share_container .share_menu.vertical.left").css({
			"left" : marginLeft
		});
	} else {
		$("#share_container .share_menu.vertical.left").css({
			"left" : "0px"
		});
	}
}; 