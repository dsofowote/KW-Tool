integration.meta = {
	'sectionID' : '126095',
	'siteName' : 'PCMagazine Desktop AU',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707854',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : 'adkit_billboard, gpt-mpu1, gpt-mpu2, gpt-footer',
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
	$("body > header").css({
		"max-width" : "1000px"
	});
	$("body > footer").css({
		"max-width" : "1000px",
		"margin" : "0 auto"
	});
	$(".ism-frame").parent().css({
		"z-index" : "100001"
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$("body > header").css({
			"margin-top" : newheight
		});
		var width = $(window).width();
		if (width < 1000) {
			$("body > #pcmlogo_mobile").css({
				"top" : newheight
			});
			$("body > header").css({
				"margin-left" : "0px",
				"left" : "0"
			});
		} else {
			$("body > header").css({
				"margin-left" : "-500px",
				"left" : "50%"
			});
			$("body > #pcmlogo_mobile").css({
				"top" : "0px"
			});
		}
	} else {
		var width = $(window).width();
		$("body > header").css({
			"margin-top" : "0px"
		});
		$("body > #pcmlogo_mobile").css({
			"top" : "0px"
		});
		var width = $(window).width();
		if (width < 1000) {
			$("body > header").css({
				"margin-left" : "0px",
				"left" : "0"
			});
		} else {
			$("body > header").css({
				"margin-left" : "-500px",
				"left" : "50%"
			});
		}
	}
}