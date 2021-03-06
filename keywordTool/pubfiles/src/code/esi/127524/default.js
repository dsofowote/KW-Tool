integration.meta = {
	'sectionID' : '127524',
	'siteName' : 'The Independent - Smartphone - (INT ex US  UK  CAN)',
	'platform' : 'smartphone'
};




integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '734578',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
	 'plr_FastInit' : true
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
   return "<div data-glade data-ad-unit-path=\"/71347885/_main_independent_passback/in_ros/in_inskin\" height=\"50\" width=\"320\"></div><script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};
