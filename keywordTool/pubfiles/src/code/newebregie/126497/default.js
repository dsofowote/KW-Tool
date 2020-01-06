integration.meta = {
   'sectionID' : '126497',
   'siteName' : 'Les Numeriques - Desktop - (FR)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706964',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1280,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('head').append('<style type="text/css">#to-the-top {display:none !important;}</style>');
	   $('body > footer').css({
		  'width' : '1280px', 
		  'margin' : '0 auto'
	   });
   }
});
