integration.meta = {
    'sectionID': '130045',
    'siteName': 'Motor1 - Smartphone - (IT)',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1101507',
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


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($(".m1-header-main").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".m1-header-main");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -50
            });
        }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded [id^="page_index_"] {overflow: visible}';
        stylesCSS += '.inskinLoaded .m1-header-main {width: calc(100% + 74px); max-width: calc(100% + 74px)}';
        stylesCSS += '.inskinLoaded .m1-header-ad {display: none}';
        stylesCSS += '.inskinLoaded #page_skin_top {display: none}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({ 'plr_FixedTop': true, 'plr_EnableSwipe': true });
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});