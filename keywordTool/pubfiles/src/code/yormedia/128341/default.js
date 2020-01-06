integration.meta = {
    'sectionID' : '128341',
    'siteName' : 'Planet Football - Smartphone - (INT)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1005220',
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
				integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
				integration.custom.FrameBottom = e.data.plr_FrameBottom;
				stylesCSS += '.inskinLoaded #back-to-top {right: ' + integration.custom.FrameSideRight + 'px !important; bottom:' + integration.custom.FrameBottom + 'px !important}';
        stylesCSS += '.inskinLoaded .wpmm-menu{z-index: 2 !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
      $(".ism-frame").parent().css({"top" : "-13px" });
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
