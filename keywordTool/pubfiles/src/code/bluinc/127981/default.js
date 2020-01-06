integration.meta = {
	'sectionID' : '127981',
	'siteName' : 'Female MY - (Unpublished until approval) - Desktop - ( MY )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '977916',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 970,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('.top-menu-area, .m-menu').css({
			"max-width" : "970px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});

	}
});

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
		$('.top-menu-area').css({
			"top" : newheight
		});
	} else {
		$('.top-menu-area').css({
			"top" : "0px"
		});
	}
}

integration.on("adServed", function(e) {
	$('.ism-frame').parent().css({
		"z-index" : "9999"
	});
	$('.shiftnav').css({
		"z-index" : "99999"
	});
});
