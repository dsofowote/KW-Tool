integration.meta = {
    'sectionID' : '129397',
    'siteName' : 'Lad Bible - (Pagelead) - Smartphone - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1076653',
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
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index: 101 !important;}';
        stylesCSS += '.scroll-lock.inskinLoaded header.header{z-index: 102 !important;}';
        stylesCSS += '.scroll-lock.inskinLoaded {position: absolute;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
});
