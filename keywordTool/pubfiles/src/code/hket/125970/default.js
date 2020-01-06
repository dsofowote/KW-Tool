integration.meta = {
   'sectionID' : '125970',
   'siteName' : 'U Lifestyle - Tablet - (HK)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706668',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1190,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		   $("#sticker-sticky-wrapper").css({
				  "width" : "1190"
			   });
				   
		   $(".user-info-panel").css({
			  "margin-right" : "50px" 
		   });
		   
		   $("body > div.content-body").css({
			  "margin-left" : "-300px"  
		   });
		}
	   /* Add a spacer pixel to the bottom of the content (for content using float positioning) */
	   integration._addPixel();
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});
