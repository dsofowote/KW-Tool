integration.meta = {
   'sectionID' : '127649',
   'siteName' : 'Auto Express - Tablet- (INT)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '773200',
   'plr_PageAlignment' : 'left',
   'plr_ContentW': 1000,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	console.log(e);
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
      	console.log('edge fired');
      	$("div#page").css({
			  "margin-left" : "0px"
		  });
         /* Pageskin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});
