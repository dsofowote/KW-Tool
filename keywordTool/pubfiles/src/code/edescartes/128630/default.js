integration.meta = {
    'sectionID' : '128630',
    'siteName' : 'Tagpopular - Smartphone - (HK)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1027578',
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
        var headerHeight = $('#header').height();
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += 'body.inskinLoaded{padding-top:' + headerHeight + 'px;}';
        stylesCSS += '.inskinLoaded #totop, .inskinLoaded #mobile-share-trigger{right:' + (integration.custom.FrameSideRight + 5) + 'px}';
        stylesCSS += '@media only screen and (max-width: 395px){.inskinLoaded .ads-box.ads-300{margin-left: -15px;}}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
