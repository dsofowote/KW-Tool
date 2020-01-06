integration.meta = {
	'sectionID' : '128329',
	'siteName' : 'Asian Correspondent - Desktop- Asia',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1530]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '963517',
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
		$('#container').css({
			"max-width" : "1270px",
			"margin" : "0 auto"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.scroll();
	$(document).scroll(function() {
		integration.custom.scroll();
	});
});

integration.custom.scroll = function() {
	var headerHeight = $("#fixed-header").height();
	if ($("#fixed-header").length == 1) {
		if ($(window).scrollTop() != 0) {
			integration.base.setCfg({
				plr_ScrollAdjustment : headerHeight
			});
		} else {
			integration.base.setCfg({
				plr_ScrollAdjustment : 0
			});
		}
	}
};
