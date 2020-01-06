integration.meta = {
   'sectionID' : '126420',
   'siteName' : 'Gartenzeitung - Tablet - (DE)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 960,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	
   	$("#mainmenu, #footer, #promo").css({
			"max-width" : "960px",
			"margin" : "0 auto"
		});

		$("#header").css({
			"padding-top" : "0px"
		});

		$("section#content").css({
			"background-image" : "none",
			"z-index" : "0"
		});
		
		$("amzn_wdgt_t_8001_1").css({
			"width" : "250px"
		});

		$("#footer #copyright").css({
			"margin-bottom" : "0px"
		});

		$("#mainmenu.nav_fixed").css({
			"position" : "relative"
		});

		$("head").append("<style>section#content, #content:before{background-image:none !important;background:none !important}</style>");
		
		$("head").append("<style>#header:before{background-image:none !important;background:none !important}</style>");
		
   	
   	$("#offlajn-ajax-search208").css({
		   "width" : "100%"
	   });
	   
	  $("#__mobileAssociatesSearchWidget_adunit_0").css({
		  "width" : "100%"
	  });
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});
