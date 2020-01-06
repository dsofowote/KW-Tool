integration.meta = {
    'sectionID' : '130127',
    'siteName' : 'Football.fr - Smartphone - (FR)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1104545',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',

};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        var HeadHeight = $('.navbar-front-page ').height();
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var sideWidth = $(window).width() - integration.custom.FrameSideRight;
        stylesCSS += '.inskinLoaded .article-share {width: ' + sideWidth + 'px !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(2){z-index: 1 !important}';
        stylesCSS += '.inskinLoaded #site-content{top: 11px !important}';
        stylesCSS += '.inskinLoaded {overflow-y: visible}';
        stylesCSS += '.inskinLoaded body {overflow: visible}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        $("#header").removeClass("header-fixed");
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
});