integration.meta = {
    'sectionID' : '129192',
    'siteName' : 'Zero Hanger - (Pagelead) - Smartphone (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1063265',
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
        if ($(".tdc-header-wrap").length == 1) {
          $("<div id='inskinanchor'></div>").insertAfter(".tdc-header-wrap");
          integration.base.setCfg({
            plr_AnchorParent: "#inskinanchor"
          });
        } else if ($(".p-navSticky").length == 1) {
          $("<div id='inskinanchor'></div>").insertBefore(".p-body");
          integration.base.setCfg({
            plr_AnchorParent: "#inskinanchor"
          });
        }
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1) {z-index: 2001 !important}';
        stylesCSS += '.inskinLoaded .td-menu-background, .inskinLoaded .td-search-background {top: 0;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('pagelead:layoutChange', function (e) {
if (e.data.fixedTop == false) {
        integration.custom.pl_behaviour = "n/a";
        integration.custom.headHeight = $(".td-header-menu-wrap-full").outerHeight();
        var newValue = '.inskinLoaded .ism-frame:nth-of-type(1), .inskinLoaded .ism-close, .inskinLoaded .ism-indicator{margin-top:' + integration.custom.headHeight + 'px !important;}';
        $("#inskinPL").html(newValue);
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
