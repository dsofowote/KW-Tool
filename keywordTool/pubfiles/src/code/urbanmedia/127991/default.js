integration.meta = {
	'sectionID' : '127991',
	'siteName' : 'Potsdamer Neueste Nachrichten - Smartphone - (DE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '965099',
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
		stylesCSS += '@media screen and (max-width: 320px) {.inskinLoaded .um-top-search > input[type="text"]{width: 100px !important;}}';
		stylesCSS += '.inskinLoaded .um-gallery-stage li .um-landscape img{height: 100% !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

