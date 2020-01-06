integration.meta = {
	'sectionID' : '127547',
	'siteName' : 'Gumtree- Smartphone- (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '743888',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
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
		var headHeight = $('.sticky-header').height();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var siteWidth = $(window).width() - integration.custom.FrameSideRight;
        stylesCSS += '.inskinLoaded .sticky-header{width: ' + siteWidth + 'px !important; left: -' + integration.custom.FrameSideRight  +'px !important}';
        stylesCSS += '</style>'
		$('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
