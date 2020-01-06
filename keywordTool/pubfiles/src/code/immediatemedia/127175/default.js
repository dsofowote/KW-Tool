integration.meta = {
   'sectionID' : '127175',
   'siteName' : 'Radio Times - Desktop - (UK) NEW - TV Listings (temp)',
   'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '708050',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 980,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$('body').addClass('ad-inskin-active');
   	$(".ad-banner-container").css({
		   "display" : "none"
	   });
	   
	$(".site-header, .site-footer").css({
		"margin" : "0 auto",
		"max-width" : "960px",
	});

    window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};

   }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<!-- PassBack for InSkin - 'tracking.immediate.co.uk/radiotimes-passback' ### Size: [[970,250],[728,90]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/176986657/tracking.immediate.co.uk/radiotimes-passback', [[970,250],[728,90]])\n                    .setTargeting('pos', ['%%PATTERN:pos%%'])\n                    .setTargeting('thirdparty', ['inskin'])\n                    .display();\n<\\script>\n<!-- End -->";
};

