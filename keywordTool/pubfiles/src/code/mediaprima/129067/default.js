integration.meta = {
    'sectionID' : '129067',
    'siteName' : 'Harian Metro - (Pagelead) - Smartphone - ( MY )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1047313',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ins-sticky-header{z-index: 10 !important;}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index: 11 !important;}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 1000 !important;}';
        stylesCSS += '.inskinLoaded .ins-backtotop, .ins-readnext-container{z-index: 999 !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
