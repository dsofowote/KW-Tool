integration.meta = {
    'sectionID' : '129910',
    'siteName' : 'Golem - Smartphone - (DE) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
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

integration.on("adServed", function(e) {
	var headHeight = $('header').height() ;
      $(".ism-frame").parent().css({"top" : headHeight, "z-index":"1"});
			integration.base.setCfg({
						plr_PageHeightAdjustment : -headHeight
				})
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
