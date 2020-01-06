integration.meta = {
    'sectionID' : '128877',
    'siteName' : 'i3investor  MY  - Smartphone - ( MY )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1040604',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_GetContentHeightVersion': 2,
    'plr_EnableActiveResize' : false
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        integration.custom.FrameTop = e.data.plr_FrameTop;
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var windowWidth = $(window).width();
        var contentWidth = windowWidth - integration.custom.FrameSideRight;
        var tbRow2 = (contentWidth - 20) / 2;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #mainPage{top:' + integration.custom.FrameTop + 'px;max-width:' + contentWidth + 'px;}';
        stylesCSS += '.inskinLoaded .ex-ui{max-width:' + contentWidth + 'px;right:13px;position:relative;}';
        stylesCSS += '.inskinLoaded .c3.cbox tr td{max-width:' + tbRow2 + 'px}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
        
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adServed', function(e) {
    var headHeight = $("#mainPageHeader").outerHeight();
    $('.ism-frame').parent().css({"top":headHeight});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});



