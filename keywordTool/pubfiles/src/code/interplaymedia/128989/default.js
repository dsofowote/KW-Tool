integration.meta = {
    'sectionID' : '128989',
    'siteName' : 'Racing - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1044415',
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
      var width = $(window).width() - 74;
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded {overflow-x: visible !important}';
        stylesCSS += '.inskinLoaded body {overflow: visible !important}';
        stylesCSS += '.inskinLoaded #hidden-calendar, .inskinLoaded .slick-current, .inskinLoaded .tc {max-width: '+ width +'px !important}';
        stylesCSS += '.inskinLoaded .cal-link {margin: 0 !important}';
        stylesCSS += '.inskinLoaded .cal-link-container {padding:20px 0px !important}';
        stylesCSS += '.inskinLoaded .social-links {margin-right:15px!important}';
        stylesCSS += '.inskinLoaded #sb-site {z-index:4}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
