integration.meta = {
   'sectionID' : '126295',
   'siteName' : 'Travelbook (DE campaigns only) - Tablet - (INT)',
   
   'platform' : 'tablet',
   'restrictions' : ''
};

integration.telemetry.setup({       
   'url': true,             
   'ad-served': true,        
   'base-ready': true,      
   'ad-call-response': true, 
   'ad-call': true,          
   'failed-test': true,      
   'impression': true,       
   'custom': true           
});

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706858',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1020,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".layout-outer-wrapper").css({
			"padding-top" : "0px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			$(".layout-outer-wrapper").css({
				"margin-left" : "0px"
			});
		}

	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "5"
	});
});