integration.meta = {
    'sectionID': '129036',
    'siteName': 'Jagran - Smartphone - ( IN )',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1046118',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_ScrollAdjustment': '41'
};


integration.on('adCallResult', function (e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    var windowWidth = $(window).width();
    var contentWidth = windowWidth - integration.custom.FrameSideRight;
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .bottom-sticky.text-center{max-width:' + contentWidth + 'px}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({
            'plr_FixedTop': true,
            'plr_EnableSwipe': true
        });
    }
});

integration.on('adServed', function (e) {
    $(".jwplayer").parent().css({
        "right": integration.custom.FrameSideRight
    });
});

integration.on('adClose', function (e) {
    $('body').removeClass('inskinLoaded');

    $(".jwplayer").parent().css({
        "right": "0px"
    });
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" class=\"teads\" src=\"//a.teads.tv/page/70739/tag\" async=\"true\"><\\script>";
};
