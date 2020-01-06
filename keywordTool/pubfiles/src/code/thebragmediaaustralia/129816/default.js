integration.meta = {
    'sectionID' : '129816',
    'siteName' : 'The Brag - Smartphone - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1089823',
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
        stylesCSS += '.inskinLoaded .align-self-end {padding: 0 5px}';
        stylesCSS += '.inskinLoaded .py-0 {padding: 0 10px}';
        stylesCSS += '.inskinLoaded .col-lg-8 {padding: 0 10px !important}';
        stylesCSS += '.inskinLoaded .header .flex-nowrap {padding-right: 25px}';
        stylesCSS += '.inskinLoaded .sticky-ad-top {display: none}';
        stylesCSS += '.inskinLoaded .trc_rbox_container  {max-width: 100%}';
        stylesCSS += '.inskinLoaded #taboola-below-article-thumbnails3  {max-width: 100%}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("layoutChange", function(e) {
    $('.l_toggle_menu_network, .navbar-toggler').on('click', function() {
        $("#navbarContent").toggleClass("expanded");
    });
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

