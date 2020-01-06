integration.meta = {
    'sectionID': '126810',
    'siteName': 'Giga - Smartphone - (INT)',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '707810',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    "plr_FastInit": true
};

integration.on("adCallResult", function(e) {
    if (e.data.hasSkin) {
      if ($("body #header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("body #header");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -10,
            });
        } 
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    $('body').addClass('inskinLoaded');
    var stylesCSS = '<style type="text/css">';
    stylesCSS += '.inskinLoaded .fixed ul{width: calc(100% - ' + integration.custom.FrameSideRight + 'px);} .inskinLoaded #WRAP{overflow: visible !important; height: auto !important; outline: none;}';
    stylesCSS += '.inskinLoaded #header{width: calc(100% + ' + integration.custom.FrameSideRight + 'px); z-index: 15;}';
    stylesCSS += '</style>';
    $('head').append(stylesCSS);
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});