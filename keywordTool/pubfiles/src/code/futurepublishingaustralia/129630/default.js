integration.meta = {
    'sectionID' : '129630',
    'siteName' : 'Live Science - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086240',
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
        if ($(".primary-nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".primary-nav");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
                'plr_PageHeightAdjustment' : -60,
                'plr_ScrollAdjustment' : -60
			});
        }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .primary-nav {width: calc(100% + 74px); z-index: 10000}';
        stylesCSS += '.inskinLoaded .c011 {width: 80vw !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    $(".ism-anchor").css({"z-index" : "9999"});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

