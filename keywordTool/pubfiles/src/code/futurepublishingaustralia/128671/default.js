integration.meta = {
    'sectionID' : '128671',
    'siteName' : 'Tom\'s Hardware   - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1029509',
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
        var windowWidth = $(window).width();
        if ($(".page.header-container.z-layer-8").length == 1) {
                    $("<div id='inskinanchor'></div>").insertAfter(".page.header-container.z-layer-8");
                    integration.base.setCfg({
                        plr_AnchorParent : "#inskinanchor",

                    });
		}

        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .page.header-container.z-layer-8{min-width:' + windowWidth + 'px}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

