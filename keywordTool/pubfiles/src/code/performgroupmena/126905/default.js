integration.meta = {
	'sectionID' : '126905',
	'siteName' : 'cricbuzz MENA - Smartphone - (AE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [360]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707736',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #cbz-leaderboard-banner, .inskinLoaded #dfp-leaderboard{height:0px !important}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

