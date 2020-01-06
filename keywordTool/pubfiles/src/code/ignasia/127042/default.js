integration.meta = {
	'sectionID' : '127042',
	'siteName' : 'Ask Men - Desktop - (SEA) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [ 1360 ]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707928',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		$("#main").css({
			"padding-top" : "0"
		});

		$("#channelMenu").css({
			"max-width" : "1080px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0",
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100000"
	});
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
		$("#headerOuter").css({
			"position" : "relative",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0",
			"max-width" : "1080px"
		});
		$("#quickMenu").css({
			"position" : "inherit",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0",
			"max-width" : "1080px"
		});
	} else {
		$("#quickMenu, #headerOuter").css({
			"position" : "fixed",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0",
			"max-width" : "1080px"
		});
		$("#headerOuter").css({
			"top" : "0"
		});
	}
};
