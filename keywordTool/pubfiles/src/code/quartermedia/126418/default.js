integration.meta = {
	'sectionID' : '126418',
	'siteName' : 'Gartenlexikon - Tablet - (DE)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706910',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 968,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#qmdfp").css({
			"height" : "0px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("body > .container").css({
				"margin-left" : "0px"
			});
		}
	}
});

/**** Constrain Bottom Navigation within PageSkin ****/
integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
	$("#relatedarticleflyoutbx").css({
		"right" : integration.custom.PageSkinRightPanel
	});
});

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight;
		$("#relatedarticleflyoutbx").css({
			"margin-bottom" : footermargin + "px"
		});
	} else {
		$("#relatedarticleflyoutbx").css({
			"margin-bottom" : "0"
		});
	}
}
