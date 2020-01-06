integration.meta = {
    'sectionID' : '129226',
    'siteName' : 'Brigitte - Smartphone - ( AT CH DE )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : []
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1066529',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true,
    'plr_CheckOptOut' : true,
    'plr_ConsentString' : 'BOfG0SiOfG0SiAKABBENBxoAAAAiCAKAAUABUADIAIAAZABEACPAE4ATwBLAEIA'
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
    window.unloadPageskin = function() {
        try {
            integration.destroy();
        } catch (e) {
        }
    };
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded body, html{overflow-y: visible !important}';
        stylesCSS += '.inskinLoaded #ad-placeholder-page-top, #mobile_10{display: none !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(2){z-index: 1 !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
  var headHeight = $('#toolbar-region').outerHeight() + $('#tab-navigation').outerHeight();
  $(".ism-frame").parent().css({"top" : headHeight});
  integration.base.setCfg({
		plr_PageHeightAdjustment : -headHeight,
	});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
