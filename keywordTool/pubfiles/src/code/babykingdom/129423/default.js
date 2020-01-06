integration.meta = {
    'sectionID' : '129423',
    'siteName' : 'Baby Kingdom - (Pagelead Only) - Smartphone - (SG)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1077015',
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
        var headHeight = $('#header').height();
        stylesCSS += '.inskinLoaded .ism-anchor{top: '+ headHeight +'px !important; z-index: 30005}';
        stylesCSS += '.inskinLoaded #aside{z-index: 30005 !important}';
        stylesCSS += '.inskinLoaded .btm_ad{padding-bottom: 0}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        integration.base.setCfg({
          plr_PageHeightAdjustment : -headHeight
  				})
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
