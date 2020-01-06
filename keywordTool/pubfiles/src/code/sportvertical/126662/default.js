integration.meta = {
   'sectionID' : '126662',
   'siteName' : 'Ligalive - Desktop - (INT)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1460]
};

integration.telemetry.setup({
'keywords': true,
'url': true,
'ad-served': true,
'base-ready': true,
'ad-call-response': true,
'ad-call': true,
'failed-test': true,
'impression': true,
'window-load': true,
'custom': true
});

integration.flaggedTests = [];

integration.params = {
   'plr_FastInit' : true, 
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1140,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('.body-wrapper, #fun-image-wrapper').css({
		   "max-width" : "1140px",
		   "margin" : "0 auto"
	   });
	   $('.gdlr-navigation-wrapper').css({
		   "max-width" : "1140px",
		   "width" : "100%",
		   "margin" : "0 auto",
		   "left" : "0",
		   "right" : "0"
	   });
	   $('head').append('<style>#fun-image-wrapper{left: auto !important;}</style>');
   }
});
