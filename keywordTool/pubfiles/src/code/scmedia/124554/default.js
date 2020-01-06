integration.meta = {
   'sectionID' : '124554',
   'siteName' : 'Jessica - Tablet - ( HK )',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '706587',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1080,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('#header').css({
		    "max-width" : "1080px",
		    "margin" : "0 auto",
		    "left" : "0",
		    "right" : "0",
		    "top" : "0"
		});
	   $('#block-scmedia-social-share-buttons-social-share-buttons').hide();
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* Pageskin Edge specific changes */
    	  $('#page').css({
  		    "max-width" : "1080px",
  		    "margin" : "0",
  		    "left" : "0"
  		});
    	  $('#header').css({
    		  "margin" : "0",
    		    "left" : "20px"
    		});
    	  
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});

