integration.meta = {
	'sectionID' : '127195',
	'siteName' : 'Leggo - Smartphone - (IT)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707717',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 50
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded {overflow-x: visible;}';
		stylesCSS += '.inskinLoaded body#articolo {padding: 45px 0 0 0 !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .sharefix{max-width: calc(100% + ' + integration.custom.FrameSideRight + 'px);}';
	stylesCSS += '@media screen and (max-width: 320px) {.inskinLoaded .glyphs.css-mapping li{margin: 10px 5px 10px 0 !important;}}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
	if ($("div").hasClass("content_sez")) {
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded{margin-top: 10px;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}

});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});
