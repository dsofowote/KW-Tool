integration.meta = {
    'sectionID' : '128623',
    'siteName' : 'Swagly - Smartphone - (TW)  ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1027417',
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
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .scroll-top{right: '+ integration.custom.FrameSideRight +'px !important;}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

