integration.meta = {
   'sectionID' : '127631',
   'siteName' : 'Daily Star - Smartphone - (Asia)',
   'platform' : 'smartphone'
};

/* Always disable the telemetry server & KW filters for Bauer or Northern and Shell Integrations */
integration.disableTelemetry = true;

integration.disableKWFilters = true;

integration.testParams = {
   'mobile_resolution' : [360]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '768488',
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
	integration.custom.laychange();
	$(window).on('resize', function(){
		integration.custom.laychange();
	});
});

integration.custom.laychange = function(){
	var windowWidth = $(window).width();
	var windowHeight = $(window).outerHeight();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;

	$(".row.page-content, header,").css({
		"min-width" : contentWidth,
		"max-width" : contentWidth
	});
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<!-- PassBack AdSlot 1 for Ad Unit 'ns-network/inskin_passback' ### Size: [[970,250]] --><script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/34722903/ns-network/inskin_passback', [[970,250]]).setClickUrl('%%CLICK_URL_UNESC%%').display();<\\script>";
};
