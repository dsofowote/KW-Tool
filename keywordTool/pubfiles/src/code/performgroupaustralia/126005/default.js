integration.meta = {
	'sectionID' : '126005',
	'siteName' : 'Soccerway Australia',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1300]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '706628',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1040,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".banner-content, #site-header, #ft").css({
			"max-width" : "1040px",
			"margin" : "0 auto"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/67970281/DISPLAY_OWNED_PASSBACKS_GBL/Soccerway', [728, 90]).setTargeting('Display_Passback', ['InSkin']).display();\n<\\script>";
};