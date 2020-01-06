integration.meta = {
    'sectionID' : '129846',
    'siteName' : 'RFI - Smartphone - (FR)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1089857',
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
        var headHeight = $("header").outerHeight();
        if ($("body > header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("body > header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
        $("#inskinanchor").css({
          "top" : headHeight,
          "position" : "relative"
        });
        var stylesCSS = '<style type="text/css">';
        stylesCSS += 'body.inskinLoaded {overflow: visible;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $("#inskinanchor").remove();
});
