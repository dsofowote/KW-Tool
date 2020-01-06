integration.meta = {
    'sectionID' : '126933',
    'siteName' : 'Now - Smartphone - (HK)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707473',
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
        if ($("#top").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#top");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -50,
                plr_ScrollAdjustment : -50
            });
        } else if ($("header").length == 1) {
            var headHeight = $("#navBar").outerHeight() + $("header").outerHeight()
            $("<div id='inskinanchor'></div>").insertAfter("header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
            $("#inskinanchor").css({"margin-top": headHeight});
        }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #top {margin-bottom: 0px !important}';
        stylesCSS += '.inskinLoaded #top {min-width: calc(100% + 74px) !important}';
        stylesCSS += '.inskinLoaded #google_ads_iframe_/94348418/now.com_HP_CA_0__container__ {width: 100% !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

