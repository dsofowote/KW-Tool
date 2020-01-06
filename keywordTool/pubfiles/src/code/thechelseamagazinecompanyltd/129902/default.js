integration.meta = {
    'sectionID' : '129902',
    'siteName' : 'Racecar Engineering - Smartphone - (UK) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1095001',
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
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        var wwidth = $(window).width();
        var cwidth = wwidth - integration.custom.FrameSideRight;
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .td-header-menu-wrap.td-affix{width: ' + cwidth + 'px !important;}';
        stylesCSS += '.inskinLoaded .td-search-wrap-mob, .inskinLoaded #td-mobile-nav {top: ' + integration.custom.PageSkinTopPanel + 'px; position: fixed;}';
        stylesCSS += '.inskinLoaded .td-header-sp-recs{margin-left: -10px;}';
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
