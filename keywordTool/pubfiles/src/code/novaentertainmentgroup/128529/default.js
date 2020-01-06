integration.meta = {
    'sectionID' : '128529',
    'siteName' : 'Nova Entertainment Network - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1020904',
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
				integration.custom.indicatorPos = $('.header-bottom').height();
				integration.custom.closePos = $('.header-bottom').height();
				stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index: 52 !important}';
				stylesCSS += '.inskinLoaded .off-canvas-menu{top: 0px}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});


    }
});

integration.on('pagelead:layoutChange', function (e) {
        //This IF statement can be used to make changes related to when Pagelead is not fixed
	if (e.data.fixedTop == false) {
        //Stops all scrolling behaviours once Pagelead is no longer fixed
		integration.custom.pl_behaviour = "n/a";
		newValue = '.inskinLoaded .ism-close{margin-top:0px !important;}';
		$("#inskinPL").html(newValue);
	}
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
