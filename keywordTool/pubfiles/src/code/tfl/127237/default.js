integration.meta = {
	'sectionID' : '127237',
	'siteName' : 'TFL - (SSL) - Smartphone - (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707623',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">'
		stylesCSS += '.inskinLoaded .top-banner-advert{display:none;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});
integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
});
