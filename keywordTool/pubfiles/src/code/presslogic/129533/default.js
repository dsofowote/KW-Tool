integration.meta = {
    'sectionID' : '129533',
    'siteName' : 'BusinessFocus - (Publisher Booking) - Smartphone - ( HK )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085448',
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

var headHeight;

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        headHeight = $("header").outerHeight();
        if ($("#header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
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

integration.on('adServed', function(e) {
    $(".ism-anchor").css({"top": headHeight, "z-index": "31"});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

