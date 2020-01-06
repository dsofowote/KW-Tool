integration.meta = {
	'sectionID' : '124817',
	'siteName' : 'InGame - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1510]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707593',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1190,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_PageHeightAdjustment' : 20,
	'plr_ScrollAdjustment' : 20,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").css({
			"max-width" : "1190px",
			"margin" : "0 auto"
		});
		$("head").append("<style>.takeover--is-visible.takeover--is-responsive .takeover--1.takeover--is-visible{padding-top: 0 !important;}</style>");
		$("head").append("<style>#main > #content{padding-left: 0; padding-right: 0;}</style>");
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
		$("#navbar").removeClass('stuck');
	} else {
		$("#navbar").addClass('stuck');
	}
};

integration.on('adServed', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 150);
	$(".ism-frame").parent().css({
		"z-index" : "99"
	});
});

