integration.meta = {
    'sectionID' : '129328',
    'siteName' : 'Momtastic - Smartphone - (INT)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072373',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        integration.custom.PageSkinFrameSide = e.data.plr_FrameSideRight;
        integration.custom.PageSkinBottomSide = e.data.plr_FrameBottom;
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded header{z-index: 3}';
        stylesCSS += '.inskinLoaded .scrollup{right: ' + integration.custom.PageSkinFrameSide + 'px !important; bottom: ' + integration.custom.PageSkinBottomSide + 'px !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adServed', function(e) {
  var headHeight = $('header').height();
	$(".ism-anchor").css({
		"top" : headHeight,
	});
		integration.base.setCfg({
			plr_PageHeightAdjustment : -headHeight
		});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
