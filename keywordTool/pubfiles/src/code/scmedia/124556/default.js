integration.meta = {
   'sectionID' : '124556',
   'siteName' : 'JMen - Tablet - (HK)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706527',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1060,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('body').css({
		  "min-width" : "initial"
	   });
	   var docScroll;
	   $(window).scroll(function(){
		   docScroll = $(window).scrollTop();
           if (docScroll >= 220) {
        	   integration.base.setCfg({
        		   "plr_StartScrollOnAnchor" : true,
            	   "plr_ScrollAdjustment" : 101,
               });
           } else {
        	   integration.base.setCfg({
        		   "plr_StartScrollOnAnchor" : true,
            	   "plr_ScrollAdjustment" : 0
               });
           }           
    	});
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
    	  $('body').css({
    		  "max-width" : "1060px"
    	   });
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});
