integration.meta = {
   'sectionID' : '127502',
   'siteName' : 'Evoke - (Publisher Bookings) - Smartphone - (IE)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	
	
	'mf_siteId' : '729383',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   }
});


integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("head").append("<style>.td-header-main-menu.td-affix{max-width: calc(100% - " + integration.custom.FrameSideRight + "px) !important;}</style>");
	$(".td-scroll-up").css({
		"right" : integration.custom.FrameSideRight + 5 
	});
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});
