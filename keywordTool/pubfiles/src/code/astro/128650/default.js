integration.meta = {
    'sectionID' : '128650',
    'siteName' : 'Gempak - Smartphone - ( MY )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1029955',
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
        stylesCSS += '.inskinLoaded .sf-back-to-top{right: 75px !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on('adServed', function(e) {
    setTimeout(function(){window.dispatchEvent(new Event('resize'));}, 500);
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    setTimeout(function(){window.dispatchEvent(new Event('resize'));}, 500);
});
