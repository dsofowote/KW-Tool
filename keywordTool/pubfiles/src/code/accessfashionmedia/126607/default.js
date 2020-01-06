integration.meta = {
   'sectionID' : '126607',
   'siteName' : 'Access Runway - Tablet - (INT)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1150,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
     	   $('body > div.wrapper > div.footer-box > div > table').css({
 			  'width' : '1090px'
 		   });
 		   $('body > div.wrapper > div.footer-box, body > header.header.hidden-sm').css({
 			  'width' : '1100px', 
 			  'margin-left' : '0'
 		   });
 		  $('body > div.wrapper').css({
 			  'width' : '1150px', 
 			  'margin-left' : '0'
 		  });
      }else{
   	   $('body > div.wrapper > div.footer-box > div > table').css({
			  'max-width' : '1090px'
		   });
		   $('body > div.wrapper > div.footer-box, body > header.header.hidden-sm').css({
			  'max-width' : '1100px', 
			  'margin' : '0 auto'
		   });
      }

   }
});
