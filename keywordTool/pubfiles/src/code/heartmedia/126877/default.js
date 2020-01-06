integration.meta = {
    'sectionID': '126877',
    'siteName': 'Mens Folio - Smartphone - (SG)   ',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '707657',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_GetContentHeightVersion': 2,
    'plr_EnableActiveResize': false
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
    	window.dispatchEvent(new Event('resize'));
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded {overflow-x: visible;}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    window.dispatchEvent(new Event('resize'));
});