integration.meta = {
	'sectionID' : '124442',
	'siteName' : 'Time Out London PageSkin',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1410]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706197',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1150,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : 'ad, ad-header'
};

integration.on("adCallResult", function (e) {
	if (e.data.hasSkin) {
		$("body").addClass("has_skin");
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1005"
	});
});

/**** Constrain Top Navigation within PageSkin ****/
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
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$(".sticky-placeholder > .sticky.fixed").css({
			"margin-top" : newheight
		});
	} else {
		$(".sticky-placeholder > .sticky.fixed").css({
			"margin-top" : "0px"
		});
	}
}
