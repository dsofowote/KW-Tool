integration.meta = {
   'sectionID' : '126121',
   'siteName' : 'Oberhessische Zeitung Tablet',
   
   'platform' : 'tablet',
   'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706846',
   'plr_PageAlignment' : 'left',
   'plr_ContentW': 1100,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("#supersize, #skyscraper").hide();
   	$("#page").css({
   		"padding" : "0",
   		"margin" : "0"
   	});
   	$("head").append("<style>#page{padding-top: 0 !important}</style>");
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});