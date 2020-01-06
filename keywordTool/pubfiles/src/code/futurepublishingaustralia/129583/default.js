integration.meta = {
    'sectionID' : '129583',
    'siteName' : ' Techradar - Smartphone - (ASIA) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085482',
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
        stylesCSS += '.inskinLoaded .wrapper{position: relative;} .inskinLoaded .primary-nav .menuitems{top: 0;} .inskinLoaded .primary-nav{position: relative;}';
        stylesCSS += '@media screen and (max-width: 321px) {.inskinLoaded .site-logo svg{width: 175px !important;} .inskinLoaded .button-menu{width: 41px;} .inskinLoaded .button-search{min-width: 50px;}}';
        stylesCSS += '@media screen and (max-width: 321px) {.inskinLoaded .pagination.internal.current-prev-next.sticky-next-prev .direction{font-size: 0.65em !important;} .inskinLoaded .masthead-item.user-locale{right: 19px;}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }
});

integration.on('layoutChange', function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    var stylesCSS = '<style type="text/css">';
    stylesCSS += '.inskinLoaded .next-prev-container{width: calc(100% - ' + integration.custom.FrameSideRight + 'px)!important;}';
    stylesCSS += '.inskinLoaded .pagination.internal.current-prev-next.sticky-next-prev{width: calc(100% + ' + integration.custom.FrameSideRight + 'px)!important;}';
    stylesCSS += '</style>';
    $('head').append(stylesCSS);
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
