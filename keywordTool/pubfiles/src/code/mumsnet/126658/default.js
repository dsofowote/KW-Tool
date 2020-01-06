integration.meta = {
   'sectionID' : '126658',
   'siteName' : 'Mumsnet - Tablet - (UK)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '708046',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 990,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('head').append('<style type="text/css">.leaderboard__advertising {margin-top: 10px !important;}</style>');
	   $('.leaderboard__advertising').css({
		  "margin_top" : "10px !important" 
	   });
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
    	  $('body').css({
    		 "max-width" : "990px" 
    	  });
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});
