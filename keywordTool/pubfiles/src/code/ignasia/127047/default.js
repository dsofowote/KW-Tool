integration.meta = {
    'sectionID' : '127047',
    'siteName' : 'PC Mag - (Creative Approval) - Smartphone - ( ID MY PH SG TH VN )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707047',
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
				integration.custom.FrameBottom = e.data.plr_FrameBottom;
				stylesCSS += '.inskinLoaded #_evh-link {right: ' + integration.custom.FrameSideRight + 'px !important; bottom:' + integration.custom.FrameBottom + 'px !important}';
        stylesCSS += '.inskinLoaded {}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
	var headHeight = $('#main-top-nav').height() + $('.main-nav').height();
      $(".ism-frame").parent().css({"top" : headHeight});
			integration.base.setCfg({
						plr_PageHeightAdjustment : -headHeight
				})
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
