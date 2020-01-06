integration.meta = {
   'sectionID' : '127072',
   'siteName' : 'Soccorway - Desktop - (ASIA) ',
   'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707935',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1050,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("#site-header, #ft, .banner-content").css({
		   "max-width" : "1050px",
		   "margin" : "0 auto"
	   });
   }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/67970281/DISPLAY_OWNED_PASSBACKS_GBL/Soccerway', [728, 90]).setTargeting('Display_Passback', ['InSkin']).display();\n<\\script>";
};
