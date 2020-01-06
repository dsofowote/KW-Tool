integration.meta = {
    'sectionID': '129325',
    'siteName': 'SuperHeroHype - Smartphone - (INT) ',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072370',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded header {width: calc(100% - 74px)}';
        stylesCSS += '.inskinLoaded .pw-widget {display: flex}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({ 'plr_FixedTop': true, 'plr_EnableSwipe': true });
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    $("header").css({ "top": integration.custom.PageSkinTopPanel + "px" });
    $('.ism-close').on('click', function() {
        $(".inskinLoaded header").css({
            "top": "0"
        });
        $(document).off('scroll');
    });
    integration.custom.InSkinBottomNav();
    $(document).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function() {
    var scrolltop = $(document).scrollTop();
    var headerTop = integration.custom.PageSkinTopPanel - scrolltop;
    if (headerTop > 0) {
        $(".inskinLoaded header").css({
            "top": headerTop + "px"
        });
    } else {
        $(".inskinLoaded header").css({
            "top": "0"
        });
    }
}

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});