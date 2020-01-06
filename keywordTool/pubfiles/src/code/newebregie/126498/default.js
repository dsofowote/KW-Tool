integration.meta = {
   'sectionID' : '126498',
   'siteName' : 'Les Numeriques - Tablet - (FR)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706923',
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
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $('#comp-main-header').css({
        	'margin-left' : '-20px' 
         });
         $('div.content-v5, div.content-v4').css({
        	'margin-left' : '0px' 
         });
         $('body > footer, #content, #pub-banner').css({
        	'width' : '1280px', 
        	'margin-left' : '0px'
         });
         $('#to-the-top').css({
        	'margin-right' : '300px' 
         });
      }else{
          $('#to-the-top').css({
          	'margin-right' : '100px' 
           });
      }
   }
});

integration.on("layoutChange", function(e) {
	
    integration.custom.PageSkinLeft = e.data.plr_FrameSide;
    integration.custom.PageSkinRight = e.data.plr_FrameSideRight;
    
    $('.home-arrow-universe.mod-left').css({
    	'margin-left' : integration.custom.PageSkinLeft
    });

    $('.home-arrow-universe.mod-right').css({
    	'margin-right' : integration.custom.PageSkinRight
    });
    
});