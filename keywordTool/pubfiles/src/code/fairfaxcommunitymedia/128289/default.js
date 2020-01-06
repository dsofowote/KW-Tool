integration.meta = {
	'sectionID' : '128289',
	'siteName' : 'Fairfax Community Media Titles - (Template 1) - Smartphone- (AU) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1000350',
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
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var mpuLeft = $(".aside.aside--main").css("padding-left");
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .story__lead img{height: auto;}';
		stylesCSS += '.inskinLoaded .advertisement{margin-left: -' + mpuLeft + ';}';
		stylesCSS += '.inskinLoaded .nav--secondary__wrap.is-visible .nav--secondary, .inskinLoaded .nav--secondary__wrap.is-visible{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
