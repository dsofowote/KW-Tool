integration.meta = {
	'sectionID' : '125846',
	'siteName' : 'Oriental Sunday - Desktop - (HK)',
	'platform' : 'desktop'
};

//for escaping iframe
function setWindow() {
	return currentWindow.top;
  }

integration.testParams = {
	'desktop_resolution' : [1530]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707495',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1270,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
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
	$(document).on("scroll resize", function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var windowWidth = $(window).width();
	if (windowWidth < 900) {
		var height = $(document).scrollTop();
		if (height < integration.custom.PageSkinTopPanel) {
			var newheight = integration.custom.PageSkinTopPanel - height;
			$(".post-header").css({
				"margin-top" : newheight
			});
		} else {
			$(".post-header").css({
				"margin-top" : "0px"
			});
		}
	}
};
