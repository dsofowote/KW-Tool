integration.meta = {
   'sectionID' : '126594',
   'siteName' : 'Blog Her - Desktop - (INT)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1520]
};

integration.flaggedTests = [];

integration.params = {
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1260,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('head').append("<style>#main{margin-top: -1px !important;}</style>");
	   $('.sbfixed').css({
		   "position" : "relative !important"
	   });
	   $('body').css({
			"padding-top" : "77px"
	   });
	   $('#main, #footer, .filter-by-menu').css({
			"max-width" : "1260px",
			"margin" : "0 auto"
	   });
   }
});
