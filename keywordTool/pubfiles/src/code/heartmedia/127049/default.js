integration.meta = {
   'sectionID' : '127049',
   'siteName' : 'Mens Folio - Tablet - (SG)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708138',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : 0,
	'plr_GetContentHeightVersion' : 2,
	'plr_EnableActiveResize' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var wwidth = $(window).width();
		var sides = (wwidth - 980)/2
		console.log(sides);
	/*	$(".wrapper-main, .main, .main-content, .right-bar, .post-content, .feature-block, .feature-block-content, footer, .footer-content").css({
			"float" : "none"
		});
		$(".main-content").css({
			"max-width" : "60%"
		});
		$(".right-bar").css({
			"max-width" : "40%"
		}); 
		
		$("footer").css({
			"max-width" : "980px",
			"margin-left" : sides
		});*/
	}
});

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});
