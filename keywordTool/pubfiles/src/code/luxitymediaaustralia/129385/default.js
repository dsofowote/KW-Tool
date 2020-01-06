integration.meta = {
    'sectionID' : '129385',
    'siteName' : 'Boss Hunting - (Pagelead) - Smartphone - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1075301',
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
        stylesCSS += '.inskinLoaded {}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('pagelead:layoutChange', function (e) {
	if (e.data.fixedTop == false) {
		integration.custom.pl_behaviour = "class";
    integration.custom.pl_class = ".is-visible";
    integration.custom.pl_indState1 = 50;
    integration.custom.pl_indState2 = 0;
    integration.custom.pl_closeState1 = 50;
    integration.custom.pl_closeState2 = 0;
	}
});

integration.on('adServed', function(e) {
	$(".ism-anchor").css({"z-index": "999"});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
