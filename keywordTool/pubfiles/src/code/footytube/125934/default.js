integration.meta = {
	'sectionID' : '125934',
	'siteName' : 'Footytube',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").css({
			"margin-top" : "0"
		});
		$("#content-ng").css({
			"margin-top" : "58px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#content-ng, .footer-v2").css({
				"margin-left" : "10px"
			});
			$(".nav_bc").css({
				"margin-left" : "0"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000000"
	});
});

/**** Constrain Top Navigation within PageSkin ****/
integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$(".nav_bar").css({
			"margin-top" : newheight
		});
	} else {
		$(".nav_bar").css({
			"margin-top" : "0px"
		});
	}
}
