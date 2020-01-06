integration.meta = {
    'sectionID' : '128608',
    'siteName' : 'Soya Cincau  - Smartphone - ( MY )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1026024',
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
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += 'html.inskinLoaded{overflow: visible;}';
        stylesCSS += '.inskinLoaded .search-form{margin-left: visible;}';
        stylesCSS += '.inskinLoaded .search-form-input {margin-left: ' + integration.custom.FrameSideRight + 'px;}';
        stylesCSS += '.inskinLoaded .pushit{position: relative;}';
        stylesCSS += '.inskinLoaded #content .loop-link h2{width: 60% !important;}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }
});

integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
});
