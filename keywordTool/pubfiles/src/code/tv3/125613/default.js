integration.meta = {
	'sectionID' : '125613',
	'siteName' : 'Xpose',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1250]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707336',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 990,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".navbar").css({
			"max-width" : "990px",
			"margin" : "0 auto"
		});
		$(".navbar-right").css({
			"margin-right" : "0"
		});
		$(".footer").css({
			"position" : "relative",
			"max-width" : "990px",
			"margin" : "0 auto"
		});
		integration._addPixel();
		$("body").css({
			"margin-bottom" : "0"
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10010"
	});
});

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
	if (height < integration.custom.PageSkinTopPanel && width < 990) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$(".navbar").css({
			"top" : newheight
		});
	} else {
		$(".navbar").css({
			"top" : "0px"
		});
	}
}