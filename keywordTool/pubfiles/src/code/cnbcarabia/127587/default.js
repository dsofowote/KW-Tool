integration.meta = {
   'sectionID' : '127587',
   'siteName' : 'CNBC Arabia- Desktop - (MENA)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '759436',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1170,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $(window).scroll(function(){		   
		   var windowHeight = $(window).scrollTop() + $(window).height() - 100;
		   var docBottom = $(document).height() - 100;
		   if(windowHeight == docBottom) {
			   $('head').append("<style>.scroll-news{bottom: 100px !important;}</style>");
			   $('head').append("<style>.scroll-markets{bottom: 120px !important;}</style>");			   
		   }else{
			   $('head').append("<style>.scroll-news{bottom: 0 !important;}</style>");
			   $('head').append("<style>.scroll-markets{bottom: 20px !important;}</style>");
		   }
	   });
   }
});
