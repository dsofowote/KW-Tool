integration.meta = {
   'sectionID' : '126123',
   'siteName' : 'Lauterbacher Anzeiger Tablet',
   
   'platform' : 'tablet',
   'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706831',
   'plr_PageAlignment' : 'left',
   'plr_ContentW': 1024,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("#skyscraper, #supersize").hide();
   	$("#page, #service, #footer").css({
   		"max-width" : "1024px",
   		"padding" : "0px 0px 0px 0px",
   		"margin-left" : "0px"
   	});
   	$("#service > .wrapper, #footer > .wrapper").css({
   		"padding-right" : "0px"
   	});
   	$("head").append("<style>#page{padding-top: 0px !important;}</style>");
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});