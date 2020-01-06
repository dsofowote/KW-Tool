integration.meta = {
   'sectionID' : '126757',
   'siteName' : 'Chip - Tablet - (INT campaigns only)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1024,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinSidePanel = e.data.plr_FrameSideRight;
	$('.Feedback').css({
		"right" : integration.custom.PageSkinSidePanel
	});
	
});

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   
	   $('header, footer').css({
      	 "max-width" : "1024px",
      	 "margin" : "0 auto"
       });
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $('body').css({
        	 "max-width" : "1024px",
        	 "margin" : "0"
         });
      }
   }
});

/**** Raise Z-index of PageSkin ****/
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "800"
	});
});