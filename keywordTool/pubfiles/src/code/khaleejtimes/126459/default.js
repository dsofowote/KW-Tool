integration.meta = {
   'sectionID' : '126459',
   'siteName' : 'khaleej Times- Tablet - (UAE)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707059',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1000,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   if ($("body > div.logoarea").length == 1) {
		   $("<div id='inskinanchor'></div>").insertAfter("body > div.logoarea");
			   integration.base.setCfg({
			   plr_AnchorParent : "#inskinanchor",
			   plr_PageHeightAdjustment : -70,
		   });
	   }   
	   
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $('.container').css({
       	  'max-width' : 'calc(100% - 300px)' , 
       	  'padding-top': '0'
         }); 
         
         $('.logoarea').css({
       	  'top' : '0', 
       	  'left' : '0'
         }); 
         
         $('#inskinanchor').css({
       	  'margin-top': '70px'
         }); 
      }else{
          $('.container').css({
        	  'max-width' : 'calc(100% - 200px)' , 
        	  'margin': '0 auto', 
        	  'padding-top': '0'
          }); 
          
          $('.logoarea').css({
        	  'top' : '0'
          }); 
          
          $('#inskinanchor').css({
        	  'margin-top': '70px'
          }); 
      }
   }
});
