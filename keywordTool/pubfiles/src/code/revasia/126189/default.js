integration.meta = {
	'sectionID' : '126189',
	'siteName' : 'Oh Bulan',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706926',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	//'plr_Responsive' : true,
	//'plr_Fluid' : true,
	//'plr_PageWidthAdjustment': 210,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		
		$("#content-container").css({
			"max-width" : "980px",
			"margin" : "0 auto"
		});
		
		$("#content center div").css({
			"margin-top" : "0px"
		});
				
		//$("head").append("<style>#header2 {position: static !important;}</style>");
		
		$("#header2").attr("style", "position: static !important;");
		$("body").attr("style", "width: auto !important;");

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#header, #header-main, #wrap, #footer, .footer-bottom, #content-container").css({
				"margin-left" : "0px"
			});
			$(".OUTBRAIN").css({
				"margin-left" : "10px"
			});
		}
	}
});
