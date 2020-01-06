integration.meta = {
	'sectionID' : '127045',
	'siteName' : 'PC Mag - (Creative Approval) - Desktop - ( ID MY PH SG TH )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1330]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707458',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1070,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 1
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('div#_cm-css-reset').addClass('override');
		$('header, footer').css({
			"max-width" : "1070px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0",
			"position" : "relative"
		});
		$(window).scroll(function() {
			if ($(window).scrollTop() > $('.ism-frame').parent().height()) {
				$('header').css({
					"position" : "fixed",
					"top" : "0"
				});
			} else {
				$('header').css({
					"position" : "relative",
					"top" : "auto"
				});
			}
		});
	}
});

integration.on("layoutChange", function(e) {
	var width = $(window).width();
	var sideWidth = (width - 984) / 2;
	$("#share_container .share_menu.vertical.left").css({
		"left" : sideWidth - 43
	});
});
