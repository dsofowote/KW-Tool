integration.meta = {
	'sectionID' : '128210',
	'siteName' : 'Kidlander - (Creative Approval) - Desktop - ( SG )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1220]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '989608',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : -8
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".slide-modal").css({
			"z-index" : "99"
		});
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).scroll(function() {
		integration.custom.floatingButtons();
	});
});

integration.on("adServed", function(e) {
	$('.ism-frame').parent().css({
		'z-index' : '999'
	});

});
integration.custom.floatingButtons = function() {
	var width = $(window).width();
	var sideWidth = (width - 984) / 2;
	/* content width divided by 2 */
	$(".slide-modal").css({
		"right" : sideWidth + 20
	});
}