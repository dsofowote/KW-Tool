integration.meta = {
   'sectionID' : '127153',
   'siteName' : 'Viral Cham - Desktop - (Asia)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1310]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708086',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1050,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   
		integration._addPixel();
	   
	   if ($("#page-content-wrapper > div.menu-container").length == 1) {
           $("<div id='inskinanchor'></div>").insertAfter("#page-content-wrapper > div.menu-container");
           integration.base.setCfg({
               plr_AnchorParent : "#inskinanchor",
               plr_PageHeightAdjustment : -68,
           });
       }
	   
	   $('#page-inner-wrap, #page-wrap').css({
		  'overflow' : 'visible', 
		  'height' : 'auto'
	   });
	   
	   $('#page-content-wrapper > div.footer').css({
		  'max-width' : '1050px', 
		  'margin' : '0 auto'
	   }); 

   }
});
