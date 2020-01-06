integration.meta = {
	'sectionID' : '127224',
	'siteName' : 'Health - Desktop - (US)',
	'platform' : 'desktop'
};


integration.testParams = {
	'desktop_resolution' : [1480]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707403',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1220,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($(".header-top").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header-top");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : 0
			});
			var navHeight = $(".header-top").height();
			$("#inskinanchor").css({
				"padding-top" : navHeight
			});
			$(".leaderboard-ad-unit").css({
				"max-width" : "1220px",
				"margin" : "0 auto"
			});
			$("body").css({
				"overflow" : "initial"
			});
			$("head").append("<style>.feed-interrupter{max-width: 1220px; margin: 0 auto; right: 0; left: 0;}</style>");
		}
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
	if ($(".channel-header").length == 1) {
		$(".channel-header").css({
			"margin-top" : integration.custom.PageSkinTopPanel
		});
	} else {
		$("body > .main-container").css({
			"margin-top" : integration.custom.PageSkinTopPanel
		});
	}

});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$(".leaderboard-ad-unit").css({
			"margin-top" : newheight
		});
	} else {
		$(".leaderboard-ad-unit").css({
			"margin-top" : "0px"
		});
	}
};
/* Passback Tag */
window.ISMPassback = function() {
   return inskinPassback();
};
