integration.meta = {
	'sectionID' : '124842',
	'siteName' : 'Hardware Zone - Desktop - (SG)   ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1320]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706294',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1060,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 75,
	'plr_StartScrollOnAnchor' : true,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		//Footer named differently on two areas of the site
		$(".footer, #mainFooter, #vbfooter, footer, #footer").css({
			"max-width" : "1060px",
			"margin" : "0px auto"
		});
		$("body").css({
			"background-image" : "none",
			"background-color" : "white"
		});
		$('html').css({
			"overflow-y" : "initial"
		});
		$(".nav-header").css({
			"z-index" : "80003"
		});
		window.unloadPageskin = function () {
			try {
				integration.destroy();
			} catch (e) {}
		};
	}
});

integration.on('adServed', function(e) {
	var toptool = $('#floating-toolbar').height();
	$(".ism-frame").parent().css({
		"top" : toptool,
		"z-index" : "80002"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	var sideWidth = (width - 1060) / 2;
	$("#hwz_ad_notice_cont").css({
		"right" : sideWidth + 20
	});
	$("#back_to_top").css({
		"right" : sideWidth + 25
	});
}
