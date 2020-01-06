integration.meta = {
	'sectionID' : '125815',
	'siteName' : 'Made For Mums',

	'platform' : 'desktop',
	'restrictions' : ''
};




integration.testParams = {
	'desktop_resolution' : [1252]
};

integration.flaggedTests = [];

integration.params = {

   'mf_siteId': '681747',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_URLKeywords" : 2,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('ad-inskin-active');
		$('head').append('<style> .fabric-page-footer {position : unset !important}</style>');
		$("#container, .site-footer").css({
			"margin" : "0 auto",
			"max-width" : "980px"
		});
		$(".top-banner").hide();
	}
});



/* Passback Tag */
window.ISMPassback = function() {
   return "<!-- PassBack for InSkin - 'tracking.immediate.co.uk/madeformums-passback' ### Size: [[970,250],[728,90]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/176986657/tracking.immediate.co.uk/madeformums-passback', [[970,250],[728,90]])\n                    .setTargeting('pos', ['%%PATTERN:pos%%'])\n                    .setTargeting('thirdparty', ['inskin'])\n                    .display();\n<\\script>\n<!-- End -->\n";
};
