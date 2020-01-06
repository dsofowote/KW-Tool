integration.meta = {
   'sectionID' : '126829',
   'siteName' : 'Irish Independent Regionals - Desktop - (IE)',
   'platform' : 'desktop'
};

integration.telemetry.setup({
	'url': true,
	'base-ready': true,
	'ad-call-response': true,
	'ad-call': true,
	'window-load': true,
});

integration.testParams = {
   'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707116',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 970,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('#root, body > div.outer-wrap > nav').css({
		  'width' : '970px', 
		  'margin' : '0 auto'
	   }); 
   }
});

