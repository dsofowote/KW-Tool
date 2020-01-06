integration.meta = {
    'sectionID' : '128781',
    'siteName' : 'Guide Auto Web - Smartphone - (FR)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1034632',
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
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight + 1;
        var secondIcon = integration.custom.FrameSideRight + 35;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded footer a[href="#top"]{right: '+ integration.custom.FrameSideRight +'px !important;}';
        stylesCSS += '.inskinLoaded a[href="#share"]{right: '+ secondIcon +'px !important;}';
        stylesCSS += '.inskinLoaded #gdpr{z-index: 9 !important;}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
  setTimeout(function(){  window.dispatchEvent(new Event('resize')); }, 1000);
});
