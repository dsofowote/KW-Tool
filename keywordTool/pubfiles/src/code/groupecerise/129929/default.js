integration.meta = {
    'sectionID' : '129929',
    'siteName' : 'Gentside - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1300]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1097620',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
    var width = $(window).width();
    var sideWidth = (width - 984) / 2;
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		if (integration.custom.isSuper) {
			var width = $(window).width();
			var sideWidth = (width - 984) / 2;
			$(".invite-popin").css({
				"left" : sideWidth + 20
			});
		}
		if ($(".header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -64
			});
		}
		$("head").append("<style>.mdc-toolbar--fix{margin-top: 0 !important;}</style>");
		$('.wrapper, .footer').css({
			"max-width" : "980px",
			"margin" : "0 auto"
		});
		$('#inskinanchor').css({
			"position" : "relative",
			"margin-top" : 64
		});
    $(".player-container .player.active.desktop-companion").css({
      "right" : sideWidth + 5
    });
	}
});

integration.on('adServed', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 500);
});
