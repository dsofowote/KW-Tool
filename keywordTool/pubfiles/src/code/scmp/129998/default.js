integration.meta = {
    'sectionID' : '129998',
    'siteName' : 'South China Morning Post - Smartphone - (HK) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1098968',
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
        stylesCSS += '.inskinLoaded #app{height: auto !important; overflow: visible !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($(".home-page ").length == 1) {
            if ($("#mobile-head").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter("#mobile-head");
                integration.base.setCfg({
                    plr_AnchorParent : "#inskinanchor",
                });
            };
            integration.on("adServed", function(e) {
                var headHeight = $('#mobile-head').height();
                  $(".ism-frame").parent().css({"top" : headHeight, "z-index":"2"});
                        integration.base.setCfg({
                                    plr_PageHeightAdjustment : -headHeight
                            })
            });

        };

        if ($("#main-content").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore("#main-content");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
            });
        };

        window.unloadPageskin = function () {
			try {
			  integration.destroy();
			} catch (e) {}
		  };

    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
