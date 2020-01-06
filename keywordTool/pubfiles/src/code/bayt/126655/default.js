integration.meta = {
   'sectionID' : '126655',
   'siteName' : 'Yalla Motors - Tablet - (GCC)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
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
	   $('#toast-container').css({
		   "display" : "none"
	   });	   
	   
	   if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
        /* PageSkin Edge specific changes */
        integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        $('.container').css({
  		   "max-width" : "980px",
  		   "margin-left" : "0"
  	   	});
	  }
   }
});
