integration.meta = {
	'sectionID' : '125764',
	'siteName' : 'You and Your Wedding',

	'platform' : 'desktop',
	'restrictions' : ''
};




integration.testParams = {
	'desktop_resolution' : [1220]
};

integration.flaggedTests = [];

integration.params = {

  'mf_siteId': '706617',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '[id^=div-gpt-ad]',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('ad-inskin-active');
		$(".site-header__eyebrow, .site-header__nav, #site-footer, .site-header__inner").css({
			"max-width" : "960px",
			"margin" : "0 auto"
		});
		$(".site-header__nav").css({
			"left" : "0",
			"right" : "0"
		});
		$(".ad-leaderboard-container").hide();
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<!-- PassBack for InSkin - 'tracking.immediate.co.uk/youandyourwedding-passback' ### Size: [[970,250],[728,90]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/176986657/tracking.immediate.co.uk/youandyourwedding-passback', [[970,250],[728,90]])\n                    .setTargeting('pos', ['%%PATTERN:pos%%'])\n                    .setTargeting('thirdparty', ['inskin'])\n                    .display();\n<\\script>\n<!-- End -->";
};
