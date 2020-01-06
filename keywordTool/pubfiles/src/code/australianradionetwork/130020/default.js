integration.meta = {
    'sectionID' : '130020',
    'siteName' : 'The Roar - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1099531',
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
        var headHeight = $('.po-nav-top').height() + $('.pm-nav-mobile-categories').height();
        var headHeight1 = $('.po-nav-top').height() + $('.po-nav-sub ').height();
        stylesCSS += '.inskinLoaded {}';
        stylesCSS += '.inskinLoaded .pm-ad-unit{display: none !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($(".pm-nav-mobile-categories").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".pm-nav-mobile-categories");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }else {if ($(".po-nav-sub ").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".po-nav-sub ");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight1
            });
        }
    }
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});