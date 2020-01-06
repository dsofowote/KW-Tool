integration.meta = {
    'sectionID': '127155',
    'siteName': 'SAYS - Smartphone - (MY)',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '707952',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on("adCallResult", function(e) {
    if (e.data.hasSkin) {
        // homepage has filters attached to nav, places PageSkin under filters
        if ($(".container-fluxid").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore(".container-fluxid");
            integration.base.setCfg({
                "plr_AnchorParent": "#inskinanchor",
                "plr_PageHeightAdjustment": -51,
                "plr_StartScrollOnAnchor": true,
                "plr_ScrollAdjustment": 58
            });
        } else if ($(".story").length == 1) { //places PageSkin under nav on all other pages
            $("<div id='inskinanchor'></div>").insertBefore(".story");
            integration.base.setCfg({
                "plr_AnchorParent": "#inskinanchor",
                "plr_PageHeightAdjustment": -51,
                "plr_StartScrollOnAnchor": true
            });
        }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #content{overflow: visible;} .inskinLoaded .filter-tabs.affix ~ .container-fluxid{margin: 0 !important;}';
        stylesCSS += '.inskinLoaded [data-index="index"] header.affix ~ #content{margin-top: 100px!important;} [data-index="show"] > header.affix ~ #content{margin-top: 50px !important;}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }
});

integration.on('layoutChange', function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    var stylesCSS = '<style type="text/css">';
    stylesCSS += '.inskinLoaded .affix{width: 100%;} .inskinLoaded .ism-close{z-index: 9 !important;}';
    stylesCSS += '.inskinLoaded .affix-top{width: calc(100% + ' + integration.custom.FrameSideRight + 'px);}';
    stylesCSS += '.inskinLoaded .story-sharing{width: calc(100% - ' + integration.custom.FrameSideRight + 'px);}';
    stylesCSS += '</style>';
    $('head').append(stylesCSS);
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});