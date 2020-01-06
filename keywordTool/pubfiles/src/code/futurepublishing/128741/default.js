integration.meta = {
    'sectionID' : '128741',
    'siteName' : ' Live Science - Desktop - (INTL excl UK)  ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1033646',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1020,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.custom.InSkinTopNav = function() {
	var width = $(window).width();
	if (width > 1020) {
		$(".fixed-bar").css({
			"margin-left" : "-515px",
			"left" : "50%",
			"min-width" : "1020px",
			"width" : "1020"
		});
	} else if (width < 1020) {
		$(".fixed-bar").css({
			"margin-left" : "0",
			"left" : "0",
			"min-width" : "1020px",
			"width" : "100%"
		});
	}
}

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel();
		$(".center_the_header, .footer-cont, .fixed-bar").css({
			'min-width' : '1020px',
			'width' : '1020px'
		});
		$(".footer-cont").css({
			"margin" : "0px auto",
			"float" : "none"
		});
		$(".site-wrapper").css({
			"max-width" : "1020px",
			"margin" : "0 auto",
			"min-width" : "0"
		});
		integration.custom.InSkinTopNav();
		$(window).resize(function() {
			integration.custom.InSkinTopNav();
		});
	}
});

/**** Raise Z-index of PageSkin ****/
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10006"
	});
});
