integration.meta = {
	'sectionID' : '126627',
	'siteName' : 'Timeout - Smartphone - (SG) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707456',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".js-header-ad-wrapper").css({
			"display" : "none"
		});
	}
});

integration.on('layoutChange', function(e) {
	var frameright = e.data.plr_FrameSideRight;
	$("head").append("<style>.sticky-xs{width: calc(100% - " + frameright + "px) !important;}</style>");
	console.log("width" + frameright);
});




 
