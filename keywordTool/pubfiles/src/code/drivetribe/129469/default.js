integration.meta = {
    'sectionID' : '129469',
    'siteName' : 'DriveTribe - (CREATIVE APPROVAL) - Smartphone- (INT)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1078640',
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
        var headHeight = $('header').height();
        integration.custom.PageSkinFrameSide = e.data.plr_FrameSideRight;
        integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
          integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        var contentWidth = $(window).width() - integration.custom.PageSkinFrameSide;
        var topHeight = headHeight + integration.custom.PageSkinTopPanel ;
        stylesCSS += '.inskinLoaded .sc-iQKALj, .sc-kEmuub, .sc-bAtgIc, .sc-fepxGN{display: none !important}';
        stylesCSS += '.inskinLoaded #root div:nth-of-type(4){position: relative}';
        // stylesCSS += '.inskinLoaded .sc-bmyXtO{max-width:  ' + contentWidth + 'px !important; bottom: ' + integration.custom.PageSkinBottomPanel + 'px !important }';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($("header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
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
