integration.meta = {
	'sectionID' : '128030',
	'siteName' : ' Australian Geographic - Desktop - (AU) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1220]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '970386',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("body header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -235,
			});
		}
		var headerHeight = $('.main-nav').height();
		$('#inskinanchor').css({
			"margin-top" : headerHeight
		});
		$("#content .landing-section").first().css({
			"display" : "none"
		});
		$('.main-footer, .footer-nav, .light-bg-wrapper, .medium-bg-wrapper').css({
			"width" : "960px",
			"margin" : "0 auto",
			"float" : "none"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n\t\t\tgoogletag.pubads().definePassback(\"/13534306/australiangeographic\", [728, 90]).display();\n\t\t<\\script>";
};
