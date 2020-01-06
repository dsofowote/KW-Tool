integration.meta = {
    'sectionID' : '128546',
    'siteName' : 'Uzone ID Travel - Smartphone - ( ID )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1021767',
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
        var contentWidth = $(window).width() - integration.custom.FrameSideRight;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += 'body.inskinLoaded{margin-top: 44px;}';
        stylesCSS += '.inskinLoaded .navbar{max-height: 44px; min-height: 44px;}';
        stylesCSS += '.inskinLoaded .owl-carousel{width: ' + contentWidth + 'px;}';
        stylesCSS += '.inskinLoaded .item a h4{width: ' + contentWidth + 'px;}';
        stylesCSS += '.inskinLoaded .fly-to-top{right: ' + (integration.custom.FrameSideRight + 5) + 'px !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
