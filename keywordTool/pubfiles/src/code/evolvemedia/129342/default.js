integration.meta = {
    'sectionID' : '129342',
    'siteName' : 'Cattime - Smartphone - (INT)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072966',
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
        integration.custom.PageSkinFrameSide = e.data.plr_FrameSideRight;
        stylesCSS += '.inskinLoaded .header{z-index: 3 !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index: 2 !important}';
        stylesCSS += '.inskinLoaded .r1pi--toggle{right: ' + integration.custom.PageSkinFrameSide + 'px !important; left: unset !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    var headHeight = $('.header').outerHeight();
        $(".ism-anchor").css({"top" : headHeight});
        integration.base.setCfg({
          plr_PageHeightAdjustment : -headHeight
  			});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
