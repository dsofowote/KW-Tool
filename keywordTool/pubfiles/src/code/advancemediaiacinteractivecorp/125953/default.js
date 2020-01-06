integration.meta = {
	'sectionID' : '125953',
	'siteName' : 'The Daily Beast',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1145,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#layout").css({
			"max-width" : "1145px",
			"margin" : "0 auto"
		});
		$(".downward").css({
			"max-width" : "1145px",
			"margin-left" : "-572.5px",
			"left" : "50%",
			"position" : "absolute"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#layout").css({
				"margin-left" : "0"
			});
			$("html").css({
				"overflow-y" : "visible"
			});
		}
	}
});

/**** Constrain Top Navigation within PageSkin ****/
integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
	integration.custom.PageSkinLeftPanel = e.data.plr_FrameSide;
	$(".burger").css({
		"margin-right" : integration.custom.PageSkinRightPanel
	});
	$(".logo").css({
		"margin-top" : integration.custom.PageSkinTopPanel,
		"margin-left" : integration.custom.PageSkinLeftPanel
	});
	integration.custom.InSkinTopNav();
	$(window).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(window).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$(".burger").css({
			"margin-top" : newheight
		});
	} else {
		$(".burger").css({
			"margin-top" : "0"
		});
	}
}