integration.meta = {
	'sectionID' : '125758',
	'siteName' : 'Olive Magazine',
	
	'platform' : 'desktop',
	'restrictions' : ''
};
integration.testParams = {
	'desktop_resolution' : [1220]
};

integration.flaggedTests = [];

integration.params = {
	
  'mf_siteId': '681736',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	// 'plr_GetContentHeightVersion' : 2
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var unitSize = $(".ad-banner-container").outerHeight();
		var headerSize = $("header.site-header").outerHeight();
		var size = unitSize - headerSize
		if ($("header.site-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header.site-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -size - 120
			});
}
		// $('body').addClass('ad-inskin-active');
		$('footer').css({
			'width' : '980px',
			'margin' : '0 auto',
			"left" : "0",
			"right" : "0"
		});
		$(".fluid-container").css({
			"max-width" : "initial"
		});
		$('div.ad-banner-container.js-ad-banner-container').hide();
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<!-- PassBack for InSkin - 'tracking.immediate.co.uk/olivemagazine-passback' ### Size: [[970,250],[728,90]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/176986657/tracking.immediate.co.uk/olivemagazine-passback', [[970,250],[728,90]])\n                    .setTargeting('pos', ['%%PATTERN:pos%%'])\n                    .setTargeting('thirdparty', ['inskin'])\n                    .display();\n<\\script>\n<!-- End -->";
};

