integration.meta = {
	'sectionID' : '127075',
	'siteName' : ' Realestate.com.au - Desktop - (AU)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707943',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_StartScrollOnAnchor" : true,
	'plr_PageHeightAdjustment' : -90
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("footer").css({
			"max-width" : "1100px",
			"margin" : "0 auto"
		});
		if ($(".category-panel.rui-clearfix").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".category-panel.rui-clearfix");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$(".posts-nav-link").css({
			"z-index" : "1"
		});
	}
});
integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons()
	})
});
integration.custom.floatingButtons = function() {
	if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
		var width = $(window).width();
		if (width > 0) {
			var sideWidth = (width - 1100) / 2;
			$(".posts-nav-link, .to-top").css({
				"right" : sideWidth
			})
		} else {
			$(".posts-nav-link, .to-top").css({
				"right" : "10px"
			})
		}
	}
}; 