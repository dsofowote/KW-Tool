integration.meta = {
    'sectionID' : '129305',
    'siteName' : 'The Fashion Spot - Smartphone - (INT)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072216',
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
        var stylesCSS = '<style type="text/css">';
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
      	var windowWidth = $(window).width();
      	var contentWidth = windowWidth - integration.custom.FrameSideRight;
        var headHeight = $('header').height();
        stylesCSS += '.inskinLoaded .wrapper, .Embed {max-width:' + contentWidth + 'px !important; min-width: 0px !important}';
        stylesCSS += '.inskinLoaded .scrollup{right:  ' + integration.custom.FrameSideRight + 'px !important; bottom: ' + integration.custom.PageSkinBottomPanel + 'px !important }';
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
    "z-index": 100
	});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
