integration.meta = {
	'sectionID' : '126053',
	'siteName' : 'Rebanando',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '[id^=div-gpt-ad-]',
	'plr_HideElementsByClass' : ''
};

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
	$(window).resize(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	var width = $(window).width();
	if (width <= 733) {
		if (height < integration.custom.PageSkinTopPanel) {
			var newheight = integration.custom.PageSkinTopPanel - height;
			$("header").css({
				"margin-top" : newheight
			});
		} else {
			$("header").css({
				"margin-top" : "0px"
			});
		}
	} else {
		$("header").css({
			"margin-top" : "0px"
		});
	}
}