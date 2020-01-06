integration.meta = {
	'sectionID' : '127193',
	'siteName' : 'Evening Standard - Smartphone - (UK)',
	'platform' : 'smartphone'
};




integration.testParams = {
	'mobile_resolution' : [412]
};

integration.flaggedTests = [];

integration.params = {


	'mf_siteId' : '707860',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 2
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".ad-leaderboard").hide();

		$('.text-wrapper').css({
			'overflow' : 'visible'
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<div data-glade data-ad-unit-path=\"/71347885/_main_eveningstandard_passback/es_ros/es_inskin\" height=\"320\" width=\"50\"></div><script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};
