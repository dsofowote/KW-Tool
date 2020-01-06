integration.meta = {
	'sectionID' : '126568',
	'siteName' : 'The Independent - Smartphone - (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [
   '/news/uk',
   '/',
   '/news/world',
   '/voices',
   '/news/uk/politics',
   '/topic/brexit',
   '/news/world/americas',
   '/arts-entertainment/tv',
   '/news/science',
   '/sport/rugby/rugby-union',
   '/arts-entertainment/music',
   '/sport/football',
   '/news/world/americas',
   '/video'
];


integration.params = {
	'mf_siteId' : '708095',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".ad-leaderboard").hide();
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded [id*="mpu"], .inskinLoaded .onscroll-injected-ad > div{margin-left: -20px !important;}}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
