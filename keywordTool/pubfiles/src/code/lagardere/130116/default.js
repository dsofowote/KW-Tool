integration.meta = {
    'sectionID' : '130116',
    'siteName' : 'Virgin Radio FR - Smartphone - (FR)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1104196',
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
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var contentWidth = $(window).width() - integration.custom.FrameSideRight;
        stylesCSS += '.inskinLoaded body{height: auto !important}';
        stylesCSS += '.inskinLoaded #nav{z-index: 5}';
        stylesCSS += '.inskinLoaded #stickyShares{width: ' + contentWidth + 'px !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    var headHeight = $('#top').outerHeight();
      $(".ism-anchor").css({"top" : headHeight});
            integration.base.setCfg({
                        plr_PageHeightAdjustment : -headHeight
                })
});

integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
});